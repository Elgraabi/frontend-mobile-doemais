import { TextInput, TextInputProps, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

// Adiciona a propriedade onIconPress
type InputProps = TextInputProps & {
    title: string;
    iconName: string;
    onIconPress?: () => void; // Adicionando onIconPress como opcional
};

export default function Input({ title, iconName, onIconPress, ...rest }: InputProps) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder={title}
                {...rest}
            />
            {/* Adiciona a funcionalidade de ícone clicável */}
            <Icon 
                style={styles.icon} 
                name={iconName} 
                size={20} 
                onPress={onIconPress} // Chama a função ao pressionar o ícone
            />
        </View>
    );
}
