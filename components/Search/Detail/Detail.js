import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Dimensions } from "react-native";
import Recipes from "./Recipes/Recipes";
import firebase from "firebase";

export default function Detail(props) {
  const [recipes, setRecipes] = useState([]);
  let margin = Dimensions.get("window").width * 0.05;
  useEffect(() => {
    // read recipes THAT FIT THE GENRE  from database
    firebase
      .database()
      .ref("recipes/")
      .once("value", (snapshot) => {
        let recipeObject = snapshot.val();
        const { text } = props.route.params;
        const result = [];
        for (key in recipeObject) {
          if (recipeObject[key].tag.findIndex((e) => e === text) !== -1) {
            result.push(recipeObject[key]);
          }
        }
        setRecipes(result);
      });
  }, []);

  useEffect(() => {
    const { text } = props.route.params;
    props.navigation.setOptions({ title: text });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        borderLeftWidth: margin,
        borderRightWidth: margin,
        borderColor: "rgba(158, 150, 150, 0)",
        backgroundColor: "black",
      }}
    >
      <Recipes navigation={props.navigation} recipes={recipes} />
    </SafeAreaView>
  );
}
