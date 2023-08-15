import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rs,
} from "react-native-responsive-dimensions";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/images/welcome1.png")}
      />
      <Text style={styles.text1}>40k+ Premium Recipes</Text>
      <Text style={styles.text2}>Cook Like A Chef</Text>
      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => navigation.navigate("RecipeListScreen")}
      >
        <Text style={styles.btnText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    width: "100%",
    resizeMode: "contain",
    height: "60%",
  },
  text1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f96163",
  },
  text2: {
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 44,
    marginBottom: 25,
    color: "#3c444c",
  },
  homeBtn: {
    backgroundColor: "#f96163",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    width: "80%",
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
});

export default WelcomeScreen;
