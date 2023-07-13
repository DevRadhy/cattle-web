import { Input } from "@/components/Input";
import { Radio } from "@/components/Radio";
import { Button } from "@/components/Button";
import { Textarea } from "@/components/Textarea";


export default function Register() {
  return (
    <div
      className="w-80 h-screen flex flex-col justify-center items-center m-auto"
    >
      <h1>Controle de Nascimento</h1>

      <div
        className="grid grid-rows-4 gap-3 mt-4"
      >
        <div
          className="grid grid-cols-2 gap-2"
        >
          <Input
            label="Brinco"
            type="text"
          />

          <Input
            label="Data de nascimento"
            type="date"
          />
        </div>

        <div
          className="grid grid-cols-2 gap-2"
        >
          <Input
            label="Pai"
            type="text"
          />

          <Input
            label="Mãe"
            type="text"
          />
        </div>

        <div>
          <span>Sexo</span>
          <div
            className="flex justify-between"
          >
            <Radio
              label="Fêmea"
              name="gender"
              defaultChecked
            />

            <Radio
              label="Macho"
              name="gender"
            />
          </div>
        </div>

        <Input
          label="Peso"
          type="number"
        />

        <Textarea
          label="Observação"
          cols={30}
          rows={20}
        />
      </div>

      <Button
        text="Salvar"
      />
    </div>
  );
}