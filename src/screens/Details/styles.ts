import themes from "@/themes/themes";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${themes.COLORS.GRAY_800};
  padding: 0 22px;
`;

export const Text = styled.Text`
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.LG_PLUS}px;
  margin: 16px;
`;

export const Image = styled.Image`
  margin-top: 80px;
  border-radius: 12px;
  width: 100%;
  height: 250px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperText = styled.View`
  flex-grow: 1;
`;

export const WrapperButton = styled.View`
  flex-direction: row;
  align-items: "center";
  margin-right: 15px;
  border: 2px solid ${themes.COLORS.GRAY_700};
  border-radius: 12px;
`;

export const WrapperFooter = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
`;
