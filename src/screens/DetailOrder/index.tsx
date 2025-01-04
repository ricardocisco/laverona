import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import {
  BoxTotal,
  Container,
  Image,
  Title,
  WrapperContainer,
  WrapperDate,
  WrapperItem,
  WrapperPrice,
  WrapperTotal
} from "./styles";
import themes from "@/themes/themes";
import { Check } from "lucide-react-native";
import { FlatList, View } from "react-native";
import { TotalBox } from "@/components/TotalBox";

interface DetailsRoute {
  id: string;
  date: string;
  items: {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
  }[];
}

type DetailOrderProps = RouteProp<ParamListBase, "DetailOrder"> & {
  params: DetailsRoute;
};

export function DetailOrder() {
  const route = useRoute<DetailOrderProps>();
  const { id, date, items } = route.params;

  const parsedDate = new Date(date);

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Container>
      <WrapperDate>
        <Check size={24} color={themes.COLORS.GREEN_100} />
        <Title>
          Pedido concluído as{" "}
          {parsedDate.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </Title>
      </WrapperDate>
      <WrapperContainer>
        <Title>Detalhes do pedido</Title>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <View>
              <WrapperItem>
                <Image source={{ uri: item.item.image }} />
                <WrapperPrice>
                  <Title>{item.item.title}</Title>
                  <Title>
                    {item.item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL"
                    })}
                  </Title>
                </WrapperPrice>
              </WrapperItem>
              <Title>{item.item.description}</Title>
            </View>
          )}
        />
        <WrapperTotal>
          <Title>Resumo de valores</Title>
          <View>
            <TotalBox
              label="Subtotal"
              value={total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            />
            <TotalBox label="Frete" value="Gratis" />
            <TotalBox
              label="Total"
              value={total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            />
          </View>
        </WrapperTotal>
      </WrapperContainer>
    </Container>
  );
}
