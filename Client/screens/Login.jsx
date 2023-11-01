import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native'
import Input from '../components/Input'
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

  const handleLogin = () => {
    console.log(username)
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const userLogged = userCredential.user;
      const updateUserContext = async () => await setUser(userLogged)
      updateUserContext()
      setMessage('Usuario autenticado correctamente')
      navigation.replace('Home')
    })
    .catch((error) => {
      console.log(error)
      setMessage('Los datos ingresados no son correctos')
    })
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Ingresar</Text>
      <Input label='Email' placeholder='example@gmail.com' setUsername={setUsername} secureTextEntry={false} />
      <Input label='Contraseña' placeholder='Ingrese su Contraseña' setPassword={setPassword} secureTextEntry={true} />
      <TouchableOpacity style={commonStyles.editButton} onPress={handleLogin}>
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
    fontSize: 18,
    color: 'black'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
})

export default Login
