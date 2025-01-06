import React, { useState } from "react";

import { NavigationProp } from "@react-navigation/native";
import { ButtonList, Container, ListItems, ListSlugs } from "./styles";
import { Header } from "@/components/Header";
import { CarouselBox } from "@/components/Carousel";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Filter } from "@/components/Filter";
import { data } from "@/data/data";
import { Card } from "@/components/Card";

type HomeProps = {
  navigation: NavigationProp<any>;
};

export default function Home({ navigation }: HomeProps) {
  const [pizza, setPizza] = useState("Ofertas");
  const [filteredData, setFilteredData] = useState(data);

  function handleCart() {
    navigation.navigate("Cart");
  }

  function handleDetails(item: any) {
    navigation.navigate("Details", {
      id: item.id,
      title: item.name,
      image: item.imagem,
      price: item.price,
      description: item.description
    });
  }

  const handlePressButton = (category: string) => {
    if (category === "Ofertas") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === category));
    }
  };

  return (
    <Container>
      <Header handleCart={handleCart} />
      <CarouselBox handleCarousel={handleDetails} />
      <ListSlugs>
        <FlatList
          data={["Ofertas", "6 Pedaços", "8 Pedaços", "12 Pedaços", "Meias"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              isActive={item === pizza}
              title={item}
              onPress={() => {
                setPizza(item), handlePressButton(item);
              }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ListSlugs>
      <ListItems>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ButtonList activeOpacity={0.4} onPress={() => handleDetails(item)}>
              <Card
                image={item.imagem}
                title={item.name}
                description={item.description}
                price={item.price}
              />
            </ButtonList>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ListItems>
    </Container>
  );
}
