import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f5f5f5", // Opcional para teste
        paddingTop: 70,
    },
    logo: {
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 300,
        height: 170,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        fontFamily: "Inter", 
        fontSize: 30, 
        lineHeight: 34,
        marginBottom: 15,
    },
    text: {
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        fontFamily: "Inter", 
        fontSize: 15, 
        lineHeight: 34,
    },
    inputs: {
        width: "90%",
    },
    button: {
        marginTop: 30,
        width: "100%",
        height: "15%",
        alignItems: "center",
        flexDirection: "column",
        paddingHorizontal: 20,
    },
    checkboxContainer: {
        flexDirection: 'row', // Para alinhar a checkbox e o texto horizontalmente
        alignItems: 'center', // Alinha o texto com a checkbox
    },
    checkbox: {
        marginRight: 10, // Espaço entre a checkbox e o texto
    },
    checkboxLabel: {
        fontSize: 14, // Tamanho da fonte do texto
        color: 'black', // Cor do texto
        
    },
});

export default styles;