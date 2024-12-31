import themes from "@/themes/themes";
import { ButtonIcon } from "../ButtonIcon";
import { InputText } from "../Input/styles";
import { Container, Logo } from "./styles";
import logoImg from "@/assets/pizza.png";

type Props = {
  handleCart: () => void;
};

export function Header({ handleCart }: Props) {
  return (
    <Container>
      <Logo source={logoImg} />
      <InputText
        placeholder="O que você procura?"
        placeholderTextColor={themes.COLORS.WHITE}
      />
      <ButtonIcon type="GHOST" icon="add-shopping-cart" onPress={handleCart} />
    </Container>
  );
}
