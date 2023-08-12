import { SubPaper } from "../../components";

interface ShowSloganProps {
  description: string;
}

export const ShowSlogan = ({ description}: ShowSloganProps) => {

  return (
    <SubPaper>
      <p>Descripción: {description}</p>
    </SubPaper>
  );
};
