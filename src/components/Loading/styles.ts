import themes from "@/themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${themes.COLORS.GRAY_800};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: "large",
  color: themes.COLORS.GREEN_100
})``;
