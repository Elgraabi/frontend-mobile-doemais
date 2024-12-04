import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";
import ButtonEnterGoogle from "../../components/buttons/buttonEnterGoogle";
import CheckBox from 'react-native-check-box';
import ButtonRegister from "../../components/buttons/buttonRegister";

type LoginParamsList = NativeStackNavigationProp<RoutesParams, "LandingPage">;

export default function LoginScreen() {
    const navigation = useNavigation<LoginParamsList>();
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../../assets/Logo - Pequena.png")} />
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>
                    Login
                </Text>
                <Text style={styles.text}>
                    Por favor, insira um email/CPF e senha registrados para continuar.
                </Text>
            </View>
            <View style={styles.inputs}>
                <Input iconName="" title="E-mail/CPF"></Input>
                <Input iconName="eye" title="Senha"></Input>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    isChecked={isSelected} // Valor que controla a checkbox
                    onClick={() => setSelection(!isSelected)} // Atualiza o estado quando a checkbox é clicada
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>Manter-me conectado(a)</Text>
                <Text style={{marginLeft: 40}}>Esqueceu sua senha?</Text>
            </View>
            <View style={styles.button}>
                <Button className="default" title="Acessar" />
                <ButtonEnterGoogle />   
            </View>
            
            <Text style={{marginTop: 50}}>Caso ainda não possua uma conta:</Text>
            <ButtonRegister></ButtonRegister>
        </View>
    );
}