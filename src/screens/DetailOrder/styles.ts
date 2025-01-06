import themes from "@/themes/themes";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${themes.COLORS.GRAY_800};
  padding: 0 24px;
`;

export const WrapperDate = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 65px;
  padding: 12px;
  background-color: ${themes.COLORS.GRAY_700};
  border-radius: 12px;
`;

export const Title = styled.Text`
  font-size: ${themes.FONT_SIZE.MD_PLUS}px;
  color: ${themes.COLORS.WHITE};
  margin-top: 2px;
`;

export const WrapperContainer = styled.View`
  margin-top: 28px;
  padding: 12px;
  background-color: ${themes.COLORS.GRAY_700};
  border-radius: 12px;
`;

export const WrapperItem = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

export const WrapperPrice = styled.View`
  flex: 1;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 8px;
`;

export const WrapperTotal = styled.View`
  margin-top: 20px;
  background-color: ${themes.COLORS.GRAY_700};
  border-radius: 12px;
`;

export const BoxTotal = styled.View`
  padding: 4px 0;
  flex-direction: row;
  justify-content: space-between;
`;
