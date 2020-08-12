import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  View,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import Title from "../../components/generalGreeting/greeting";
import firebase from "firebase";
import RecentItem from "../home/Show/RecentItems/RecentItem/RecentItem";

function Libary({ navigation }) {
  const [yours, setYours] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    // read recipes from database
    firebase
      .database()
      .ref("recipes/")
      .once("value", (snapshot) => {
        let recipeObject = snapshot.val();
        const result = [];
        for (key in recipeObject) {
          if (recipeObject[key].author === firebase.auth().currentUser.uid) {
            result.push(recipeObject[key]);
          }
          console.log(key.author, firebase.auth().currentUser.uid);
        }
        setYours(result);
        firebase
          .database()
          .ref("users/" + firebase.auth().currentUser.uid + "/likes/")
          .once("value", (snapshot) => {
            let nameArray = snapshot.val();
            if (nameArray != null) {
              let converted = nameArray.map((e) => {
                return recipeObject[e];
              });
              //console.log(converted);
              setLikes(converted);
            }
          });
      });
  }, []);

  const checkifLoggedIn = () => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in");
      } else {
        console.log("user not logged in");
      }
    });
  };

  const renderItem = ({ item }) => {
    console.log("rendered", item, item.name);
    return (
      <RecentItem
        navigation={navigation}
        height={100}
        ingredients={item.ingredients}
        instructions={item.instructions}
        text={item.name}
        uri={item.uri}
        moreText={item.text}
        description={item.description}
        name={item.name}
      />
    );
  };
  let margin = Dimensions.get("window").width * 0.05;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        borderLeftWidth: margin,
        borderRightWidth: margin,
        borderColor: "rgba(158, 150, 150, 0)",
        backgroundColor: "black",
      }}
    >
      <View style={styles.pAl}>
        <View style={styles.profile}>
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1597151497942-a7819890bee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            }}
            style={{
              width: margin * 4,
              aspectRatio: 1,
              borderRadius: margin * 2,
            }}
          />
          <Text style={{ color: "white" }}>Song Chen</Text>
        </View>
        <Button
          title="logout"
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(function () {
                console.log("sign out successfully");
              })
              .catch(function (error) {
                console.log("sign out failed");
              });
          }}
        />
      </View>

      <View>
        <Title fontWeight="bold" fontSize={20} text="Your recipes" />
        <FlatList
          horizontal={true}
          data={yours}
          renderItem={renderItem}
          keyExtractor={(item) => item.uri}
        />
      </View>
      <View>
        <Title fontWeight="bold" fontSize={20} text="Your favourites" />
        <FlatList
          horizontal={true}
          data={likes}
          renderItem={renderItem}
          keyExtractor={(item) => item.uri}
        />
      </View>
    </SafeAreaView>
  );
}

export default Libary;

const styles = StyleSheet.create({
  logout: {},
  profile: {
    flexDirection: "column",
  },
  pAl: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  selfMade: {},
});
