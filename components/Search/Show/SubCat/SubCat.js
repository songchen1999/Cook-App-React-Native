import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SmallPics from "./SmallPics/SmallPics";
import Title from "../../../generalGreeting/greeting";

export default class SubCat extends Component {
  render() {
    return (
      <View>
        <View style={styles.Title}>
          <Title fontWeight="bold" fontSize={20} text={this.props.text} />
        </View>

        <SmallPics genres={this.props.genres} number={this.props.number} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Title: {
    marginTop: "3%",
    marginBottom: "5%",
  },
});
