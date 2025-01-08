import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, Text, View, Alert } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import BackButton from "../../components/buttons/backButton";
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";

type ForgotPasswordParamsList = NativeStackNavigationProp<RoutesParams, "LandingPage">;

export default function NewForgotScreen() {
    const navigation = useNavigation<ForgotPasswordParamsList>();
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassWord] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [ConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    // Função de validação do formulário
    const isFormValid = () => {
        return password.length > 0;
    };

    // Função recuperar senha
    const handlePress = () => {
        if (isFormValid()) {
            if(password == ConfirmPassword){
                navigation.navigate("Login"); // Redireciona para a tela Login após auterar a senha
            }
            //Popup de erro, para se caso password e ConfirmPassword forem diferentes
            Alert.alert('As senhas não são iguais!');
        }
    }; 
    
    // Função para alternar visibilidade da senha
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Função para alternar visibilidade de confirmar senha
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!ConfirmPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <BackButton onPress={() => navigation.navigate("ForgotPassword")} />
            </View>
            <View style={styles.logo}>
                <Image source={require("../../../assets/Logo - Pequena.png")} />
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Nova Senha</Text>
                <Text style={styles.text}>
                    Crie uma nova senha
                </Text>
            </View>
            <View style={styles.inputs}>
                <Text>Senha:</Text>
                <Input 
                    iconName={passwordVisible ? "eye" : "eye-slash"} 
                    title="" 
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                    onIconPress={togglePasswordVisibility} // Função de alternar visibilidade da senha
                />
                <Text>Confirmar Senha:</Text>
                <Input 
                    iconName={passwordVisible ? "eye" : "eye-slash"} 
                    title="" 
                    secureTextEntry={!ConfirmPasswordVisible}
                    value={ConfirmPassword}
                    onChangeText={setConfirmPassWord}
                    onIconPress={toggleConfirmPasswordVisibility} // Função de alternar visibilidade da senha
                />
            </View>
            <View style={styles.button}>
                <Button 
                    className="default" 
                    title="Salvar" 
                    onPress={handlePress} 
                    disabled={!isFormValid()} // Desabilita o botão se os campos não estiverem preenchidos
                />
            </View>
        </View>
    );
}