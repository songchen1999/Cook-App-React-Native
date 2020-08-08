import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  ScrollView,
} from "react-native";
import TitleAndIntro from "./TitleAndIntro/TitleAndIntro";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";

export default class Detail extends Component {
  render() {
    let margin = Dimensions.get("window").width * 0.05;

    const {
      ingredients,
      text,
      description,
      uri,
      instructions,
    } = this.props.route.params;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          flexDirection: "column",
          backgroundColor: "black",
        }}
      >
        <ScrollView
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Image
            style={{ width: "100%", aspectRatio: 1 }}
            source={{
              uri: uri,
            }}
          />
          <View
            style={{
              borderLeftWidth: margin,
              borderRightWidth: margin,
              borderColor: "rgba(158, 150, 150, 0)",
            }}
          >
            <TitleAndIntro
              text={text}
              description={description}
              prep={20}
              cook={20}
              serving={4}
            />
            <Ingredients ingredients={ingredients} />
            <Instructions instructions={instructions} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
