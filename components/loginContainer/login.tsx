import { View, Text, InputAccessoryView, TextInput } from 'react-native'
import React from 'react'

export default function login() {
  return (
    <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 20}}>Iniciar Sesión</Text>
    <View>
      <TextInput placeholder='correo@gmail.com' />
    </View>
    <View>
        <TextInput placeholder="Contraseña"
        secureTextEntry={true}/>        
    </View>
    </View>
  )
}