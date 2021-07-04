/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ItemDirectoryDetail } from "../../global/_children/Card";
import DirectoryContext from "../../../../context/directory/directoryContext";

const DirectoryItem = (props) => {
  const { dataItem, getDataDirectoryItem } = useContext(DirectoryContext);
  const { otherParam = "" } = props.navigation.state.params || {};

  useEffect(() => {
    getDataDirectoryItem(otherParam);
  }, [otherParam]);

  const onPressClose = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.box, styles.box1]}>
        <View style={styles.boxImage}>
          <Image source={require("../../../resources/images/linkIcon.png")} />
        </View>
        <View style={styles.box4}>
          <TouchableOpacity onPress={onPressClose}>
            <Image
              source={require("../../../resources/images/riCloseLine.png")}
            />
          </TouchableOpacity>
          <Text style={styles.textTitle}>{otherParam}</Text>
          <Image
            source={require("../../../resources/images/riBookmarkLine.png")}
          />
        </View>
      </View>
      {dataItem !== null && (
        <View style={[styles.box, styles.box2]}>
          <FlatList
            data={dataItem.LineasTelefonicas}
            renderItem={(item) => (
              <ItemDirectoryDetail
                {...props}
                title={item.item.tipo_de_linea}
                subTitle1={item.item.NombreOrganizacion}
                subTitle2={item.item.telefono_}
                subTitle3={item.item.horario}
                subTitle={item.item.tipo_de_linea_id}
              />
            )}
            keyExtractor={(item) => item.tipo_de_linea_id}
          />
        </View>
      )}
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
  boxImage: {
    marginTop: 10,
    marginBottom: 8,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#003031",
    lineHeight: 28,
    letterSpacing: 0.0015,
  },
  box4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 21,
    marginBottom: 30,
  },
});

export default DirectoryItem;
