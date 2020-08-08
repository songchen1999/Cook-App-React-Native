import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function TitleAndIntro(props) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <View style={styles.timeBox}>
        <Text style={styles.time}>Prep: {props.prep} minutes</Text>
        <Text style={styles.time}>Cook: {props.cook} minutes</Text>
        <Text style={styles.time}>Servings: {props.serving}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {},
  text: { color: "white", fontSize: 30, textAlign: "center" },
  description: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
  timeBox: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  time: {
    color: "white",
    fontSize: 10,
  },
});
