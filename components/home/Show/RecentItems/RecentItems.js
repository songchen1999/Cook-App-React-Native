import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import Constants from "expo-constants";
import RecentItem from "./RecentItem/RecentItem";
import Ingredients from "../../Detail/Ingredients/Ingredients";

const App = (props) => {
  let result = props.recipes.map((e, i) => {
    return (
      <RecentItem
        navigation={props.navigation}
        height={props.height}
        key={i}
        ingredients={e.ingredients}
        instructions={e.instructions}
        text={e.name}
        uri={e.uri}
        moreText={e.text}
        description={e.description}
        name={e.name}
      />
    );
  });
  return (
    <View style={{ height: props.height + 50 }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "black",
        }}
      >
        {result}
      </ScrollView>
    </View>
  );
};

export default App;
