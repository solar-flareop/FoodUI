import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} size={20} color={"#f96163"} />
      <TextInput style={styles.text1} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    marginVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  text1: {
    fontSize: 16,
    paddingLeft: 16,
    color: "#808080",
  },
});

export default SearchFilter;
