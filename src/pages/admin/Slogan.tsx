import { SubPaper } from "../../components";
import { useForm } from "../../shared/hooks/useForm";
import { useDeliveryStore } from "../../shared/store";
import { useEffect } from "react";

interface IFormState {
  description: string;
}

export const Slogan = () => {
  const { onInputChange, formState } = useForm<IFormState>({
    description: "",
  });

  const { description } = formState;

  const { setDeliveryDescription } = useDeliveryStore();

  useEffect(() => {
    setDeliveryDescription(description);
  }, [description]);

  return (
    <SubPaper>
      <h3 className="text-xl">Consigna</h3>

      <label>Descripción</label>
      <textarea
        name="description"
        value={description}
        onChange={onInputChange}
        className="bg-[#44464e]  text-[#E5F876] p-2"
      />
    </SubPaper>
  );
};
