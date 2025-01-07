import Home from "@/screens/Home";
import Order from "@/screens/Order";
import Setting from "@/screens/Settings";
import themes from "@/themes/themes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, ShoppingBag, Settings } from "lucide-react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 6,
          backgroundColor: `${themes.COLORS.GRAY_700}`,
          borderTopColor: `${themes.COLORS.GRAY_600}`
        },
        tabBarActiveTintColor: `${themes.COLORS.WHITE}`
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <House color={color} size={32} />
        }}
      />
      <Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ShoppingBag color={color} size={32} />
          )
        }}
      />
      <Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({ color, size }) => <Settings color={color} size={32} />
        }}
      />
    </Navigator>
  );
}
