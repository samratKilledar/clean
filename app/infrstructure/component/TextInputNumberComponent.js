import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import { useState, useEffect } from 'react';

const TextInputNumberComponent = (props) => {
  //const [text, onChangeText] = React.useState("Useless Text");
  const val = (props.value) ? (props.value).toString() : "";
  const [number1, onChangeNumber] = useState(val);
  const [passError, setpassError] = useState(false);

  //alert(props.value)
  useEffect(() => {
    // Update the document title using the browser API
    // alert(number1)
    if (number1 > 10) {
      setpassError(true)
    } else {
      setpassError(false)
    }
  });
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number1}
        placeholder={props.placeholder}
        placeholderTextColor="red"
        keyboardType="numeric"
      />
      {passError == true ?
        <Text style={{ color: "red" }}> Se requiere numero de telefono</Text> : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: 'green',
  },
});
export default TextInputNumberComponent;