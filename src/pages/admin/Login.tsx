import { BoxPaper, Button } from "../../components";

export const Login = () => {
  return (
    <div className=" bg-[#1F2023] flex flex-col h-screen text-[#F2F2F2] pt-14 items-center">
      <BoxPaper space="2">
        <label>Usuario</label>
        <input className="bg-[#44464e]  text-[#E5F876] p-2" type="text" />
        <label>Contraseña</label>
        <input className="bg-[#44464e]  text-[#E5F876] p-2" type="password" />
        <Button name="Entrar" />
      </BoxPaper>
    </div>
  );
};
