import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import { Link } from '@react-navigation/native'
import React from 'react'
import { commonStyles } from '../styles'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { userContext } from '../context/userContext'

function Login({ navigation }) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')
  const { setUser } = React.useContext(userContext)

  const auth = getAuth();

  const login = () => {
    console.log(username)
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const userLogged = userCredential.user;
      const updateUserContext = async () => await setUser(userLogged)
      updateUserContext()
      navigation.navigate('Inicio')
    })
    .catch((error) => {
      console.log(error)
      setMessage('Pruebe nuevamente, los datos ingresados son incorrectos')
    })
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Iniciar sesión</Text>
      <Input label='Mail' placeholder='Ingrese su Mail' setUsername={setUsername} secureTextEntry={false} inputMode="email" />
      <Input label='Contraseña' placeholder='Ingrese su Contraseña' setPassword={setPassword} secureTextEntry={true} inputMode="text" />
      <TouchableOpacity style={commonStyles.editButton} onPress={login}>
        <Text style={commonStyles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={{ padding: 10 }}>¿Aun no tienes una cuenta? <Link style={styles.link} to={{ screen: 'SignUp' }}>Registrarse</Link></Text>
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

export default Login
