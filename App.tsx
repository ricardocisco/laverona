import { Loading } from "@/components/Loading";
import AppNavigator from "@/routes";
import themes from "@/themes/themes";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  useFonts
} from "@expo-google-fonts/inter";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold
  });

  return (
    <ThemeProvider theme={themes}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <AppNavigator /> : <Loading />}
    </ThemeProvider>
  );
}
