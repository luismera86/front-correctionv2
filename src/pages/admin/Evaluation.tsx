import { Button, SubPaper } from "../../components";
import { useForm } from "../../shared/hooks/useForm";
import { useDeliveryStore, useEvaluationStore } from "../../shared/store";

interface IFormState {
  description: string;
}

// TODO: Cambiar todo a evaluation y quitar el title

export const Evaluation = () => {
  const { onInputChange, formState } = useForm<IFormState>({
    description: "",
  });

  const { setDescription, getState } = useEvaluationStore();

  const { setSlogan } = useDeliveryStore();

  const { description } = formState;

  const handleAdd = () => {
    setDescription(description);
    setSlogan(getState());
  };

  // const handleAdd = () => {};
  return (
    <SubPaper>
      <h3 className="text-xl">Evaluación</h3>
      <label>Descripción</label>
      <textarea
        name="description"
        value={description}
        onChange={onInputChange}
        className="bg-[#44464e]  text-[#E5F876] p-2"
      />
      <Button name="Agregar Evaluación" onClick={handleAdd} />
    </SubPaper>
  );
};
