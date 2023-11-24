import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { commonStyles } from '../styles'
import { userContext } from '../context/userContext'
import { dbContext } from '../context/dbContext'
import { getDocs, query, where, collection } from "firebase/firestore";

export default function Perfil({ navigation }) {
  const db = React.useContext(dbContext)
  const [hasProfile, setHasProfile] = React.useState(false)
  const [profile, setProfile] = React.useState()
  const { user } = React.useContext(userContext)

  const perfilRef = collection(db, "perfil")
  const q = query(perfilRef, where("user_uid", "==", user.uid));

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        console.log(data[0])
        setProfile(data[0])
        if (data.length > 0) setHasProfile(true)
      } catch (error) {
        console.error(error)
      } finally {
      }
    };

    fetchData();
  }, []);

  return hasProfile ? (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Perfil de Usuario</Text>
      <View style={commonStyles.profileInfo}>
        <View style={commonStyles.field}>
          <Text style={commonStyles.fieldValue}>{profile.nombre}</Text>
        </View>
        <View style={commonStyles.field}>
          <Text style={commonStyles.fieldValue}>{profile.apellido}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={commonStyles.editButton}
        onPress={() =>
          navigation.navigate('FormPerfil', { hasProfile: true, user_uid: profile.user_uid })
        }
      >
        <Text style={commonStyles.buttonText}>Editar perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.volverButton}
        onPress={() =>
          navigation.navigate('Home')
        }
      >
        <Text style={commonStyles.buttonText}>Volver a la Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.logoutButton}
        onPress={() => navigation.navigate('Salir')}
      >
        <Text style={commonStyles.buttonText}>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Bienvenido {user.username}</Text>
      <TouchableOpacity
        style={commonStyles.editButton}
        onPress={() => navigation.replace('FormPerfil', { hasProfile: hasProfile, user_uid: user.uid })}
      >
        <Text style={commonStyles.buttonText}>Completa tu perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.volverButton}
        onPress={() =>
          navigation.navigate('Home')
        }
      >
        <Text style={commonStyles.buttonText}>Volver a la Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.logoutButton}
        onPress={() => navigation.navigate('Salir')}
      >
        <Text style={commonStyles.buttonText}>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  )
}