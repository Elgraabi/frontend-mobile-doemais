import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";

export default function ButtonRegister() {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                Cadastrar-se
            </Text>
        </TouchableOpacity>
    );
}