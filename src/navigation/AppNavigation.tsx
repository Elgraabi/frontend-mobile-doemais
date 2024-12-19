import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "../screens/landingPage";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import ForgotPasswordScreen from "../screens/forgotPassword";
import HomeScreen from "../screens/home";



const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
                
                <Stack.Screen name="LandingPage" component={LandingPageScreen} />

                <Stack.Screen name="Login" component={LoginScreen} />

                <Stack.Screen name="Register" component={RegisterScreen} />
                
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

                <Stack.Screen name="Home" component={HomeScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}