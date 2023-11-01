import { StyleSheet, SafeAreaView } from 'react-native'
import Navigator from './Navigator'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { dbContext } from './context/dbContext';
import { userContext } from './context/userContext';

const firebaseConfig = {
  apiKey: "AIzaSyDgCO_eSWXbVBElTwsXjvcHh_CqbNiAtgk",
  authDomain: "dailogin-46bc2.firebaseapp.com",
  projectId: "dailogin-46bc2",
  storageBucket: "dailogin-46bc2.appspot.com",
  messagingSenderId: "107378610365",
  appId: "1:107378610365:web:ec6c73cd1fabbef01ae7d4",
  measurementId: "G-5NJBKZDXD6"
};

const app = initializeApp(firebaseConfig)

const database = getFirestore(app)

export default function App() {
  const [user, setUser] = useState()

  return (
    <dbContext.Provider value={database}>
      <userContext.Provider value={{user, setUser}}>
        <SafeAreaView style={styles.container}>
          <Navigator />
        </SafeAreaView>
      </userContext.Provider>
    </dbContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff"
  }
})
