import {
  Container,
  Image,
  Text,
  WrapperButton,
  WrapperDelete,
  WrapperText
} from "./styles";
import { ButtonIcon } from "../ButtonIcon";
import { useCartStore } from "@/store/cartStore";

type Props = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

export function CardCart({ id, image, title, price, quantity }: Props) {
  const { increment, decrement, removeFromCart } = useCartStore();

  return (
    <Container>
      <Image source={{ uri: image }} />
      <WrapperText>
        <Text>{title}</Text>
        <Text>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </Text>
      </WrapperText>
      <WrapperButton>
        <ButtonIcon
          icon="remove"
          iconSize="SMALL"
          onPress={() => decrement(id)}
        />
        <Text>{quantity}</Text>
        <ButtonIcon icon="add" iconSize="SMALL" onPress={() => increment(id)} />
      </WrapperButton>
      <WrapperDelete>
        <ButtonIcon
          icon="delete"
          colorStyle="RED"
          onPress={() => removeFromCart(id)}
        />
      </WrapperDelete>
    </Container>
  );
}
