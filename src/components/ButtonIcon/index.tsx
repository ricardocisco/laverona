import { MaterialIcons } from "@expo/vector-icons";
import {
  Button,
  ButtonColorStyleProps,
  ButtonSizeStyleProps,
  ButtonTypeStyleProps,
  IconButton
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonTypeStyleProps;
  iconSize?: ButtonSizeStyleProps;
  colorStyle?: ButtonColorStyleProps;
};

export function ButtonIcon({
  icon,
  type = "PRIMARY",
  iconSize = "MEDIUM",
  colorStyle = "WHITE",
  ...rest
}: Props) {
  return (
    <Button type={type} {...rest}>
      <IconButton name={icon} iconSize={iconSize} colorStyle={colorStyle} />
    </Button>
  );
}
