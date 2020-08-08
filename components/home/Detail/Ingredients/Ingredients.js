import React from "react";
import { View, Text } from "react-native";
import Ingredient from "./Ingredient/Ingredient";

export default function Ingredients(props) {
  const list = props.ingredients.map((e, i) => {
    return <Ingredient key={i} ingredient={e} />;
  });

  return (
    <View style={{ marginTop: "10%" }}>
      <Text style={{ color: "white", fontSize: 24 }}>Ingredients</Text>
      {list}
    </View>
  );
}
