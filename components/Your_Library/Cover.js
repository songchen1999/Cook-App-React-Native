import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import Library from "./Your_Library";
import firebase from "firebase";

export default function Cover({ navigation }) {
  const Result = ({ navigation }) =>
    firebase.auth().currentUser !== null ? (
      <Library navigation={navigation} />
    ) : (
      <SafeAreaView>
        <Button
          title="pls login"
          onPress={() => {
            navigation.navigate("login");
          }}
        />
      </SafeAreaView>
    );
  return <Result navigation={navigation} />;
}
