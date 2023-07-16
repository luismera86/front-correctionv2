import { Button } from "..";

export const NavBar = () => {
  return (
    <div className="flex bg-[#1F2023] h-16 justify-start items-center">
      <div className="ms-2">
        <Button name="Home" />
      </div>
      <div className="ms-2">
        <Button name="Cursos" />
      </div>
      <div className="ms-2">
        <Button name="Acerca de mi" />
      </div>
      <div className="ms-2">
        <Button name="Contacto" />
      </div>
    </div>
  );
};
