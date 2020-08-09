import React, { Component } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

export default class SmallPic extends Component {
  render() {
    const { uri, backgroundColor, text, ...rest } = this.props;
    return (
      <TouchableOpacity
        style={{ width: "48.5%" }}
        onPress={() => {
          this.props.navigation.navigate("Detail", { text: this.props.text });
        }}
      >
        <View
          style={[
            styles.outterRec,
            { backgroundColor: this.props.backgroundColor },
          ]}
        >
          <Image
            style={styles.Img}
            source={{
              uri: uri,
            }}
          />
          <Text style={styles.Text} numberOfLines={2}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  outterRec: {
    width: "100%",
    aspectRatio: 3 / 2,
    //backgroundColor: "brown",
    borderRadius: 5,
    //flexDirection: "row",
    flexDirection: "row-reverse",
    overflow: "hidden",
    justifyContent: "space-between",
    marginBottom: "5%",
  },
  Text: {
    color: "white",
    fontSize: 15,
    marginLeft: 0,
    fontWeight: "bold",
    marginTop: "4%",
    marginBottom: 0,
  },
  Img: {
    width: "45%",
    aspectRatio: 1,
    transform: [{ rotate: "30deg" }],
    marginTop: "15%",
    marginRight: "-15%",
  },
});
