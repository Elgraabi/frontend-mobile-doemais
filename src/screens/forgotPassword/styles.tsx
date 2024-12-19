import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f5f5f5", // Opcional para teste
        paddingTop: 50,
    },
    logo: {
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 300,
        height: 50,
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
    inputs: {
        width: "90%",
        height: "20%"
    },
    backButton: {
        position: "absolute",
        paddingTop: 60,
        paddingRight: 310,
    }
});

export default styles;