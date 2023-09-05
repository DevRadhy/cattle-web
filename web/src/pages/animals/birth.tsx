import { Input } from "@/components/Input";
import { Radio } from "@/components/Radio";
import { Button } from "@/components/Button";
import { Textarea } from "@/components/Textarea";
import { BackButton } from "@/components/BackButton";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

type BirthProps = {
  earTag: string;
  birthDate: string;
  father: string;
  mother: string;
  radio: number;
  weight: number;
  observation?: string;
};

export default function Birth() {
  const createBirthForm = useForm<BirthProps>();
  const { handleSubmit } = createBirthForm;

  const onSubmit: SubmitHandler<BirthProps> = async (data) => {
    console.log(data);
  };

  return (
    <div className="m-auto flex h-screen w-full flex-col items-center justify-center px-8">
      <BackButton />

      <h1>Controle de Nascimento</h1>

      <FormProvider {...createBirthForm}>
        <form id="birth" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 grid max-w-xs grid-rows-4 gap-3">
            <div className="grid grid-cols-2 gap-2">
              <Input label="Brinco" type="text" id="identification" />

              <Input label="Data de nascimento" type="date" id="birthDate" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Input label="Pai" type="text" id="father" />

              <Input label="Mãe" type="text" id="mother" />
            </div>

            <div>
              <span>Sexo</span>
              <div className="flex justify-between">
                <Radio label="Fêmea" name="gender" value={0} defaultChecked />

                <Radio label="Macho" name="gender" value={1} />
              </div>
            </div>

            <Input label="Peso" type="number" id="weight" />

            <Textarea label="Observação" cols={30} rows={20} id="observation" />
          </div>
        </form>
      </FormProvider>

      <Button
        className="absolute bottom-10 right-10 h-10 w-24 rounded-lg bg-green-600 font-bold text-white"
        type="submit"
        form="birth"
        text="Salvar"
      />
    </div>
  );
}
