import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native'
import Input from '../components/Input'
import React, { useState } from 'react'
import { commonStyles } from '../styles'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { userContext } from '../context/userContext'


function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setUser } = React.useContext(userContext);

  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userLogged = userCredential.user;
        setUser(userLogged);
        setMessage('Usuario autenticado correctamente');
        navigation.replace('Home');
      })
      .catch((error) => {
        console.error(error);
        setMessage('Los datos ingresados no son correctos');
      });
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Ingresar</Text>
      <Input label='Email' placeholder='example@gmail.com' value={email} onChangeText={setEmail} secureTextEntry={false} />
      <Input label='Contraseña' placeholder='Ingrese su Contraseña' value={password} onChangeText={setPassword} secureTextEntry={true} />
      <TouchableOpacity style={commonStyles.editButton} onPress={handleLogin}>
        <Text style={commonStyles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.link}>¿Aún no tienes una cuenta? <Link to={{ screen: 'SignUp' }}>Registrarse</Link></Text>
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
