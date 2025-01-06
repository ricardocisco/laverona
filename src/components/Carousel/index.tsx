import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
  ButtonCarousel,
  Container,
  Image,
  Title,
  TitleDescription
} from "./styles";
import { data } from "@/data/data";

type Props = {
  handleCarousel: ({ item }: any) => void;
};

export function CarouselBox({ handleCarousel }: Props) {
  const width = Dimensions.get("window").width;
  return (
    <Container>
      <Title>Mais vendidos</Title>
      <Carousel
        loop
        width={width}
        height={width / 1.8}
        data={data}
        pagingEnabled={true}
        snapEnabled={true}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <ButtonCarousel onPress={() => handleCarousel(item)}>
            <View style={{ height: 200, width: "100%" }}>
              <Image source={{ uri: item.imagem }} resizeMode="cover" />
              <TitleDescription>{item.name}</TitleDescription>
            </View>
          </ButtonCarousel>
        )}
      />
    </Container>
  );
}
