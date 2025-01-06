import { Loading } from "@/components/Loading";
import AppNavigator from "@/routes";
import themes from "@/themes/themes";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  useFonts
} from "@expo-google-fonts/inter";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { createNotifications } from "react-native-notificated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const { NotificationsProvider, useNotifications, ...events } =
  createNotifications();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold
  });

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={themes}>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={"transparent"}
            translucent
          />
          {fontsLoaded ? <AppNavigator /> : <Loading />}
        </ThemeProvider>
        <NotificationsProvider />
      </GestureHandlerRootView>
    </>
  );
}
