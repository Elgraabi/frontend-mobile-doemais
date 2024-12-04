import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5", // Opcional para teste
        paddingTop: 70,
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
        fontFamily: "Inter", // Certifique-se de carregar a fonte se for customizada
        fontSize: 30, // Aproximadamente o tamanho do variant="h3" em dispositivos móveis
        lineHeight: 34,
        marginBottom: 15,
    },
    text: {
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        fontFamily: "Inter", // Certifique-se de carregar a fonte se for customizada
        fontSize: 15, // Aproximadamente o tamanho do variant="h3" em dispositivos móveis
        lineHeight: 34,
    },
    logo: {
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginTop: 30,
        width: "100%",
        height: "25%",
        alignItems: "center",
    }
});

export default styles;