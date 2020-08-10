import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, PixelRatio } from "react-native";
import SearchBar from "./SearchBar/SearchBar";
import Title from "../../../generalGreeting/greeting";
export default class SearchTitleAndBar extends Component {
  render() {
    return (
      <View>
        <Title fontWeight="bold" fontSize={40} text="Search" />
        <SearchBar navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
