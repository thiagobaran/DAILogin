import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { commonStyles } from '../styles'

export default function Perfil({ route, navigation }) {
  const { perfil } = route.params

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Perfil de Usuario</Text>
      <View style={commonStyles.profileInfo}>
        <View style={commonStyles.field}>
          <Text style={commonStyles.fieldLabel}>Nombre:</Text>
          <Text style={commonStyles.fieldValue}>{perfil.nombre}</Text>
        </View>
        <View style={commonStyles.field}>
          <Text style={commonStyles.fieldLabel}>Apellido:</Text>
          <Text style={commonStyles.fieldValue}>{perfil.apellido}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={commonStyles.editButton}
        onPress={() =>
          navigation.replace('FormPerfil', { hasProfile: true, prevProfile: perfil, user_uid: perfil.user_uid })
        }
      >
        <Text style={commonStyles.buttonText}>Editar perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.volverButton}
        onPress={() =>
          navigation.replace('Home')
        }
      >
        <Text style={commonStyles.buttonText}>Volver a la Home</Text>
      </TouchableOpacity>
    </View>
  );
}