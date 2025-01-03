import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { View } from "react-native";
import themes from "@/themes/themes";

export default function AppNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: themes.COLORS.GRAY_800 }}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </View>
  );
}
