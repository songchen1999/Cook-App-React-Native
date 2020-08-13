import React from "react";
import {
  Image,
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase";

export default class HomeScreen extends React.Component {
  state = { loading: false, url: "" };
  static navigationOptions = {
    header: null,
  };

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.setState({ loading: true });
      this.uploadImage(result.uri, "test-image")
        .then(() => {
          this.setState({ loading: false });
          Alert.alert("Success");
        })
        .catch((error) => {
          this.setState({ loading: false });
          Alert.alert(error);
        });
    }

    var storage = firebase.storage();

    // Create a storage reference from our storage service
    var storageRef = storage.ref();
    storageRef
      .child("images/test-image")
      .getDownloadURL()
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log("Success", url);
        this.setState({ url: url });
      })
      .catch(function (error) {
        console.log("error");
      });
  };

  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("images/" + imageName);
    return ref.put(blob);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Choose image..." onPress={this.onChooseImagePress} />
        <ActivityIndicator size="large" animating={this.state.loading} />
        <Text style={{ color: "white" }}>
          Or you can upload image and copy the url generated{this.state.url}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, alignItems: "center" },
});
