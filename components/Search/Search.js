import * as React from "react";
import {
  TextInput,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import SearchTitleAndBar from "./SearchTitleAndBar/SearchTitleAndBar";
import SubCat from "./SubCat/SubCat";

function Search({ navigation }) {
  let margin = Dimensions.get("window").width * 0.05;
  const genres = [
    {
      uri:
        "https://images.unsplash.com/photo-1591325418441-ff678baf78ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      text: "Japanese",
      backgroundColor: "red",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1584278858536-52532423b9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      text: "Korean",
      backgroundColor: "orange",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      text: "Chinese",
      backgroundColor: "green",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      text: "Vegan",
      backgroundColor: "purple",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      text: "Breakfast",
      backgroundColor: "pink",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      text: "Dessert",
      backgroundColor: "blue",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      text: "Steak",
      backgroundColor: "brown",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      text: "Thai",
      backgroundColor: "#fb9a06",
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        //marginHorizontal: margin,
        borderLeftWidth: margin,
        borderRightWidth: margin,
        borderColor: "rgba(158, 150, 150, 0)",
        backgroundColor: "black",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchTitleAndBar />
        <SubCat genres={genres} number={4} text={"Your top genres"} />
        <SubCat genres={genres} number={8} text={"Browse all"} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Search;
