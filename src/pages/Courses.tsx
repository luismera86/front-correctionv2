import { Button, NavBar } from "../components";

export const Courses = () => {
  return (
    <>
      <NavBar />
      <div className=" bg-[#1F2023] flex flex-col h-screen text-[#F2F2F2] pt-14 items-center">
        <div className="flex flex-col bg-[#27282D] h-auto p-11 w-96 justify-center space-y-4 ">
          <Button name="JavaScript" />
          <Button name="JavaScript" />
          <Button name="JavaScript" />
          <Button name="JavaScript" />
        </div>
      </div>
    </>
  );
};
