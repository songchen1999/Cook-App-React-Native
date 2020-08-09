import React, { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
/*
const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
*/

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    // read recipes from database
    firebase
      .database()
      .ref("recipes/")
      .once("value", (snapshot) => {
        let recipeObject = snapshot.val();
        const result = [];
        for (key in recipeObject) {
          if (key === props.target) {
            result.push(recipeObject[key]);
          }
        }
        setDATA(result);
      });
  }, []);

  const RenderItem = ({ item }) => {
    const backgroundColor =
      item.uri === selectedId ? "#f9c2ff" : "rgb(44,44,44)";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.uri)}
        style={{ backgroundColor }}
      />
    );
  };

  const result = DATA.map((data) => {
    return <RenderItem key={data.uri} item={data} />;
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{result}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});

export default App;
