// utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token: string) => {
    try {
        await AsyncStorage.setItem('@userToken', token);
    } catch (e) {
        console.error('Erro ao armazenar o token', e);
    }
};
