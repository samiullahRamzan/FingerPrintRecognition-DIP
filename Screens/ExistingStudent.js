import { Camera, CameraType } from "expo-camera";
import React, { useEffect, useState } from "react";
import { ScannerStyles, styles } from "../style/styles";
import { AddStudentApi } from "../AxiosFetchAPIS/StudentApi's";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { GlobalContext } from "../StateManagement/GlobalProvider";

export default function ExistingStudent({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // we can know data student is existing or new student from this statment
  const {
    GlobalName,
    GlobalEmail,
    GlobalPhone,
    GlobalStudentId,
    GlobalStudInfo,
  } = React.useContext(GlobalContext);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function takePicture() {
    if (camera) {
      const Photo = await camera.takePictureAsync();
      console.log("Photo taken:", Photo);
      AddStudentApi(
        GlobalName.name,
        GlobalStudentId.id,
        GlobalEmail.email,
        GlobalPhone.phone,
        Photo.uri
      );
    }
    navigation.navigate("Advanced LMS");
  }

  return (
    <View style={ScannerStyles.container}>
      <Camera
        style={ScannerStyles.camera}
        type={type}
        ref={(ref) => setCamera(ref)}
      >
        <View style={ScannerStyles.buttonContainer}>
          <TouchableOpacity
            style={ScannerStyles.button}
            onPress={toggleCameraType}
          >
            <Text style={ScannerStyles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity style={ScannerStyles.photo} onPress={takePicture}>
        <Text style={{ fontFamily: "Poppins-regular" }}>Capture</Text>
      </TouchableOpacity>
    </View>
  );
}
