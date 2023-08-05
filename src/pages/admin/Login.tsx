/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoxPaper, Button } from "../../components";
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
    <div className=" bg-[#1F2023] flex flex-col h-screen text-[#F2F2F2] pt-14 items-center">
      <BoxPaper spaceY={2}>
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
      </BoxPaper>
    </div>
  );
};
