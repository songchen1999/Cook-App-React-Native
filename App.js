import React, { useEffect } from "react";
import Nav from "./navigation/navigation";
import * as firebase from "firebase";
firebase.initializeApp({
  apiKey: "AIzaSyBBMFPWeZ-Igh84ZlcpPrEo5-fgHRpJ-_A",
  authDomain: "cook-react-native.firebaseapp.com",
  databaseURL: "https://cook-react-native.firebaseio.com",
  projectId: "cook-react-native",
  storageBucket: "cook-react-native.appspot.com",
  messagingSenderId: "776274146272",
  appId: "1:776274146272:web:55ea74c2ed066a0befb185",
  measurementId: "G-XE25PVDRDM",
});

const App = () => {
  return <Nav />;
};

export default App;
