import { SubPaper } from "../../components";

interface ShowSloganProps {
  title: string;
  description: string;
}

export const ShowSlogan = ({title, description}: ShowSloganProps) => {

  return (
    <SubPaper>
      <p>Título: {title}</p>
      <p>Descripción: {description}</p>
    </SubPaper>
  );
};
