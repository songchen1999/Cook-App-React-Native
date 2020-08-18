import React, { useEffect } from "react";
import Nav from "./navigation/navigation";
import * as firebase from "firebase";
firebase.initializeApp({
  // please input your own configure that you can find in firebase console
});

const App = () => {
  return <Nav />;
};

export default App;
