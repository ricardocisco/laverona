import { FlatList, SectionList, Text, View } from "react-native";
import {
  Container,
  Header,
  Title,
  WrapperCheck,
  WrapperDetails,
  WrapperInfo
} from "./styles";
import { useOrderStore } from "@/store/orderStore";
import { Check } from "lucide-react-native";
import themes from "@/themes/themes";
import { Button } from "@/components/Button";
import { ListEmpty } from "@/components/ListEmpty";
import { NavigationProp } from "@react-navigation/native";

type OrderProps = {
  navigation: NavigationProp<any>;
};

export default function Order({ navigation }: OrderProps) {
  const { orders } = useOrderStore();

  return (
    <Container>
      <SectionList
        sections={orders.map((order) => ({
          id: order.id,
          date: order.date,
          data: [order]
        }))}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <Header>
            {section.date.toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </Header>
        )}
        renderItem={({ item }) => (
          <WrapperInfo>
            <WrapperCheck>
              <Check size={24} color={themes.COLORS.GREEN_100} />
              <Title>
                Pedido Concluído N°
                {item.date.getTime()}
              </Title>
            </WrapperCheck>
            {item.items.map((product) => (
              <WrapperCheck key={product.id}>
                <Title>{product.quantity}</Title>
                <Title>{product.title}</Title>
              </WrapperCheck>
            ))}
            <WrapperDetails>
              <Button
                title="Detalhes"
                type="DESTRUCTIVE"
                onPress={() =>
                  navigation.navigate("DetailOrder", {
                    id: item.id,
                    date: item.date.toISOString(),
                    items: item.items
                  })
                }
              />
            </WrapperDetails>
          </WrapperInfo>
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            title="Nenhum pedido encontrado"
            description="parece que você não tem nenhum pedido :("
          />
        )}
      />
    </Container>
  );
}
