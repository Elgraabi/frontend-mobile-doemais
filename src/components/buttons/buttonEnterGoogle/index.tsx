import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";

export default function ButtonEnterGoogle() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.icon} source={require("../../../../assets/flat-color-icons_google.png")} />
                <Text>
                    Entrar com Google
                </Text>
            </TouchableOpacity>
        </View>
    );
}