import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <div>
      <ArrowLeft
        className="absolute top-0 left-0 mt-4 ml-4"
        color="black"
        onClick={() => window.history.back()}
      >
        Voltar
      </ArrowLeft>
    </div>
  );
}