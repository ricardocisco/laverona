import themes from "@/themes/themes";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${themes.COLORS.GRAY_800};
  padding: 10px 24px;
`;

export const Header = styled.Text`
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.LG}px;
  margin-top: 5px;
`;

export const WrapperInfo = styled.View`
  margin-top: 10px;
  background-color: ${themes.COLORS.GRAY_700};
  padding: 20px;
  border-radius: 5px;
`;

export const WrapperCheck = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  gap: 5px;
`;

export const Title = styled.Text`
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.MD}px;
  font-weight: 600;
`;

export const WrapperDetails = styled.View`
  margin-top: 10px;
  align-items: flex-end;
`;
