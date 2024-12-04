import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Button from "../../components/buttons/button";

type LandingPageParamsList = NativeStackNavigationProp<RoutesParams, "LandingPage">;

export default function LandingPageScreen() {
    const navigation = useNavigation<LandingPageParamsList>();

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                    Faça a diferença seja solidário
                </Text>
                <Text style={styles.text}>
                     Sua contribuição ajuda a transformar vidas
                </Text>
            </View>
            <View style={styles.logo}>
                <Image source={require("../../../assets/logo - grande.png")} />
            </View>
            <View style={styles.button}>
                <Button className="default" title="Doe agora"/>
            </View>
        </View>
    );
}