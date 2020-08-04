import React, { Component } from "react";
import { Text, View } from "react-native";

export default class greetings extends Component {
  render() {
    // current hours
    let date = new Date().getHours();
    // if hours is between 6 and 12, good morning
    // if hours is between 12 and 18, good afternoon
    // else good evening
    let greeting = "Good ";
    if (date >= 6 && date < 12) {
      greeting += "morning";
    } else if (date > 12 && date < 18) {
      greeting += "afternoon";
    } else {
      greeting += "evening";
    }
    return (
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}>{greeting}</Text>
      </View>
    );
  }
}
