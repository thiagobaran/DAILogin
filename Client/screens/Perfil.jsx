import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
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
          navigation.navigate('FormPerfil', { hasProfile: true, prevProfile: perfil })
        }
      >
        <Text style={commonStyles.buttonText}>Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );
}