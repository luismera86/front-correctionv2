import { Layout } from "..";
import { BoxPaper, Button } from "../../components";
import { useForm } from "../../hooks/useForm";

export const AddCourse = () => {

  const { onInputChange, onReset, formState } = useForm({
    courseName: ''
  })

  return (
    <Layout>
      <BoxPaper>
        <label>Nombre del curso</label>
        <input name="courseName" value={cor} onChange={onInputChange} className="bg-[#44464e]  text-[#E5F876] p-2" type="text" />
        <Button name="Entrar" />
      </BoxPaper>
    </Layout>
  );
};
