import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5", 
    },
    button: {
        width: 305,
        paddingVertical: 8, 
        backgroundColor: "#b562fd",
        borderRadius: 34,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: "Inter-SemiBold", 
        fontWeight: "600",
        fontSize: 16, 
        color: theme.light.textButton,
        textTransform: "none",
    },
    default: {
        
    },
});

export default styles;