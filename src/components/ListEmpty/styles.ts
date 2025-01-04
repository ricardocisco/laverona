import themes from "@/themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${themes.FONT_SIZE.LG}px;
  color: ${themes.COLORS.GRAY_300};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: ${themes.FONT_SIZE.MD_PLUS}px;
  color: ${themes.COLORS.GRAY_300};
  margin-top: 8px;
`;
