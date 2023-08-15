import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Recipes</Text>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={recipeList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.box}
            onPress={() => navigation.navigate("RecipeDetail", { item: item })}
          >
            <Image source={item.image} style={styles.img} />
            <Text>{item.name}</Text>

            <View style={styles.info}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={styles.subInfo}>
                <Text>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    fontSize: 22,
    fontWeight: "bold",
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: colors.COLOR_LIGHT,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: "center",
  },
  info: {
    flexDirection: "row",
    marginVertical: 8,
  },
  subInfo: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});

export default RecipeCard;
