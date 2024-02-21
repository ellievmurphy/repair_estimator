import { Camera, CameraOrientation, CameraType } from "expo-camera";
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import * as MediaLibrary from "expo-media-library";

import CameraButton from "../components/ui/CameraButton";
import DefaultText from "../components/ui/DefaultText";
import DefaultButton from "../components/ui/DefaultButton";

function CameraScreen({ navigation, route }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, setCameraHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);

  // function toggleCameraType() {
  //   setType((current) =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // }

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
    // if (cameraRef) {
    //   try {
    //     const data = await cameraRef.current.takePictureAsync();
    //     // console.log(data);
    //     setImage(data.uri);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    const image = await ImagePicker.launchCameraAsync({allowsEditing: true, aspect: [16, 9], quality: 0.5})
  };
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        navigation.navigate({
          name: "NewProperty",
          params: { propImage: image },
          merge: true,
        });
        alert("Saved ✅");
        setImage(null);
        // console.log(route.params.propImage);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultButton pressHandler={takePicture} text={"Take Picture"} style={{backgroundColor: "black"}}/>
      {/* <View style={{flex: 1, paddingHorizontal: 5}}>
        {!image ? (
          <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}
            orientation={CameraOrientation.landscapeLeft}
          ></Camera>
        ) : (
          <Image source={{ uri: image }} style={styles.camera} />
        )}
      </View>
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
      </View> */}
    </SafeAreaView>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // // paddingVertical: 20,
    paddingTop: StatusBar.currentHeight,
    // zIndex: 0,
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
