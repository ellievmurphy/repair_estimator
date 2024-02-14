import { Camera, CameraType } from "expo-camera";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import * as MediaLibrary from "expo-media-library";

import CameraButton from "../components/ui/CameraButton";
import DefaultText from "../components/ui/DefaultText";

function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, setCameraHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraHasPermission(cameraStatus);
    })();
  }, []);

  if (!permission) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Saved ✅");
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <DefaultText>Hello</DefaultText>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View>
        {image ? (
          <View style={styles.buttonContainer}>
            <CameraButton
              title={"Re-take"}
              icon="retweet"
              onPress={() => {
                setImage(null);
              }}
            />
            <CameraButton title={"Save"} icon="check" onPress={saveImage} />
          </View>
        ) : (
          <CameraButton
            title={"Take a picture"}
            icon="camera"
            onPress={takePicture}
          />
        )}
      </View>
    </View>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
    paddingVertical: 20,
    paddingTop: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
});
