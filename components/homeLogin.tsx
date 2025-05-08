import {Text, TouchableOpacity } from 'react-native'
import { style } from '../Styles/globalStyles' // Asegúrate de que la ruta sea correcta
import React from 'react'

export default function homeLogin() {
  return (
      <TouchableOpacity
        style={style.loginButtonHome}
        onPress={() => console.log("Iniciar sesión")}
      >
        <Text style={style.textLoginButton}>Login</Text>
      </TouchableOpacity>
  )
}