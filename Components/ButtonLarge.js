import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { GlobalContext } from "../StateManagement/GlobalProvider";
import React, { useEffect } from "react";

export default function ButtonLarge({
  head,
  navigation,
  ChangeScreen,
  func,
  info, // It is for only comparison on one screen for changing
}) {
  const button = {
    backgroundColor: info == "Detail" ? "purple" : "lightblue",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    width: "85%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
  };
  const text = {
    fontFamily: "Poppins",
    color: info == "Detail" ? "white" : "black",
    fontSize: 20,
  };

  // "Next" is in add student screen, the purpose is that to check add student and existing student
  const { GlobalSetStudInfo } = React.useContext(GlobalContext);

  useEffect(() => {
    GlobalSetStudInfo((prevState) => ({ ...prevState, info: head }));
  }, []);

  return (
    <TouchableOpacity
      style={button}
      onPress={() => {
        navigation.navigate(ChangeScreen);
      }}
    >
      <Text style={text}>{head}</Text>
    </TouchableOpacity>
  );
}
