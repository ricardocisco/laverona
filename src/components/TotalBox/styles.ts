import themes from "@/themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 4px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${themes.FONT_SIZE.MD_PLUS}px;
  color: ${themes.COLORS.WHITE};
`;
