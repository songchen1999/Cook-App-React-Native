import * as React from "react";
import firebase from "firebase";
import { SafeAreaView, Text, Button } from "react-native";

function Libary({ navigation }) {
  const checkifLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in");
      } else {
        console.log("user not logged in");
      }
    });
  };
  return (
    <SafeAreaView>
      <Button onPress={checkifLoggedIn} title="CheckLogin" />
    </SafeAreaView>
  );
}

export default Libary;
