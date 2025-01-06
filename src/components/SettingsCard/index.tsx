import { LucideIcon } from "lucide-react-native";
import { Container, SubTitle, Title } from "./styles";
import { View } from "react-native";
import themes from "@/themes/themes";

type Props = {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
};

export function SettingsCard({ Icon, title, subtitle }: Props) {
  return (
    <Container>
      <Icon color={`${themes.COLORS.WHITE}`} size={32} />
      <View>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </View>
    </Container>
  );
}
