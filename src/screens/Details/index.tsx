import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

import { RouteProp } from "@react-navigation/native";

type DetailsRouteProp = RouteProp<
  {
    params: {
      title: string;
      price: number;
      image: string;
      description: string;
    };
  },
  "params"
>;

export default function Details({ route }: { route: DetailsRouteProp }) {
  const { title, price, image, description } = route.params || {};

  if (!title) {
    return console.log("vazio");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Detalhes</Text>
      <Text>Nome: {title}</Text>
      <Text>Price: {price}</Text>
      <Text>Description: {description}</Text>
    </View>
  );
}
