import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 305,
        height: 42,
        backgroundColor: "#cbcacc",
        borderRadius: 34,
        textTransform: "none",
    },
    text: {
        fontFamily: "Inter, Helvetica, Arial, sans-serif", // Certifique-se de que a fonte Inter está disponível
        fontWeight: "400",
        color: "black",
        lineHeight: 34,
    },
    icon: {
        marginRight: 10, // Espaçamento entre o ícone e o texto
    },
});

export default styles;