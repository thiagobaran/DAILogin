import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native'
import Input from '../components/Input'
import React from 'react'
import { commonStyles } from '../styles'

function Login({ navigation }) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')

  const login = () => {
    const user = {
      username: username,
      pass: password
    }
    console.log(username, password)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    }
    fetch('http://localhost:5000/login', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.message === 'authenticated') {
          setMessage('Usuario autenticado correctamente')
          navigation.navigate('Home', {user})
        }
        else setMessage('Los datos ingresados no son correctos')
      })
  }

  return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.header}>Login</Text>
        <Input label='Username' placeholder='Ingrese su Nombre de Usuario' setUsername={setUsername} secureTextEntry={false} />
        <Input label='Password' placeholder='Ingrese su Contraseña' setPassword={setPassword} secureTextEntry={true} />
        <TouchableOpacity style={commonStyles.editButton} onPress={login}>
          <Text style={commonStyles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <Text style={{padding: 10}}>Don't have an account? <Link style={styles.link} to={{ screen: 'SignUp'}}>Sign Up</Link></Text>
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
