interface ButtonProps {
  name: string;
  onClick?: () => void;
}
export const Button = ({ name, onClick }: ButtonProps) => {

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button onClick={handleClick}  className={`bg-[#393B43]  text-[#E5F876] rounded-md hover:bg-[#E5F876] hover:text-[#393B43] p-2 px-7 `}>
      {name}
    </button>
  );
};
