import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TitleAndIntro from "./TitleAndIntro/TitleAndIntro";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase";

export default class Detail extends Component {
  state = { hearted: false };

  componentDidMount() {
    firebase
      .database()
      .ref("users/" + firebase.auth().currentUser.uid + "/likes")
      .once("value", (snapshot) => {
        let likesArray = snapshot.val();
        if (likesArray != null) {
          for (element of likesArray) {
            if (element === this.props.route.params.name) {
              this.setState({ hearted: true });
              break;
            }
          }
        }
      });
    console.log("componentDidMount", this.state.hearted);
  }

  render() {
    let margin = Dimensions.get("window").width * 0.05;
    const {
      ingredients,
      text,
      description,
      uri,
      instructions,
      name,
    } = this.props.route.params;
    //console.log("users/" + name);
    const updateLikes = () => {
      firebase
        .database()
        .ref("users/" + firebase.auth().currentUser.uid + "/likes")
        .once("value", (snapshot) => {
          let likesArray = snapshot.val();

          if (likesArray != null) {
            console.log(this.state.hearted);
            if (this.state.hearted == true) {
              firebase
                .database()
                .ref("users/" + firebase.auth().currentUser.uid)
                .set({ likes: [...likesArray, name] });
              console.log("success addition");
            } else {
              // find the removal index
              let index = [];
              for (let i = 0; i < likesArray.length; i++) {
                if (likesArray[i] == name) {
                  index.push(i);
                }
              }
              index.forEach((i) => likesArray.splice(i, 1));
              firebase
                .database()
                .ref("users/" + firebase.auth().currentUser.uid)
                .set({ likes: likesArray });
              console.log("successful removal", likesArray);
            }
          } else {
            firebase
              .database()
              .ref("users/" + firebase.auth().currentUser.uid)
              .set({ likes: [name] });
            console.log("success");
          }
        });
    };

    const heart2 = this.state.hearted ? (
      <TouchableOpacity
        onPress={() => {
          this.setState({ hearted: !this.state.hearted });
          updateLikes();
        }}
      >
        <AntDesign name="heart" size={24} color="red" />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => {
          this.setState({ hearted: !this.state.hearted });
          updateLikes();
        }}
      >
        <AntDesign name="heart" size={24} color="white" />
      </TouchableOpacity>
    );

    const heart = firebase.auth().currentUser != null ? heart2 : <View></View>;

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
            {heart}

            <Ingredients ingredients={ingredients} />
            <Instructions instructions={instructions} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
