import { ArrowRight, Copy, Mail } from "lucide-react";

import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";
import { InputRoot, InputIcon, InputField } from "@/components/Input";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>
      <IconButton>
        <Copy />
      </IconButton>
      <div>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5" />
          </InputIcon>
          <InputField placeholder="Digite seu email" />
        </InputRoot>
      </div>
    </main>
  );
}
