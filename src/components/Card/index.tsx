import { View } from "react-native";
import {
  Container,
  Description,
  ImageCard,
  Title,
  WrapperInfo
} from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
  price: number;
};

export function Card({ image, title, description, price }: Props) {
  return (
    <Container>
      <ImageCard source={{ uri: image }} />
      <WrapperInfo>
        <View>
          <Title>{title}</Title>
          <Description>{description.substring(0, 20)}</Description>
        </View>
        <Title>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </Title>
      </WrapperInfo>
    </Container>
  );
}
