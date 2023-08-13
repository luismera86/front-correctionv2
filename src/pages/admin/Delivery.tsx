import { Evaluation, Layout, Slogan } from "..";
import { Button, SubPaper } from "../../components";
import { useForm } from "../../shared/hooks/useForm";
import { useDeliveryStore, useEvaluationStore } from "../../shared/store";
import { ShowSlogan } from "./showSlogan";

interface IFormState {
  deliveryName: string;
  course: string;
}

export const Delivery = () => {
  const { onInputChange, formState } = useForm<IFormState>({
    deliveryName: "",
    course: "",
  });

  const { setCourse, setDeliveryTitle, getState, slogans } = useDeliveryStore();

  const { deliveryName, course } = formState;

  const handleAdd = () => {
    setCourse(course);

    setDeliveryTitle(deliveryName);

    console.log(getState());
  };

  return (
    <Layout>
      <h3 className="text-xl mb-4">Curso</h3>
      <select onChange={onInputChange} className="bg-[#44464e]  text-[#E5F876] p-2" name="course" value={course}>
        <option value="">Cursos</option>
        <option value="curso1">Curso 1</option>
        <option value="curso2">Curso 2</option>
        <option value="curso3">Curso 3</option>
      </select>
      <SubPaper>
        <label>Nombre de la entrega</label>
        <input
          name="deliveryName"
          value={deliveryName}
          onChange={onInputChange}
          className="bg-[#44464e]  text-[#E5F876] p-2"
          type="text"
        />
      </SubPaper>
      <Slogan />
      {slogans.map((slogan, index) => (
        <ShowSlogan index={index} key={index} description={slogan.description} />
      ))}
      <Evaluation />
      <Button name="Entrar" onClick={handleAdd} />
    </Layout>
  );
};
