import * as yup from "yup";
import { Formik } from "formik";
import React, { Component, Fragment } from "react";
import {
  TextInput,
  Text,
  Button,
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import firebase from "firebase";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class setProfile extends Component {
  render() {
    let margin = Dimensions.get("window").width * 0.05;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
          borderLeftWidth: margin,
          borderRightWidth: margin,
          borderColor: "rgba(158, 150, 150, 0)",
          backgroundColor: "black",
        }}
      >
        <KeyboardAwareScrollView>
          <Text style={styles.text}>Change your profile</Text>
          <View style={styles.form}>
            <Formik
              initialValues={{
                displayName: firebase.auth().currentUser.displayName,
                photoURL: firebase.auth().currentUser.photoURL,
              }}
              onSubmit={(values) => {
                const user = firebase.auth().currentUser;

                user
                  .updateProfile({
                    displayName: values.displayName,
                    photoURL: values.photoURL,
                  })
                  .then(function () {
                    console.log(
                      "success",
                      firebase.auth().currentUser.displayName
                    );
                  })
                  .catch(function (error) {
                    console.log(
                      "failed",
                      firebase.auth().currentUser.displayName
                    );
                  });
                this.props.navigation.goBack();
              }}
              validationSchema={yup.object().shape({
                displayName: yup.string().min(4),
                photoURL: yup.string().url(),
              })}
            >
              {({
                values,
                handleChange,
                errors,
                handleBlur,
                parseAndHandleChange,
                setFieldTouched,
                setFieldValue,
                touched,
                isValid,
                handleSubmit,
              }) => (
                <Fragment>
                  <TextInput
                    value={values.displayName}
                    style={styles.TextInput}
                    onChangeText={handleChange("displayName")}
                    placeholderTextColor="yellow"
                    onBlur={() => setFieldTouched("displayName")}
                    placeholder="new display name"
                  />
                  {touched.displayName && errors.displayName && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.displayName}
                    </Text>
                  )}
                  <TextInput
                    value={values.photoURL}
                    style={styles.TextInput}
                    onChangeText={handleChange("photoURL")}
                    placeholderTextColor="yellow"
                    onBlur={() => setFieldTouched("photoURL")}
                    placeholder="new display photo"
                  />
                  {touched.photoURL && errors.photoURL && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.photoURL}
                    </Text>
                  )}

                  <Button
                    title="Submit"
                    disabled={!isValid}
                    onPress={handleSubmit}
                  />
                </Fragment>
              )}
            </Formik>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: "white",
    textAlign: "center",
    marginVertical: "10%",
  },
  ingredients: {
    fontSize: 20,
    color: "white",
  },
  form: {
    alignItems: "center",
  },
  TextInput: {
    height: 40,
    backgroundColor: "rgb(37,37,38)",
    width: "80%",
    color: "white",
    fontSize: 15,
    borderColor: "grey",
    borderWidth: 2,
  },
});
