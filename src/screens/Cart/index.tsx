import React from "react";
import { Alert, FlatList } from "react-native";
import {
  Container,
  Text,
  WrapperButton,
  WrapperFooter,
  WrapperList,
  WrapperText
} from "./styles";
import { Button } from "@/components/Button";
import { useCartStore } from "@/store/cartStore";
import { CardCart } from "@/components/CardCart";
import { useOrderStore } from "@/store/orderStore";
import ToastManager from "toastify-react-native";
import { createNotifications } from "react-native-notificated";
import { Check } from "lucide-react-native";
import themes from "@/themes/themes";
import { ListEmpty } from "@/components/ListEmpty";

const { useNotifications } = createNotifications({});

export default function Cart() {
  const { notify } = useNotifications();
  const { items, total, clearCart } = useCartStore();
  const { addOrder, orders } = useOrderStore();

  const showNotify = () => {
    notify("success", {
      params: {
        description: "Pedido realizado com sucesso!",
        title: "Sucesso",
        style: {
          leftIconSource: <Check color={themes.COLORS.GREEN_100} />,
          accentColor: `${themes.COLORS.GRAY_300}`,
          bgColor: `${themes.COLORS.GRAY_600}`,
          titleColor: `${themes.COLORS.WHITE}`,
          descriptionColor: `${themes.COLORS.WHITE}`,
          borderWidth: 2
        }
      }
    });
  };

  return (
    <Container>
      <WrapperList>
        <ToastManager />
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardCart
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              quantity={item.quantity ?? 0}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty
              title="Carrinho vazio"
              description="parece que seu carrinho está vazio :("
            />
          )}
        />
      </WrapperList>
      <WrapperFooter>
        <WrapperText>
          <Text>
            Pagamento Total{" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </Text>
          <Text>
            Quantidade Total{" "}
            {items.reduce((acc, item) => acc + (item.quantity ?? 0), 0)}
          </Text>
        </WrapperText>
        <WrapperButton>
          <Button
            title="Cancelar Pedido"
            type="DESTRUCTIVE"
            onPress={clearCart}
          />
          <Button
            title="Finalizar compra"
            onPress={() => {
              items.length === 0
                ? Alert.alert("Seu carrinho está vazio")
                : (addOrder({
                    id: new Date().getTime().toString(),
                    date: new Date(),
                    items: items
                  }),
                  clearCart(),
                  showNotify());
            }}
          />
        </WrapperButton>
      </WrapperFooter>
    </Container>
  );
}
