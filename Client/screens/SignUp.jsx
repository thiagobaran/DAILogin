import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native'
import Input from '../components/Input'
import React from 'react'
import { commonStyles } from '../styles'

export default function SignUp() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')

  const signUp = () => {
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
    fetch('http://localhost:5000/register', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.message === 'user created') {
          setMessage('Usuario creado')
          navigation.navigate('Home', {user})
        }
        else setMessage('El usuario ya existe')
      })
  }

  return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.header}>Registrarse</Text>
        <Input label='Username' placeholder='Ingrese un Nombre de Usuario' setUsername={setUsername} secureTextEntry={false} />
        <Input label='Password' placeholder='Ingrese una Contraseña' setPassword={setPassword} secureTextEntry={true} />
        <TouchableOpacity style={commonStyles.editButton} onPress={signUp}>
          <Text style={commonStyles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <Text style={{padding:10}}>Already have an account? <Link style={styles.link} to={{ screen: 'Login'}}>Login</Link></Text>
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
