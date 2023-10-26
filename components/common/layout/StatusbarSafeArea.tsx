import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PRIMARY_COLOR } from "../../../constants/Colors";

type StatusBarColorProps = {
    backgroundColor?: string;
};

const StatusbarSafeArea = ({
    backgroundColor = PRIMARY_COLOR,
}: StatusBarColorProps) => {
    const insets = useSafeAreaInsets();
    
    return (
        <View style={[{ height: insets.top, backgroundColor }]}>
            {/* @ts-ignore */}
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                style="light"
            />
        </View>
    );
};

export default StatusbarSafeArea;
