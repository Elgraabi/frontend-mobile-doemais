import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";

interface ButtonRegisterProps extends TouchableOpacityProps {}

export default function ButtonRegister({ ...rest }: ButtonRegisterProps) {

    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.text}>
                Cadastrar-se
            </Text>
        </TouchableOpacity>
    );
}