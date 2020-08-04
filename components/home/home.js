import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Greeting from "./greetings/greetings";
import SmallCards from "./smallcardCollection/smallcards/smallcards";
import SmallCardCollection from "./smallcardCollection/smallcardCollection";

function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginLeft: 10,
      }}
    >
      <Greeting />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 200,
            height: 80,
            backgroundColor: "grey",
            borderRadius: 10,
            marginRight: 5,
          }}
        >
          <SmallCards text={"test string77 length"} />
        </View>
        <View
          style={{
            width: 200,
            height: 80,
            backgroundColor: "grey",
            borderRadius: 10,
            marginRight: 5,
          }}
        >
          <SmallCards text={"test string77 length"} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
