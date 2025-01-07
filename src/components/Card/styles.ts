import themes from "@/themes/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  border-radius: 12px;
  border: 1px solid ${themes.COLORS.GRAY_600};
  padding: 6px;
  margin: 5px 0;
  gap: 15px;
`;

export const WrapperInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;

export const ImageCard = styled.Image`
  border-radius: 10px;
  width: 65px;
  height: 65px;
`;

export const Title = styled.Text`
  font-size: ${themes.FONT_SIZE.MD}px;
  color: ${themes.COLORS.WHITE};
`;

export const Description = styled.Text`
  color: ${themes.COLORS.WHITE};
  font-size: ${themes.FONT_SIZE.SM_PLUS}px;
`;
