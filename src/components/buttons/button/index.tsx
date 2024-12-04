import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";

type StyleKeys = 'default'

type ButtonProps = TouchableOpacityProps & {
    title?: string;
    className: StyleKeys;
};

export default function Button({ title, className, ...rest }: ButtonProps) {
    let styleText;

    if (className === "default") {
        styleText = {...styles.buttonText}
    } 

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles[className], styles.button]} {...rest}>
                <Text style={styleText}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}