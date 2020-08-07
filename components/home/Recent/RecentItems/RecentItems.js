import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import Constants from "expo-constants";
import RecentItem from "./RecentItem/RecentItem";

const App = (props) => {
  let result = props.recipes.map((e, i) => {
    return (
      <RecentItem height={props.height} key={i} text={e.name} uri={e.uri} />
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
