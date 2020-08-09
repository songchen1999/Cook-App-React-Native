import React, { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
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
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

const App = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [DATA, setDATA] = useState([]);
  //const [Target,setTarget] = useState('');
  //console.log("Result not in useeffect", props.target);

  const minDistance = function (word1, word2) {
    var m = word1.length;
    var n = word2.length;
    if (m == 0) {
      return n;
    } else if (n == 0) {
      return m;
    }
    var min = [];
    for (var i = 0; i <= m; i++) {
      var temp = [];
      for (var j = 0; j <= n; j++) {
        temp.push([undefined]);
      }
      min.push(temp);
    }

    for (var i = 0; i <= m; i++) {
      for (var j = 0; j <= n; j++) {
        if (i == 0) {
          min[i][j] = j;
        } else if (j == 0) {
          min[i][j] = i;
        } else if (word1[i - 1] == word2[j - 1]) {
          min[i][j] = min[i - 1][j - 1];
        } else {
          min[i][j] =
            1 + Math.min(min[i - 1][j - 1], min[i - 1][j], min[i][j - 1]);
        }
      }
    }

    return min[m][n];
  };

  useEffect(() => {
    console.log("useEffect");
    // read recipes from database
    firebase
      .database()
      .ref("recipes/")
      .once("value", (snapshot) => {
        let recipeObject = snapshot.val();
        const result = [];

        for (key in recipeObject) {
          //console.log(key, props.target);
          if (key === props.target) {
            result.push(recipeObject[key]);
          }
        }

        setDATA(result);
      });
  }, [props.target]);

  const RenderItem = ({ item }) => {
    const backgroundColor =
      item.uri === selectedId ? "#f9c2ff" : "rgb(44,44,44)";
    console.log(item, "renderItem");
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
    <View style={styles.container}>
      <ScrollView>{result}</ScrollView>
    </View>
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
