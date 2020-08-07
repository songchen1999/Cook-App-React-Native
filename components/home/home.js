import * as React from "react";
import { SafeAreaView, ScrollView, Dimensions, View } from "react-native";
import Greeting from "./greetings/greetings";
import RecentItems from "./Recent/RecentItems/RecentItems";
import GeneralGreeting from "../generalGreeting/greeting";
import Recommendations from "./Recommendations/Recommendations";
import Setting from "./Setting/Setting";

function Home({ navigation }) {
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

  const recipes = [
    {
      name: "Thai Curry Chicken",
      uri:
        "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Sushi",
      uri:
        "https://images.unsplash.com/photo-1567336967319-2500ab3ce9dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Curry Beef",
      uri:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
    },
    {
      name: "Bulgogi",
      uri:
        "https://images.unsplash.com/photo-1559863658-57587f49d0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Honey galazed Salmon",
      uri:
        "https://images.unsplash.com/photo-1559058789-672da06263d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
    },
    {
      name: "Chocolate cookie",
      uri:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    },
  ];
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
      <ScrollView
        directionalLockEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Setting />
        <Greeting />
        <Recommendations genres={genres} number={4} />
        <GeneralGreeting
          fontWeight={"bold"}
          fontSize={20}
          text={"Recently cooked"}
        />
        <RecentItems recipes={recipes} height={120} />
        <GeneralGreeting
          fontWeight={"bold"}
          fontSize={20}
          text={"New recipes"}
        />
        <RecentItems recipes={recipes} height={140} />
        <GeneralGreeting
          fontWeight={"bold"}
          fontSize={20}
          text={"Made for you"}
        />
        <RecentItems recipes={recipes} height={150} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
