import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from "react-native";

const CategoryGridTile = (props) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21){
        TouchableComponent = TouchableNativeFeedback;
    }
  return (
    <View style={styles.gridItem}>
    <TouchableComponent style = {{flex: 1}}onPress={props.onSelect}>
      <View
        style={{ ...styles.gridContainer, ...{ backgroundColor: props.color } }}
      >
        <Text style = {styles.title} numberOfLines = {2}>{props.title}</Text>
      </View>
    </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    padding: 15,
    height: 150,
    borderRadius: 10, 
    overflow: Platform.OS == 'android' && Platform.Version >=21 ?'hidden':'visible',
  },
  gridContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 19, 
    textAlign: 'right',
  }
});

export default CategoryGridTile;
