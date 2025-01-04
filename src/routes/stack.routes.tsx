import Cart from "@/screens/Cart";
import Details from "@/screens/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";
import themes from "@/themes/themes";
import { DetailOrder } from "@/screens/DetailOrder";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTintColor: themes.COLORS.WHITE,
        headerStyle: {
          backgroundColor: themes.COLORS.GRAY_800
        },
        headerTitleStyle: { fontSize: 22 },
        headerTransparent: true
      }}
    >
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
      <Screen
        name="DetailOrder"
        component={DetailOrder}
        options={{
          headerTitleAlign: "center",
          title: "Detalhes do Pedido",
          headerBackTitle: "Voltar",
          headerBackButtonDisplayMode: "minimal"
        }}
      />
    </Navigator>
  );
}
