import { Button, SubPaper } from "../../components";
import { useDeliveryStore } from "../../shared/store";

interface ShowSloganProps {
  description: string;
  index: number;
}

export const ShowSlogan = ({ description, index}: ShowSloganProps) => {

  const { deleteSlogan } = useDeliveryStore();

  const handleDelete = () => {
    deleteSlogan(index);
  };

  return (
    <SubPaper>
      <p>Descripción: {description}</p>
      <Button name="Eliminar" onClick={handleDelete} />
    </SubPaper>
  );
};
