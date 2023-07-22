import { useForm } from "../../hooks/useForm";

interface IFormState {
  title: string;
  description: string;
}

export const Slogan = () => {
  const { onInputChange, formState } = useForm<IFormState>({
    title: "",
    description: "",
  });

  const { title, description } = formState;
  return (
    <>
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
    </>
  );
};
