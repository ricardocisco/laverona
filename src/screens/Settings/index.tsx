import React from "react";
import {
  Container,
  Image,
  SubTitle,
  Title,
  WrapperButton,
  WrapperImage,
  WrapperInput,
  WrapperText
} from "./styles";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Input } from "@/components/Input";
import themes from "@/themes/themes";
import { Button } from "@/components/Button";
import * as ImagePicker from "expo-image-picker";

export default function Setting() {
  const [selectedImage, setSelectedImage] = React.useState<string | undefined>(
    undefined
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3]
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      console.log("Cancelado");
    }
  };

  return (
    <Container>
      <WrapperImage>
        <Image
          source={{
            uri: selectedImage || "https://github.com/ricardocisco.png"
          }}
        />
        <WrapperButton>
          <ButtonIcon icon="add" onPress={pickImage} />
        </WrapperButton>
      </WrapperImage>
      <WrapperInput>
        <WrapperText>
          <Title>Ricardo</Title>
          <SubTitle>ricardo@gmail.com</SubTitle>
        </WrapperText>
        <Input placeholder="Nome" placeholderTextColor={themes.COLORS.WHITE} />
        <Input
          placeholder="E-mail"
          placeholderTextColor={themes.COLORS.WHITE}
        />
        <Input placeholder="Senha" placeholderTextColor={themes.COLORS.WHITE} />
        <Button title="Salvar" />
      </WrapperInput>
    </Container>
  );
}
