import { Text, KeyboardAvoidingView, Platform } from "react-native";
import { AddStudstyles, styles } from "../style/styles";
import { TextField } from "../Components/textField";
import React, { useState } from "react";
import ButtonLarge from "../Components/ButtonLarge";
import { GlobalContext } from "../StateManagement/GlobalProvider";

export default function AddStudent({ navigation }) {
  const [Name, setName] = useState("");
  const [studentId, setStudentID] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  // state management used for display data on home screen
  const { GlobalSetName, GlobalSetStudentID, GlobalSetPhone, GlobalSetEmail } =
    React.useContext(GlobalContext);

  // for phone number
  const handleTextChange = (newText) => {
    // Remove any non-numeric characters from the input
    const numericValue = newText.replace(/[^0-9]/g, "");
    const phone1 = numericValue.slice(0, 11);
    setPhone(phone1);
    GlobalSetPhone((prevState) => ({ ...prevState, phone: phone1 }));
  };
  const handleTextChange1 = (newText) => {
    // Remove any numeric from the input
    const name1 = newText.replace(/[^A-Z-' ']/g, "");
    setName(name1);
    GlobalSetName((prevState) => ({ ...prevState, name: name1 }));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={AddStudstyles.text}>Name</Text>
      <TextField
        label={"e.g.SAMI ULLAH"}
        value={Name}
        onChangeText={handleTextChange1}
      />

      <Text style={AddStudstyles.text}>ID</Text>
      <TextField
        label={"e.g.sp21-bcs-088"}
        value={studentId}
        onChangeText={(studentId) => {
          setStudentID(studentId);
          GlobalSetStudentID((prevState) => ({
            ...prevState,
            id: studentId,
          }));
        }}
      />

      <Text style={AddStudstyles.text}>Email</Text>
      <TextField
        label={"e.g.sami686@gmail.com"}
        value={Email}
        onChangeText={(Email) => {
          setEmail(Email);
          GlobalSetEmail((prevState) => ({
            ...prevState,
            email: Email,
          }));
        }}
      />

      <Text style={AddStudstyles.text}>Phone</Text>
      <TextField
        label={"e.g.03089789783"}
        value={Phone}
        onChangeText={handleTextChange}
        keybtype={"number-pad"}
      />

      <ButtonLarge
        head="Next"
        navigation={navigation}
        ChangeScreen={"ScanFinger"}
      />
    </KeyboardAvoidingView>
  );
}
