import styled, { css } from "styled-components/native";

export const InputText = styled.TextInput`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_400};
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  padding: 18px;
  border-radius: 8px;
`;
