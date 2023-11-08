import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Page = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.cameraButton}>
                <TouchableOpacity onPress={() => router.push("/CameraScreen")}>
                    <Text>Open Camera</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },
    cameraButton: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
    },
});

export default Page;
