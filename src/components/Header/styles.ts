import themes from "@/themes/themes";
import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 24px;
  padding-top: ${Platform.OS === "android" ? 50 : 0}px;
  border-bottom-width: 2px;
  border-bottom-color: ${themes.COLORS.GRAY_700};
`;

export const Logo = styled.Image`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

export const ButtonBadge = styled.View`
  position: relative;
`;

export const Badge = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${themes.COLORS.RED_100};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const BadgeText = styled.Text`
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.SM_PLUS}px;
`;
