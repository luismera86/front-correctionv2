import { Layout } from "..";
import { Button, SubPaper } from "../../components";
import { useForm } from "../../hooks";

interface IFormState {
  userName: string;
  password: string;
}

export const Login = () => {
  const { formState, onInputChange } = useForm<IFormState>({
    userName: "",
    password: "",
  });

  const { userName, password } = formState;

  return (
    <Layout>
      <SubPaper>
        <label>Usuario</label>
        <input
          value={userName}
          name="userName"
          onChange={onInputChange}
          className="bg-[#44464e]  text-[#E5F876] p-2"
          type="text"
        />
        <label>Contraseña</label>
        <input value={password} name="password" className="bg-[#44464e]  text-[#E5F876] p-2" type="password" />
        <Button name="Entrar" />
      </SubPaper>
    </Layout>
  );
};
