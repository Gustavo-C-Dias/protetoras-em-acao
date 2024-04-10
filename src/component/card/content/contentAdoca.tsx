import Badge from "@/component/badge/badge";
import { contentAdocaoProp } from "./contentAdocaProp";

export function ContentAdocao({
  name,
  age,
  vaccine,
  type
}: contentAdocaoProp) {
  return (
    <>
      <h3>Nome: {name}</h3>
      <p>Idade: {age}</p>
      <p>Vacinação: {badgeVaccine(vaccine)}</p>
      <p>Tipo: {badgeType(type)}</p>
    </>
  )
}

function badgeVaccine(vaccine: string) {
  let variant: 'primary' | 'neutral' | 'green' = 'primary';

  if (vaccine === 'Vacinado') {
    variant = 'green';
  } else if (vaccine === 'Em andamento') {
    variant = 'primary';
  } else {
    variant = 'neutral';
  }

  return (
    <Badge label={vaccine} variant={variant} />
  );
}

function badgeType(type: string) {
  let variant: 'orange' | 'purple' = 'orange';

  if (type === 'Cachorro') {
    variant = 'orange';
  } else {
    variant = 'purple';
  }

  return (
    <Badge label={type} variant={variant} />
  );
}

export default ContentAdocao;