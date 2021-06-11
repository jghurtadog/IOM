import React, { useState } from "react";
import { View } from "react-native";
import Header from "../global/_children/Header";
import {
  RegistreForm1,
  RegistreForm2,
  RegistreForm3,
  RegistreForm4,
} from "./_children/RegistreForm";
import Styles from "./styles";

const Registre = (props) => {
  const [form, setForm] = useState(null);

  const renderSwitch = (param) => {
    switch (param) {
      case 1:
        return <RegistreForm2 setForm={setForm} />;
      case 2:
        return <RegistreForm3 setForm={setForm} />;
      case 3:
        return <RegistreForm4 {...props} setForm={setForm} />;
      default:
        return <RegistreForm1 setForm={setForm} />;
    }
  };

  return (
    <View style={Styles.container}>
      <View style={[Styles.box, Styles.box1]}>
        <Header {...props} form={form} setForm={setForm} />
      </View>
      <View style={[Styles.box, Styles.box2]}>{renderSwitch(form)}</View>
    </View>
  );
};

export default Registre;
