import { View } from "../../../components/Themed";
import SignUpOne from "./sign-up-one";

const SignUpPage = () => {
    return (
        <View className="flex-1">
            <View style={{ flex: 1 }}>
                <SignUpOne />
            </View>
        </View>
    );
};

export default SignUpPage;
