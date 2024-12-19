import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, Text, View, ScrollView, Alert } from "react-native";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";
import BackButton from "../../components/buttons/backButton";
import { TextInputMask } from 'react-native-masked-text'; // Importando biblioteca para máscara

type RegisterParamsList = NativeStackNavigationProp<RoutesParams, "LandingPage">;

export default function RegisterScreen() {
    const navigation = useNavigation<RegisterParamsList>();

    // Estados para os campos de input
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');

    // Funções de validação
    const isFormValid = () => {
        return (
            fullName.length >= 3 &&
            /^\S+@\S+\.\S+$/.test(email) &&
            password.length >= 6 &&
            password === confirmPassword &&
            /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cpfCnpj) &&
            /^\d{2}\/\d{2}\/\d{4}$/.test(birthDate) &&
            /^\(\d{2}\) \d{1} \d{4}-\d{4}$/.test(phone)
        );
    };

    const handleSubmit = () => {
        if (isFormValid()) {
            // Aqui você pode integrar com a API para cadastrar o usuário
            Alert.alert('Cadastro realizado com sucesso!');
        } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
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
                <Text style={styles.title}>Cadastro de usuário</Text>
            </View>
            <ScrollView style={styles.inputs}>
                <Text>Nome completo</Text>
                <Input 
                    iconName="" 
                    title="Digite seu nome"
                    value={fullName}
                    onChangeText={setFullName}
                />
                <Text>E-mail</Text>
                <Input 
                    iconName="" 
                    title="Digite seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text>Senha</Text>
                <Input 
                    iconName="" 
                    title="Digite sua senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Text>Confirmar senha</Text>
                <Input 
                    iconName="" 
                    title="Confirme sua senha"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <Text>CPF/CNPJ</Text>
                <TextInputMask
                    type={'custom'}
                    options={{ mask: '999.999.999-99' }}
                    value={cpfCnpj}
                    onChangeText={setCpfCnpj}
                    placeholder="000.000.000-00"
                />
                <Text>Data de nascimento</Text>
                <TextInputMask 
                    type={'custom'}
                    options={{ mask: '99/99/9999' }}
                    value={birthDate}
                    onChangeText={setBirthDate}
                    placeholder="dd/mm/aaaa"
                />
                <Text>Telefone</Text>
                <TextInputMask
                    type={'custom'}
                    options={{ mask: '(99) 9 9999-9999' }}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="(xx) x xxxx-xxxx"
                />
            </ScrollView>

            <Button className="default" title="Cadastrar" onPress={handleSubmit} disabled={!isFormValid()} />
        </View>
    );
}
