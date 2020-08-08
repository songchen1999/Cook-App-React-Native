import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { SearchBar as Bar } from "react-native-elements";

export default class SearchBar extends Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <Bar
        onChangeText={this.updateSearch}
        value={search}
        placeholder="Type Here..."
        containerStyle={{ borderRadius: 10 }}
        inputContainerStyle={{
          backgroundColor: "white",
          padding: 0,
          margin: -10,
          borderRadius: 10,
        }}
        searchIcon={{
          iconStyle: { margin: 10, fontSize: 30 },
          containerStyle: {
            margin: -15,
            padding: 0,
            width: 50,
            height: 50,
            //backgroundColor: "black",
          },
        }}
      />
    );
  }
}

const styles = StyleSheet.create({});
