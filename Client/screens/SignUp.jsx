import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native'
import Input from '../components/Input'
import React from 'react'
import { commonStyles } from '../styles'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { userContext } from '../context/userContext'

export default function SignUp({ navigation }) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')
  const { setUser } = React.useContext(userContext)

  const auth = getAuth()

  const signUp = () => {
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setUser(user)
        navigation.navigate('Inicio')
      })
      .catch((error) => {
        console.error(error)
        setMessage("Hubo un error, no se pudo terminar el registro")
      });
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Registro</Text>
      <Input label='Mail' placeholder='Ingrese un Mail' setUsername={setUsername} secureTextEntry={false} inputMode="email" />
      <Input label='Contraseña' placeholder='Ingrese una Contraseña' setPassword={setPassword} secureTextEntry={true} inputMode="text" />
      <Text style={{ padding: 10 }}>La contraseña debe tener al menos 6 caracteres</Text>
      <TouchableOpacity style={commonStyles.editButton} onPress={signUp}>
        <Text style={commonStyles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <Text style={{ padding: 10 }}>¿Ya tienes una cuenta? <Link style={styles.link} to={{ screen: 'Login' }}>Ingresar</Link></Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    padding: 10,
    fontSize: 12,
    color: 'red'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
})
