import { Container, Description, Title } from "./styles";

type Props = {
  title: string;
  description: string;
};

export function ListEmpty({ title, description }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
