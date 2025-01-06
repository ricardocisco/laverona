import themes from "@/themes/themes";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  border: 1px solid ${themes.COLORS.GRAY_600};
  align-items: center;
  border-radius: 8px;
  padding: 18px 12px;
  gap: 10px;
`;

export const Title = styled.Text`
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.MD_PLUS}px;
`;

export const SubTitle = styled.Text`
  color: ${themes.COLORS.GRAY_300};
  font-size: ${themes.FONT_SIZE.MD}px;
`;
