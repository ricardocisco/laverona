import themes from "@/themes/themes";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 280px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  padding: 10px 18px;
  font-size: ${themes.FONT_SIZE.LG_PLUS}px;
  color: ${themes.COLORS.WHITE};
`;

export const TitleDescription = styled.Text`
  font-size: ${themes.FONT_SIZE.LG_PLUS}px;
  color: ${themes.COLORS.WHITE};
  margin-top: 5px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 90%;
  border-radius: 12px;
`;

export const ButtonCarousel = styled(TouchableOpacity)``;
