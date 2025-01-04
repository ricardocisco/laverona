import themes from "@/themes/themes";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${themes.COLORS.GRAY_800};
  padding: 0 22px;
`;

export const Title = styled.Text`
  text-align: start;
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.LG}px;
`;

export const SubTitle = styled.Text`
  color: ${themes.COLORS.GRAY_300};
  font-size: ${themes.FONT_SIZE.MD_PLUS}px;
`;

export const WrapperImage = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const WrapperButton = styled.View`
  position: absolute;
  bottom: 0;
  right: 85px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

export const WrapperInput = styled.View`
  margin-top: 20px;
  gap: 10px;
`;

export const WrapperText = styled.View`
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
