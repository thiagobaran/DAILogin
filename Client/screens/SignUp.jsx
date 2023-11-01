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
    console.log(username)
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setUser(user)
        setMessage("Usuario creado")
        navigation.replace('Home')
      })
      .catch((error) => {
        console.error(error)
        setMessage("El registro no pudo completarse")
      });
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Registrarse</Text>
      <Input label='Email' placeholder='example@gmail.com' setUsername={setUsername} secureTextEntry={false} />
      <Input label='Password' placeholder='Ingrese una Contraseña' setPassword={setPassword} secureTextEntry={true} />
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
    fontSize: 18,
    color: 'black'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
})
