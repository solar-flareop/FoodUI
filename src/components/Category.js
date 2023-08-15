import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { categories, colors } from "../Constant";

const Category = () => {
  return (
    <View>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal>
        {categories.map((category, index) => (
          <View
            key={index}
            style={[
              styles.box,
              index === 0 ? styles.primaryBox : styles.lightBox,
            ]}
          >
            <Text style={[index === 0 ? styles.primaryBox : styles.lightBox]}>
              {category.category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    fontSize: 22,
    fontWeight: "bold",
  },
  box: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 36,
    marginVertical: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  primaryBox: {
    backgroundColor: colors.COLOR_PRIMARY,
    color: colors.COLOR_LIGHT,
  },
  lightBox: {
    backgroundColor: colors.COLOR_LIGHT,
    color: colors.COLOR_DARK_ALT,
  },
});

export default Category;
