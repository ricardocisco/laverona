import { SafeAreaView, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD_PLUS}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const ListSlugs = styled.View`
  padding: 0 16px;
`;

export const ListItems = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const ButtonList = styled(TouchableOpacity)``;
