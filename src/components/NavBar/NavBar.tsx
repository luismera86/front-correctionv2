import { NavLink, Outlet } from "react-router-dom";
import { Button } from "..";

export const NavBar = () => {
  return (
    <>
      <div className="flex bg-[#1F2023] h-16 justify-start items-center p-5">
        <div className="ms-2">
          <NavLink to={"/"}>
            <Button name="Home" />
          </NavLink>
        </div>
        <div className="ms-2">
          <NavLink to={"/courses"}>
            <Button name="Cursos" />
          </NavLink>
        </div>
        <div className="ms-2">
          <Button name="Acerca de mi" />
        </div>
        <div className="ms-2">
          <Button name="Contacto" />
        </div>
      </div>
      <Outlet />
    </>
  );
};
