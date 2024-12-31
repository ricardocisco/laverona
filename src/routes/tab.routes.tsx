import Home from "@/screens/Home";
import Order from "@/screens/Order";
import Setting from "@/screens/Settings";
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
          backgroundColor: "#121214",
          borderTopColor: "#2D2F33"
        },
        tabBarActiveTintColor: "#FFF"
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
