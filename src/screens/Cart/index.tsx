import React from "react";
import { FlatList } from "react-native";
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

export default function Cart() {
  const { items, total, clearCart } = useCartStore();
  const { addOrder, orders } = useOrderStore();

  return (
    <Container>
      <WrapperList>
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
              addOrder({
                id: new Date().getTime().toString(),
                date: new Date(),
                items: items
              });
              console.log("Pedido finalizado com sucesso!", orders);
              clearCart();
            }}
          />
        </WrapperButton>
      </WrapperFooter>
    </Container>
  );
}
