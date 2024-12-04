import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "80%", // Ajuste de unidade de "rem" para percentual, se necessário
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20, // px: 2.5
        paddingVertical: 12, // py: 1.5
        position: "relative",
        borderRadius: 20, // 1.25rem
        borderWidth: 1,
        borderColor: "#c78cfb",
        marginTop: 15,
      },
      text: {
        position: "relative",
        marginTop: -1, // mt: -1px
        fontFamily: "paragrafo-sb", // Certifique-se de carregar a fonte
        fontWeight: "bold", // Ajuste se necessário
        color: "#c78cfb",
        fontSize: 16, // Ajuste conforme o tamanho desejado
        textAlign: "center",
        letterSpacing: 1, // Ajuste conforme necessário
        lineHeight: 20, // Ajuste conforme necessário
        fontStyle: "normal", // Ajuste conforme necessário
      },
});

export default styles;