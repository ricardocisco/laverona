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
import * as ImagePicker from "expo-image-picker";
import { SettingsCard } from "@/components/SettingsCard";
import {
  Bell,
  CreditCard,
  Pin,
  ReceiptText,
  Star,
  TicketCheck
} from "lucide-react-native";
import { ScrollView } from "react-native";
1;

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
        <ScrollView>
          <SettingsCard
            Icon={Bell}
            title="Notificações"
            subtitle="Minha central de notificações"
          />
          <SettingsCard
            Icon={CreditCard}
            title="Pagamentos"
            subtitle="Meus saldos e cartões"
          />
          <SettingsCard
            Icon={TicketCheck}
            title="Cupons"
            subtitle="Meus cupons de desconto"
          />
          <SettingsCard
            Icon={Star}
            title="Favorito"
            subtitle="Meus locais favoritos"
          />
          <SettingsCard
            Icon={Pin}
            title="Endereços"
            subtitle="Meus endereços de entrega"
          />
          <SettingsCard
            Icon={ReceiptText}
            title="Minha Conta"
            subtitle="Minhas informações da conta"
          />
        </ScrollView>
      </WrapperInput>
    </Container>
  );
}
