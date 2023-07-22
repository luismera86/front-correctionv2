import { Layout } from "..";
import { Button } from "../../components";

export const Login = () => {
  return (
    <Layout>
      <label>Usuario</label>
      <input className="bg-[#44464e]  text-[#E5F876] p-2" type="text" />
      <label>Contraseña</label>
      <input className="bg-[#44464e]  text-[#E5F876] p-2" type="password" />
      <Button name="Entrar" />
    </Layout>
  );
};
