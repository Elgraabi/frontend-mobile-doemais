import { Text, TextInput, TextInputProps, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

type InputProps = TextInputProps & {
    title: string;
    iconName: string;
};

export default function Input({ title, iconName, ...rest }: InputProps) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder={title}
                {...rest}
            />
            <Icon name={iconName} size={25}/>
        </View>
    );
}