import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/app/HomeScreen'
import Login from './src/app/login/Login'
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import useTheme from "./src/hooks/useTheme";

const Stack = createNativeStackNavigator();

export default function App() {
  const { theme } = useTheme()
  return (
    <GluestackUIProvider colorMode={theme} config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: true }}
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>

  );
}