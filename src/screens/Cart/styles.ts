import themes from "@/themes/themes";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${themes.COLORS.GRAY_800};
  padding: 0 18px;
`;

export const WrapperList = styled.View`
  flex: 1;
  margin-top: 60px;
`;

export const WrapperFooter = styled.View`
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Text = styled.Text`
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.LG}px;
  margin-bottom: 10px;
`;

export const WrapperText = styled.View`
  width: 100%;
  justify-content: flex-end;
`;

export const WrapperButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
