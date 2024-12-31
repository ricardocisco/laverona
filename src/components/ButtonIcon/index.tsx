import { MaterialIcons } from "@expo/vector-icons";
import { Button, ButtonTypeStyleProps, IconButton } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonTypeStyleProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Button type={type} {...rest}>
      <IconButton name={icon} />
    </Button>
  );
}
