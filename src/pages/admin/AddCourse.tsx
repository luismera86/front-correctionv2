import { Layout } from "..";
import { Button } from "../../components";
import { useForm } from "../../shared/hooks/useForm";

interface IFormState {
  courseName: string;
}

export const AddCourse = () => {
  const { onInputChange, formState } = useForm<IFormState>({
    courseName: "",
  });

  const { courseName } = formState;

  return (
    <Layout>
      <label>Nombre del curso</label>
      <input
        name="courseName"
        value={courseName}
        onChange={onInputChange}
        className="bg-[#44464e]  text-[#E5F876] p-2"
        type="text"
      />
      <Button name="Entrar" />
    </Layout>
  );
};
