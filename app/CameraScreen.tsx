import { useState, useRef } from "react";
import { Button, Image, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Camera, CameraType } from "expo-camera";

import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const CameraScreen = () => {
    const router = useRouter();

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [image, setImage] = useState<string>("");

    const cameraRef = useRef<Camera | null>(null);

    if (!permission) return <View />;

    if (!permission.granted) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>No access to camera</Text>
                <Button
                    title="Request Permission"
                    onPress={() => requestPermission()}
                />
            </View>
        );
    }

    function toggleCameraType() {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    }

    const clickPicture = async () => {
        if (!cameraRef) return console.log("Camera ref not found");

        if (!cameraRef.current) return console.log("Camera ref not found");

        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                setImage(data.uri);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleUpload = () => {
        router.back();
    };

    return (
        <View style={{ flex: 1 }}>
            {image ? (
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: image }} style={{ flex: 1 }} />

                    <View
                        style={{
                            flexDirection: "row",
                            position: "absolute",
                            bottom: 10,
                            left: 10,
                            right: 10,
                            justifyContent: "space-between",
                        }}
                    >
                        <Feather
                            name="rotate-ccw"
                            size={40}
                            color="white"
                            onPress={() => setImage("")}
                        />

                        <Feather
                            name="check"
                            size={40}
                            color="white"
                            onPress={handleUpload}
                        />
                    </View>
                </View>
            ) : (
                <Camera
                    type={type}
                    style={{ flex: 1 }}
                    ratio="16:9"
                    ref={cameraRef}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            position: "absolute",
                            bottom: 10,
                            left: 10,
                            right: 10,
                            justifyContent: "space-between",
                            padding: 30,
                        }}
                    >
                        <Feather
                            name="camera"
                            size={40}
                            color="white"
                            onPress={clickPicture}
                        />

                        <Feather
                            name="rotate-ccw"
                            size={40}
                            color="white"
                            onPress={toggleCameraType}
                        />
                    </View>
                </Camera>
            )}

            <StatusBar hidden />
        </View>
    );
};

export default CameraScreen;
