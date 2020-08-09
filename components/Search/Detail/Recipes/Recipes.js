import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import Recipe from "./Recipe/Recipe";

export default function Recipes(props) {
  let result = props.recipes.map((e, i) => {
    return <Recipe key={i} recipe={e} navigation={props.navigation} />;
  });
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
      }}
    >
      <ScrollView>{result}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
