import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const RecipeDetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={[styles.container, { backgroundColor: item.color }]}>
      <SafeAreaView style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color={"white"} />
        </Pressable>

        <FontAwesome name="heart-o" size={28} color={"white"} />
      </SafeAreaView>

      <View style={styles.subContainer}>
        {/* Image */}
        <View style={styles.box}>
          <Image source={item.image} style={styles.img} />
        </View>

        {/* Title */}
        <Text style={styles.name}>{item.name}</Text>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Description */}
            <Text style={styles.description}>{item.description}</Text>

            {/* Extra details */}
            <View style={styles.details}>
              <View
                style={[
                  styles.timerDetails,
                  { backgroundColor: "rgba(255,0,0,0.38)" },
                ]}
              >
                <Text style={styles.emoji}>⏰</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <View
                style={[
                  styles.timerDetails,
                  { backgroundColor: "rgba(135,206,235,0.8)" },
                ]}
              >
                <Text style={styles.emoji}>🥣</Text>
                <Text style={styles.time}>{item.difficulty}</Text>
              </View>
              <View
                style={[
                  styles.timerDetails,
                  { backgroundColor: "rgba(255,165,0,0.46)" },
                ]}
              >
                <Text style={styles.emoji}>🔥</Text>
                <Text style={styles.time}>{item.calories}</Text>
              </View>
            </View>

            {/* Ingredients */}
            <View style={styles.ingriContainer}>
              <Text style={styles.ingriHeader}>Ingredients:</Text>
              {item.ingredients.map((ingre, index) => (
                <View style={styles.ingriDetails} key={index}>
                  <View style={styles.ingriSubDetails} />
                  <Text style={styles.ingriTitle}>{ingre}</Text>
                </View>
              ))}
            </View>

            {/* Reciepe Steps */}
            <View style={styles.ingriContainer}>
              <Text style={styles.ingriHeader}>Steps:</Text>
              {item.steps.map((ingre, index) => (
                <Text style={styles.ingriSteps} key={index}>{`${
                  index + 1
                }) ${ingre}`}</Text>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "space-between",
    marginTop: 10,
  },
  subContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 140,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  box: {
    // backgroundColor: "red",
    height: 300,
    width: 300,
    position: "absolute",
    top: -150,
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    marginTop: 160,
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    marginVertical: 16,
    textAlign: "justify",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  timerDetails: {
    borderRadius: 8,
    width: 100,
    paddingVertical: 18,
    alignItems: "center",
  },
  emoji: {
    fontSize: 40,
  },
  time: {
    fontSize: 20,
    fontWeight: "400",
  },
  ingriContainer: {
    marginVertical: 22,
    alignSelf: "flex-start",
  },
  ingriHeader: {
    fontSize: 22,
    fontWeight: "600",
  },
  ingriDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    gap: 4,
  },
  ingriSubDetails: {
    backgroundColor: "red",
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  ingriTitle: {
    fontSize: 18,
  },
  ingriSteps: {
    fontSize: 18,
    marginLeft: 6,
    marginVertical: 6,
  },
});
export default RecipeDetailScreen;
