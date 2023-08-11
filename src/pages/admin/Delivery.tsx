import { useEffect } from "react";
import { Layout, Slogan, SloganCorrection } from "..";
import { Button, SubPaper } from "../../components";
import { useForm } from "../../shared/hooks/useForm";
import { useDeliveryStore, useSloganStore } from "../../shared/store";
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

  // Contador para saber la cantidad de slogans que se quieren agregar
  // Un handleAdd que sume 1 al contador
  // Un handleRemove que reste 1 al contador
  // Un array que se llame slogans, donde vamos a guardar los slogans en objetos en formato {title: string, description: string}
  // Un map que recorra el array slogans y muestre los inputs de acuerdo a la cantidad de slogans que se quieran agregar
  // Un botón que diga agregar slogan y que al presionarlo se agregue un input más
  // Un botón que diga eliminar slogan y que al presionarlo se elimine un input
  // Un botón que diga guardar y que al presionarlo guarde los slogans en el array slogans


const {description, title, comment, status } = useSloganStore();
const {setCourse, setSlogan, setDeliveryTitle, getState, slogans } = useDeliveryStore();

const { deliveryName, course } = formState;

const handleAdd = () => {
  const newSlogan = {
    title,
    description,
    comment,
    status,
  };
  setCourse(course);
  setSlogan(newSlogan);
  setDeliveryTitle(deliveryName);
  console.log(getState());
};

console.log(slogans)
  

  return (
    <Layout>
      <h3 className="text-xl mb-4">Curso</h3>
      <select onChange={onInputChange} className="bg-[#44464e]  text-[#E5F876] p-2" name="course" value={course} >
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
      <SubPaper>
        <Slogan />
      </SubPaper>
      {
        slogans.map((slogan, index) => <ShowSlogan key={index} title={slogan.title} description={slogan.description} />)
      }
      <SloganCorrection />

      <Button name="Entrar" onClick={handleAdd} />
    </Layout>
  );
};
