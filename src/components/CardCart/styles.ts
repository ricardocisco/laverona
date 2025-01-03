import themes from "@/themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  background-color: ${themes.COLORS.GRAY_700};
  margin: 10px 0;
  padding: 5px;
  border-radius: 12px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  padding: 2px;
`;

export const Text = styled.Text`
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.MD_PLUS}px;
`;

export const WrapperText = styled.View`
  flex: 1;
  padding: 5px;
`;

export const WrapperButton = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
`;

export const WrapperDelete = styled.View``;
