import { Layout, Slogan, SloganCorrection } from "..";
import { Button } from "../../components";
import { useForm } from "../../hooks/useForm";

interface IFormState {
  deliveryName: string;
}

export const Delivery = () => {
  const { onInputChange, formState } = useForm<IFormState>({
    deliveryName: "",
  });

  const { deliveryName } = formState;

  return (
    <Layout>
      <label>Nombre de la entrega</label>
      <input
        name="deliveryName"
        value={deliveryName}
        onChange={onInputChange}
        className="bg-[#44464e]  text-[#E5F876] p-2"
        type="text"
      />
      <Slogan />
      <SloganCorrection />
      <Button name="Entrar" />
    </Layout>
  );
};
