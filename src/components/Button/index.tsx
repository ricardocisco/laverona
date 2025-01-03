import { TouchableOpacityProps } from "react-native";
import { ButtonTypeProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeProps;
  title: string;
};

export function Button({ type = "PRIMARY", title, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
