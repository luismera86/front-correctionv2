import { useEffect, useState } from "react";
import { Layout, Slogan, SloganCorrection } from "..";
import { Button, SubPaper } from "../../components";
import { useForm } from "../../shared/hooks/useForm";

interface IFormState {
  deliveryName: string;
}

interface ISlogan {
  title: string;
  description: string;
}

export const Delivery = () => {
  const { onInputChange, formState } = useForm<IFormState>({
    deliveryName: "",
  });
  const { deliveryName } = formState;

  // Contador para saber la cantidad de slogans que se quieren agregar
  // Un handleAdd que sume 1 al contador
  // Un handleRemove que reste 1 al contador
  // Un array que se llame slogans, donde vamos a guardar los slogans en objetos en formato {title: string, description: string}
  // Un map que recorra el array slogans y muestre los inputs de acuerdo a la cantidad de slogans que se quieran agregar
  // Un botón que diga agregar slogan y que al presionarlo se agregue un input más
  // Un botón que diga eliminar slogan y que al presionarlo se elimine un input
  // Un botón que diga guardar y que al presionarlo guarde los slogans en el array slogans

  const [slogansCorrection, setSlogansCorrection] = useState<ISlogan[]>([]);

  const handleAddSlogan = (slogan: ISlogan) => {
    setSlogansCorrection([...slogansCorrection, slogan]);
  };

  useEffect(() => {
    console.log(slogansCorrection);
  }, [slogansCorrection]);

  return (
    <Layout>
      <h3 className="text-xl mb-4">Curso</h3>
      {/* // TODO Aquí va el listado de los cursos registrados */}
      <select className="bg-[#44464e]  text-[#E5F876] p-2" name="" id="">
        <option value="">Curso 1</option>
        <option value="">Curso 2</option>
        <option value="">Curso 3</option>
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

      <SloganCorrection setSloganCorrection={handleAddSlogan} />

      <Button name="Entrar" />
    </Layout>
  );
};
