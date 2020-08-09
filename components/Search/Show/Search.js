import * as React from "react";
import {
  TextInput,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import SearchTitleAndBar from "../Show/SearchTitleAndBar/SearchTitleAndBar";
import SubCat from "../Show/SubCat/SubCat";

function Search({ navigation }) {
  let margin = Dimensions.get("window").width * 0.05;
  const recipes = [
    {
      name: "Thai Curry Chicken",
      tag: ["Thai", "Chicken"],
      text: "Bulgogi-Authentic Korean Beef BBQ Recipe",
      description:
        "Bulgogi-Korean Beef BBQ is probably one of the best known Korean Beef BBQ dish and this recipe I found is amazing. I ate it like five times.",
      uri:
        "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",

      ingredients: [
        "1 lb Thinly sliced sirloin ",
        "3 Tbsp soy sauce",
        "2 Tbsp light brown sugar",
        "1 Tbsp honey ",
        "2 Tbsp rice cooking wine or red wine",
        "1 Tbsp sesame oil",
        "2 Tbsp minced garlic",
        "1 tsp ground black pepper",
        "2 tsp toasted sesame seeds",
        "1 Tbsp chopped green onion",
        "2 Tbsp pear, puree ",
      ],
      instructions: [
        "Make sauce by mixing all of the marinade ingredients together except for any optional vegetables such as onions or mushrooms.",
        "Mix in the bulgogi beef into the sauce prepared above – in a bowl big enough to hold the beef. Make sure the sauce is well mixed with the beef. You will need to use your hands here and just massage everything together.",
        "Heat up your favorite frying pan on high heat and just pan fry/stir fry the meat until it’s slightly brown on both sides. ",
      ],
    },
    {
      name: "Sushi",
      text: "Bulgogi-Authentic Korean Beef BBQ Recipe",
      tag: ["Japanese", "Starch", "Dinner"],
      description:
        "Bulgogi-Korean Beef BBQ is probably one of the best known Korean Beef BBQ dish and this recipe I found is amazing. I ate it like five times.",

      uri:
        "https://images.unsplash.com/photo-1567336967319-2500ab3ce9dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      ingredients: [
        "1 lb Thinly sliced sirloin ",
        "3 Tbsp soy sauce",
        "2 Tbsp light brown sugar",
        "1 Tbsp honey ",
        "2 Tbsp rice cooking wine or red wine",
        "1 Tbsp sesame oil",
        "2 Tbsp minced garlic",
        "1 tsp ground black pepper",
        "2 tsp toasted sesame seeds",
        "1 Tbsp chopped green onion",
        "2 Tbsp pear, puree ",
      ],
      instructions: [
        "Make sauce by mixing all of the marinade ingredients together except for any optional vegetables such as onions or mushrooms.",
        "Mix in the bulgogi beef into the sauce prepared above – in a bowl big enough to hold the beef. Make sure the sauce is well mixed with the beef. You will need to use your hands here and just massage everything together.",
        "Heat up your favorite frying pan on high heat and just pan fry/stir fry the meat until it’s slightly brown on both sides. ",
      ],
    },
    {
      name: "Curry Beef",
      tag: ["Japanese", "Beef", "Dinner"],
      text: "Bulgogi-Authentic Korean Beef BBQ Recipe",
      description:
        "Bulgogi-Korean Beef BBQ is probably one of the best known Korean Beef BBQ dish and this recipe I found is amazing. I ate it like five times.",

      uri:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
      ingredients: [
        "1 lb Thinly sliced sirloin ",
        "3 Tbsp soy sauce",
        "2 Tbsp light brown sugar",
        "1 Tbsp honey ",
        "2 Tbsp rice cooking wine or red wine",
        "1 Tbsp sesame oil",
        "2 Tbsp minced garlic",
        "1 tsp ground black pepper",
        "2 tsp toasted sesame seeds",
        "1 Tbsp chopped green onion",
        "2 Tbsp pear, puree ",
      ],
      instructions: [
        "Make sauce by mixing all of the marinade ingredients together except for any optional vegetables such as onions or mushrooms.",
        "Mix in the bulgogi beef into the sauce prepared above – in a bowl big enough to hold the beef. Make sure the sauce is well mixed with the beef. You will need to use your hands here and just massage everything together.",
        "Heat up your favorite frying pan on high heat and just pan fry/stir fry the meat until it’s slightly brown on both sides. ",
      ],
    },
    {
      name: "Bulgogi",
      tag: ["Korean", "Beef", "Dinner"],
      text: "Bulgogi-Authentic Korean Beef BBQ Recipe",
      description:
        "Bulgogi-Korean Beef BBQ is probably one of the best known Korean Beef BBQ dish and this recipe I found is amazing. I ate it like five times.",

      uri:
        "https://images.unsplash.com/photo-1559863658-57587f49d0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      ingredients: [
        "1 lb Thinly sliced sirloin ",
        "3 Tbsp soy sauce",
        "2 Tbsp light brown sugar",
        "1 Tbsp honey ",
        "2 Tbsp rice cooking wine or red wine",
        "1 Tbsp sesame oil",
        "2 Tbsp minced garlic",
        "1 tsp ground black pepper",
        "2 tsp toasted sesame seeds",
        "1 Tbsp chopped green onion",
        "2 Tbsp pear, puree ",
      ],
      instructions: [
        "Make sauce by mixing all of the marinade ingredients together except for any optional vegetables such as onions or mushrooms.",
        "Mix in the bulgogi beef into the sauce prepared above – in a bowl big enough to hold the beef. Make sure the sauce is well mixed with the beef. You will need to use your hands here and just massage everything together.",
        "Heat up your favorite frying pan on high heat and just pan fry/stir fry the meat until it’s slightly brown on both sides. ",
      ],
    },
    {
      name: "Honey galazed Salmon",
      tag: ["Fish", "Salmon", "Dinner"],
      text: "Bulgogi-Authentic Korean Beef BBQ Recipe",
      description:
        "Bulgogi-Korean Beef BBQ is probably one of the best known Korean Beef BBQ dish and this recipe I found is amazing. I ate it like five times.",

      uri:
        "https://images.unsplash.com/photo-1559058789-672da06263d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
      ingredients: [
        "1 lb Thinly sliced sirloin ",
        "3 Tbsp soy sauce",
        "2 Tbsp light brown sugar",
        "1 Tbsp honey ",
        "2 Tbsp rice cooking wine or red wine",
        "1 Tbsp sesame oil",
        "2 Tbsp minced garlic",
        "1 tsp ground black pepper",
        "2 tsp toasted sesame seeds",
        "1 Tbsp chopped green onion",
        "2 Tbsp pear, puree ",
      ],
      instructions: [
        "Make sauce by mixing all of the marinade ingredients together except for any optional vegetables such as onions or mushrooms.",
        "Mix in the bulgogi beef into the sauce prepared above – in a bowl big enough to hold the beef. Make sure the sauce is well mixed with the beef. You will need to use your hands here and just massage everything together.",
        "Heat up your favorite frying pan on high heat and just pan fry/stir fry the meat until it’s slightly brown on both sides. ",
      ],
    },
    {
      name: "Chocolate cookie",
      tag: ["Snack", "Cookie"],
      text: "Bulgogi-Authentic Korean Beef BBQ Recipe",
      description:
        "Bulgogi-Korean Beef BBQ is probably one of the best known Korean Beef BBQ dish and this recipe I found is amazing. I ate it like five times.",

      uri:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
      ingredients: [
        "1 lb Thinly sliced sirloin ",
        "3 Tbsp soy sauce",
        "2 Tbsp light brown sugar",
        "1 Tbsp honey ",
        "2 Tbsp rice cooking wine or red wine",
        "1 Tbsp sesame oil",
        "2 Tbsp minced garlic",
        "1 tsp ground black pepper",
        "2 tsp toasted sesame seeds",
        "1 Tbsp chopped green onion",
        "2 Tbsp pear, puree ",
      ],
      instructions: [
        "Make sauce by mixing all of the marinade ingredients together except for any optional vegetables such as onions or mushrooms.",
        "Mix in the bulgogi beef into the sauce prepared above – in a bowl big enough to hold the beef. Make sure the sauce is well mixed with the beef. You will need to use your hands here and just massage everything together.",
        "Heat up your favorite frying pan on high heat and just pan fry/stir fry the meat until it’s slightly brown on both sides. ",
      ],
    },
  ];
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
        <SubCat
          navigation={navigation}
          genres={genres}
          number={4}
          text={"Your top genres"}
        />
        <SubCat
          navigation={navigation}
          genres={genres}
          number={8}
          text={"Browse all"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Search;
