import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../components/SearchFilter";
import Category from "../components/Category";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerIcon="bell-o" headerText="Hi, Suraj" />
      <SearchFilter icon="search" placeholder="Enter your favourite recipe" />
      <Category />
      <RecipeCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});

export default RecipeListScreen;
