import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/native";
import {
  Container,
  Image,
  Text,
  Wrapper,
  WrapperButton,
  WrapperFooter,
  WrapperText
} from "./styles";
import { Button } from "@/components/Button";
import { View } from "react-native";
import { ButtonIcon } from "@/components/ButtonIcon";
import { useCartStore } from "@/store/cartStore";
import { notify } from "react-native-notificated";
import { Check } from "lucide-react-native";
import themes from "@/themes/themes";

interface DetailsParams {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

type DetailsRouteProp = RouteProp<ParamListBase, "Details"> & {
  params: DetailsParams;
};

export default function Details() {
  const route = useRoute<DetailsRouteProp>();
  const { id, title, price, image, description } = route.params;
  const { addToCart, increment, decrement, items } = useCartStore();

  const itemFilter = items.find((item) => item.id === id);

  const showNotify = () => {
    notify("success", {
      params: {
        description: "Item adicionado ao carrinho!",
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
      <Image source={{ uri: image }} />
      <WrapperText>
        <Wrapper>
          <Text>{title}</Text>
          <Text>R$ {price.toFixed(2)}</Text>
        </Wrapper>
        <Text>Description: {description}</Text>
      </WrapperText>
      <WrapperFooter>
        {itemFilter && (
          <WrapperButton>
            <ButtonIcon
              icon="remove"
              type="GHOST"
              iconSize="SMALL"
              onPress={() => decrement(id)}
            />
            <Text>{itemFilter?.quantity || 0}</Text>
            <ButtonIcon
              icon="add"
              type="GHOST"
              iconSize="SMALL"
              onPress={() => increment(id)}
            />
          </WrapperButton>
        )}
        <Button
          type="PRIMARY"
          title="Adicionar ao carrinho"
          onPress={() => {
            addToCart({ id, title, price, image, description }), showNotify();
          }}
        />
      </WrapperFooter>
    </Container>
  );
}
