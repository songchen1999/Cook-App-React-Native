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

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const createIngredient = () => "";
const createInstructions = () => "";

export default class Upload extends Component {
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
          <Text style={styles.text}>Upload your recipe</Text>
          <View style={styles.form}>
            <Formik
              initialValues={{
                uri: "",
                description: "",
                text: "",
                name: "",
                ingredients: [""],
                instructions: [""],
              }}
              onSubmit={(values) => Alert.alert(JSON.stringify(values))}
              validationSchema={yup.object().shape({
                uri: yup.string().url().required(),
                description: yup.string().min(6).required(),
                text: yup.string().min(6).required(),
                name: yup.string().min(6).required(),
                ingredients: yup.array().of(yup.string().min(6).required()),
                instructions: yup.array().of(yup.string().min(6).required()),
              })}
            >
              {({
                values,
                handleChange,
                errors,
                handleBlur,
                setFieldTouched,
                setFieldValue,
                touched,
                isValid,
                handleSubmit,
              }) => (
                <Fragment>
                  <TextInput
                    value={values.name}
                    style={styles.TextInput}
                    onChangeText={handleChange("name")}
                    placeholderTextColor="white"
                    onBlur={() => setFieldTouched("name")}
                    placeholder="Name of the recipe"
                  />
                  {touched.name && errors.name && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.name}
                    </Text>
                  )}
                  <TextInput
                    value={values.uri}
                    style={styles.TextInput}
                    onChangeText={handleChange("uri")}
                    placeholder="uri"
                    placeholderTextColor="white"
                    onBlur={() => setFieldTouched("uri")}
                  />
                  {touched.uri && errors.uri && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.uri}
                    </Text>
                  )}
                  <TextInput
                    value={values.description}
                    style={styles.TextInput}
                    placeholderTextColor="white"
                    onChangeText={handleChange("description")}
                    placeholder="Description"
                    onBlur={() => setFieldTouched("description")}
                  />
                  {touched.description && errors.description && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.description}
                    </Text>
                  )}
                  <TextInput
                    value={values.text}
                    style={styles.TextInput}
                    placeholderTextColor="white"
                    onChangeText={handleChange("text")}
                    placeholder="text"
                    onBlur={() => setFieldTouched("text")}
                  />
                  {touched.text && errors.text && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.text}
                    </Text>
                  )}
                  <Text style={styles.ingredients}>Ingredients</Text>
                  {values.ingredients.map((e, index) => (
                    <TextInput
                      style={styles.TextInput}
                      key={index}
                      onChangeText={handleChange(`ingredients[${index}]`)}
                      onBlur={handleBlur(`ingredients[${index}]`)}
                      value={values.ingredients[index]}
                    />
                  ))}
                  <Button
                    onPress={() =>
                      setFieldValue("ingredients", [
                        ...values.ingredients,
                        createIngredient(),
                      ])
                    }
                    title="Add an ingredient"
                  />

                  <Text style={styles.ingredients}>Instructions</Text>
                  {values.instructions.map((e, index) => (
                    <TextInput
                      style={styles.TextInput}
                      key={index}
                      onChangeText={handleChange(`instructions[${index}]`)}
                      onBlur={handleBlur(`instructions[${index}]`)}
                      value={values.instructions[index]}
                    />
                  ))}
                  <Button
                    onPress={() =>
                      setFieldValue("instructions", [
                        ...values.instructions,
                        createInstructions(),
                      ])
                    }
                    title="Add an instruction"
                  />

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
    textAlign: "left",
  },
  form: {
    alignItems: "center",
  },
  TextInput: {
    height: 20,
    backgroundColor: "rgb(37,37,38)",
    width: "80%",
    color: "white",
    fontSize: 15,
    borderColor: "grey",
    borderWidth: 2,
  },
});
