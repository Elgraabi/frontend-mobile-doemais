import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

interface ButtonRegisterProps extends TouchableOpacityProps { }

export default function BackButton({ ...rest }: ButtonRegisterProps) {
    return (
        <View >
            <TouchableOpacity style={styles.box} {...rest}>
                <Icon name="arrow-left" size={35} color="#000"></Icon>
            </TouchableOpacity>
        </View>
    );
}