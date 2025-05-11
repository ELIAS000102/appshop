import { View, Text, Modal } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import Login from "@/components/loginContainer/login";
import SingIn from "@/components/loginContainer/singIn";

const loginScreen = ({ visible, onClose }: any) => {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
        <View>
          <Button
            onPress={onClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              padding: 10,
              backgroundColor: "transparent", // botón transparente
              zIndex: 1, // texto blanco
            }}
          >
            X
          </Button>
          <Login />
        </View>
    </Modal>
  );
};

export default loginScreen;
