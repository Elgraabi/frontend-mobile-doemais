import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import BackButton from "../../components/buttons/backButton";
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";

type ForgotPasswordParamsList = NativeStackNavigationProp<RoutesParams, "LandingPage">;

export default function ForgotPasswordScreen() {
    const navigation = useNavigation<ForgotPasswordParamsList>();
    const [emailCpf, setEmailCpf] = useState('');

    // Função de validação do formulário
    const isFormValid = () => {
        return emailCpf.length > 0;
    };

    // Função para ir recuperar senha
    const handleLogin = () => {
        if (isFormValid()) {
            navigation.navigate("Home"); // Redireciona para a tela NewForgot para auterar a senha
        }
    };  

    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <BackButton onPress={() => navigation.navigate("Login")} />
            </View>
            <View style={styles.logo}>
                <Image source={require("../../../assets/Logo - Pequena.png")} />
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Recuperar Senha</Text>
                <Text style={styles.text}>
                    Insira um email/CPF para iniciar o processo de recuperação
                </Text>
            </View>
            <View style={styles.inputs}>
                <Input 
                    iconName="user" // Ícone de exemplo, você pode ajustar conforme necessário
                    title="E-mail/CPF"
                    value={emailCpf}
                    onChangeText={setEmailCpf}
                />
            </View>
            <View style={styles.button}>
                <Button 
                    className="default" 
                    title="Acessar" 
                    onPress={handleLogin} 
                    disabled={!isFormValid()} // Desabilita o botão se os campos não estiverem preenchidos
                />
            </View>
        </View>
    );
}