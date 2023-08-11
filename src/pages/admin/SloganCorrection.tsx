import { Button, SubPaper } from "../../components";
import { useForm } from "../../shared/hooks/useForm";
import { useDeliveryStore, useSloganStore } from "../../shared/store";
import { useCounterStore } from "../../shared/store/counterStore";

interface IFormState {
  title: string;
  description: string;
  status?: string;
}

interface SloganCorrectionProps {
  setSloganCorrection: (slogan: IFormState) => void;
}

export const SloganCorrection = () => {
  // TODO Realizar un state con un array para que se sumen números y sean la cantidad de slogans que se quieran agregar luego de presionar el botón +. Realizar un map para que se muestren los inputs de acuerdo a la cantidad de slogans que se quieran agregar.
  const { onInputChange, formState } = useForm<IFormState>({
    title: "",
    description: "",
    status: "realized",
  });

  const { count, increment } = useCounterStore();
  const { setTitle, setDescription, title: titleStore, description: descriptionStore, getState } = useSloganStore();

  const {setSlogan} = useDeliveryStore();

  const { title, description } = formState;

  const handleAdd = () => {
    setTitle(title);
    setDescription(description);
    setSlogan(getState());
  };

  // const handleAdd = () => {};
  return (
    <SubPaper>
      <h3 className="text-xl">Evaluación</h3>
      <label>Título</label>
      <input
        name="title"
        value={title}
        onChange={onInputChange}
        className="bg-[#44464e]  text-[#E5F876] p-2"
        type="text"
      />
      <label>Descripción</label>
      <textarea
        name="description"
        value={description}
        onChange={onInputChange}
        className="bg-[#44464e]  text-[#E5F876] p-2"
      />

      {/* <label>Estado</label>
      <select
        name="status"
        value={status}
        onChange={onInputChange}
        className="bg-[#44464e]  text-[#E5F876] p-3"
      >
        <option value="realized">Realizado</option>
        <option value="incomplete">Incompleto</option>
        <option value="notRealized">No Realizado</option>
      </select> */}
      {/* <input type="button" value="+" onClick={handleAdd} /> */}
      {count}
      <Button name="+" onClick={handleAdd} />
    </SubPaper>
  );
};
