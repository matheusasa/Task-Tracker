import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Airplay, Ellipsis, Pencil, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { TB_Card, TB_Equipe, user } from "@prisma/client";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type CardFormValues = z.infer<typeof formSchema>;

interface CardProps {
  Carde: TB_Card;
  user?: user;
  team: TB_Equipe;
}
const formSchema = z.object({
  titulo: z.string().min(2),
  descricao: z.string().min(4),
  status: z.string().min(1),
  resp: z.number().min(1),
});

const Cardtask: React.FC<CardProps> = ({ Carde, user, team }) => {
  const router = useRouter();
  const form = useForm<CardFormValues>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: CardFormValues) => {
    try {
      const response = await fetch("/api/createCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: data.titulo,
          descricao: data.descricao,
          status: data.status,
          id_update_Card: 0, // Ajuste conforme necessário
          id_comentar: 0, // Ajuste conforme necessário
          id_equipe: team.id, // Assume que `Equipe.id` é passado para o componente
        }),
      });

      if (!response.ok) {
        throw new Error("Falha para criar o Card");
      }

      const newCard = await response.json();
      console.log("Card criado com sucesso", newCard);

      router.refresh();
      console.log(data);
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };
  return (
    <Card className="mb-4 bg-white dark:bg-gray-800 dark:text-white">
      <CardHeader>
        <CardTitle>
          {Carde.titulo}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Pencil />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Criar uma nova tarefa</DialogTitle>
                <DialogDescription>
                  Preencha os campos abaixo para criar uma nova tarefa.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Selecione o status da tarefa</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Fazer">A fazer</SelectItem>
                            <SelectItem value="Fazendo">Fazendo</SelectItem>
                            <SelectItem value="Finalizado">
                              Finalizado
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button className="mr-2" variant="secondary">
                        Cancelar
                      </Button>
                    </DialogClose>
                    <Button type="submit">Criar tarefa</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </CardTitle>
        <div className="flex justify-end"></div>
      </CardHeader>
      <CardContent>{Carde.descricao}</CardContent>
      <CardFooter>
        <Avatar>
          <AvatarImage src={user.image || "/fallback-image.png"} />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
      </CardFooter>
    </Card>
  );
};
export default Cardtask;
