import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ItemProfile } from "../global/_children/Card";

const Profile = (props) => {
  const { navigation } = props;
  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressLogOff = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.box, styles.box1]}>
        <View style={styles.containerHeader}>
          <View style={styles.containerForm}>
            <TouchableOpacity onPress={onPressBack} style={styles.iconLeft}>
              <Image source={require("../../resources/images/left.png")} />
            </TouchableOpacity>
            <Text style={styles.labelTitleHeader}>Perfil</Text>
          </View>
        </View>
      </View>
      <View style={[styles.box, styles.box2]}>
        <View style={styles.container}>
          <ItemProfile title="Correo electrónico" subTitle="email@email.com" />
          <ItemProfile
            title="Fecha de nacimiento"
            subTitle="0000/00/00"
            showImge
          />
          <ItemProfile title="Género" subTitle="Género" showImge />
          <ItemProfile
            title="Contraseña"
            subTitle="****************"
            showImge
          />
          <View style={styles.containerBodyLogOff}>
            <TouchableOpacity onPress={onPressLogOff}>
              <Text style={styles.labelTitleLogOff}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  box: {
    flex: 1,
  },
  //header
  box1: {
    flex: 1,
  },
  //content
  box2: {
    flex: 10,
  },
  container: {
    marginTop: 40,
    marginRight: 15,
    marginLeft: 17,
  },
  containerBodyLogOff: {
    marginTop: 20,
    marginLeft: 10,
  },
  containerHeader: {
    height: 56,
    alignItems: "center",
    backgroundColor: "#00AAAD",
    justifyContent: "center",
  },
  containerForm: {
    flexDirection: "row",
  },
  labelTitleHeader: {
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 28,
    letterSpacing: 0.0015,
    textAlign: "center",
    color: "#FFFFFF",
  },
  labelTitleLogOff: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 18,
    letterSpacing: 0.00125,
    color: "#00AAAD",
  },
  iconLeft: {
    position: "absolute",
    right: 185,
  },
});

export default Profile;
