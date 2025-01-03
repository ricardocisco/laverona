import themes from "@/themes/themes";
import { ButtonIcon } from "../ButtonIcon";
import { InputText } from "../Input/styles";
import { Badge, BadgeText, ButtonBadge, Container, Logo } from "./styles";
import logoImg from "@/assets/pizza.png";
import { View } from "react-native";
import { useCartStore } from "@/store/cartStore";

type Props = {
  handleCart: () => void;
};

export function Header({ handleCart }: Props) {
  const { items } = useCartStore();

  return (
    <Container>
      <Logo source={logoImg} />
      <InputText
        placeholder="O que você procura?"
        placeholderTextColor={themes.COLORS.WHITE}
      />
      <View>
        <ButtonBadge>
          <ButtonIcon
            type="GHOST"
            iconSize="LARGE"
            icon="add-shopping-cart"
            onPress={handleCart}
          />
          {items.length > 0 && (
            <Badge>
              <BadgeText>
                {items.reduce((acc, item) => acc + (item.quantity || 0), 0)}
              </BadgeText>
            </Badge>
          )}
        </ButtonBadge>
      </View>
    </Container>
  );
}
