import Cart from "@/screens/Cart";
import Details from "@/screens/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Tab"
        component={TabRoutes}
        options={{ header: () => null }}
      />
      <Screen
        name="Details"
        component={Details}
        options={{
          headerTitleAlign: "center",
          title: "Detalhes",
          headerBackTitle: "Voltar",
          headerBackButtonDisplayMode: "minimal"
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitleAlign: "center",
          title: "Carrinho",
          headerBackTitle: "Voltar",
          headerBackButtonDisplayMode: "minimal"
        }}
      />
    </Navigator>
  );
}
