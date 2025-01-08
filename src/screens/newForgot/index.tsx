import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import BackButton from "../../components/buttons/backButton";

type ForgotPasswordParamsList = NativeStackNavigationProp<RoutesParams, "LandingPage">;

export default function NewForgotScreen() {
    const navigation = useNavigation<ForgotPasswordParamsList>();

    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <BackButton onPress={() => navigation.navigate("Login")} />
            </View>
            <View style={styles.logo}>
                <Image source={require("../../../assets/Logo - Pequena.png")} />
            </View>
            
        </View>
    );
}