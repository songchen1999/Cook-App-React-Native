import React, { Component, componentDidMount } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { SearchBar as Bar } from "react-native-elements";
import Result from "./Result/Result";

export default class SearchBar extends Component {
  state = {
    search: "",
    result: false,
  };

  updateSearch = (search) => {
    console.log(this.state.search, this.state.result);
    this.setState({ search });
    if (search.length == 0) {
      this.setState({ result: false });
    } else {
      this.setState({ result: true });
    }
  };
  render() {
    const show = this.state.result ? (
      <Result target={this.state.search} />
    ) : (
      <View></View>
    );
    const { search } = this.state;
    return (
      <View>
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
        {show}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
