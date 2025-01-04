import { Container, Title } from "./styles";

interface TotalBoxProps {
  label: string;
  value: string | number;
}

export function TotalBox({ label, value }: TotalBoxProps) {
  return (
    <Container>
      <Title>{label}</Title>
      <Title>{value}</Title>
    </Container>
  );
}
