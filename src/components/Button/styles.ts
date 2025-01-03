import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import themes from "@/themes/themes";

export type ButtonTypeProps = "PRIMARY" | "DESTRUCTIVE";

type Props = {
  type: ButtonTypeProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ type }) =>
    type === "PRIMARY" ? themes.COLORS.GREEN_100 : themes.COLORS.RED_100};

  min-height: 45px;
  max-height: 45px;

  padding: 0 18px;
  border-radius: 8px;

  justify-content: center;
`;

export const Title = styled.Text`
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.LG}px;
`;
