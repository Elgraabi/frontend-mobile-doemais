import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";
import ButtonEnterGoogle from "../../components/buttons/buttonEnterGoogle";
import CheckBox from 'react-native-check-box';
import ButtonRegister from "../../components/buttons/buttonRegister";
import { storeToken } from "../../utils/storege"; // Função para armazenar o token

type LoginParamsList = NativeStackNavigationProp<RoutesParams, "LandingPage">;

export default function LoginScreen() {
    const navigation = useNavigation<LoginParamsList>();
    const [isSelected, setSelection] = useState(false);
    const [emailCpf, setEmailCpf] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Função para alternar visibilidade da senha
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Função de validação do formulário
    const isFormValid = () => {
        return emailCpf.length > 0 && password.length > 0;
    };

    // Função para login
    const handleLogin = () => {
        if (isFormValid()) {
            // Simulação de login (você integraria com uma API real aqui)
            if (isSelected) {
                storeToken("fakeToken"); // Armazena o token se "Manter-me conectado" for selecionado
            }
            navigation.navigate("Home"); // Redireciona para a tela inicial após o login
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../../assets/Logo - Pequena.png")} />
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.text}>
                    Por favor, insira um email/CPF e senha registrados para continuar.
                </Text>
            </View>
            <View style={styles.inputs}>
                <Input 
                    iconName="user" // Ícone de exemplo, você pode ajustar conforme necessário
                    title="E-mail/CPF"
                    value={emailCpf}
                    onChangeText={setEmailCpf}
                />
                <Input 
                    iconName={passwordVisible ? "eye" : "eye-slash"} 
                    title="Senha" 
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                    onIconPress={togglePasswordVisibility} // Função de alternar visibilidade da senha
                />
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    isChecked={isSelected}
                    onClick={() => setSelection(!isSelected)}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel} onPress={() => setSelection(!isSelected)}>Manter-me conectado(a)</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={{ marginLeft: 40 }}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <Button 
                    className="default" 
                    title="Acessar" 
                    onPress={handleLogin} 
                    disabled={!isFormValid()} // Desabilita o botão se os campos não estiverem preenchidos
                />
                <ButtonEnterGoogle />
            </View>
            
            <Text style={{ marginTop: 50 }}>Caso ainda não possua uma conta:</Text>
            <ButtonRegister onPress={() => navigation.navigate("Register")} />
        </View>
    );
}
