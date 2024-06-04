import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import {
  Airplay,
  Ellipsis,
  Eye,
  Pencil,
  Search,
  Trash2,
  Users,
} from "lucide-react";
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

type CardTaskValues = z.infer<typeof formSchema>;

interface CardProps {
  Carde: TB_Card;
  user: user;
  self: user;
}
const formSchema = z.object({
  status: z.string().min(1),
});

const Cardtask: React.FC<CardProps> = ({ Carde, user, self }) => {
  const router = useRouter();
  const form = useForm<CardTaskValues>({
    resolver: zodResolver(formSchema),
  });
  const onDelete = async () => {
    try {
      const response = await fetch("/api/deleteCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_card: Carde.id, // Assume que `Equipe.id` é passado para o componente
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao deletar o Card!");
      }

      const deleteCard = await response.json();
      console.log("Card criado com sucesso", deleteCard);

      router.refresh();
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };
  const onUpdate = async (data: CardTaskValues) => {
    try {
      const response = await fetch("/api/updateCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_card: Carde.id,
          status: data.status,
          id_update_Card: self.id, // Assume que `Equipe.id` é passado para o componente
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao deletar o Card!");
      }

      const deleteCard = await response.json();
      console.log("Card criado com sucesso", deleteCard);

      router.refresh();
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };
  return (
    <Card className="mb-4 bg-white dark:bg-gray-800 dark:text-white">
      <CardHeader>
        <CardTitle>
          {Carde.titulo}
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">
                  <Trash2 />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Tem certeza em excluir essa tarefa?</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  Essa ação não podera ser desfeita!
                </DialogDescription>
                <DialogClose>
                  <div className="flex justify-center">
                    <div className="px-10">
                      <Button variant="ghost">Não</Button>
                    </div>
                    <div className="px-10">
                      <Button variant="destructive" onClick={onDelete}>
                        Sim
                      </Button>
                    </div>
                  </div>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{Carde.descricao}</CardContent>
      <CardFooter>
        <div className="flex">
          <Avatar>
            <AvatarImage src={user.image || "/fallback-image.png"} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>

          <div className="pl-[40px]">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">Alterar status</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Alterar status da tarefa</DialogTitle>
                  <DialogDescription>
                    Mover a tarefa de acordo com o progresso dela
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onUpdate)}
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
                              <SelectItem value="Fazer"> A fazer</SelectItem>
                              <SelectItem value="Fazendo"> Fazendo</SelectItem>
                              <SelectItem value="Finalizado">
                                {" "}
                                Finalizado
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <DialogClose>
                      <div className="flex justify-center">
                        <div className="px-5">
                          <Button variant="outline">Cancelar</Button>
                        </div>
                        <div className="px-5">
                          <Button type="submit">Atualizar</Button>
                        </div>
                      </div>
                    </DialogClose>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>{" "}
          </div>
          <div className="pl-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">
                  <Eye />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{Carde.titulo}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select defaultValue={Carde.status}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Fazer">A fazer</SelectItem>
                          <SelectItem value="Fazendo">Fazendo</SelectItem>
                          <SelectItem value="Finalizado">Finalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea rows={3}>{Carde.descricao}</Textarea>
                  </div>
                  <div>
                    <Label>Responsavel</Label>
                    <div className="flex gap-2">
                      <Avatar>
                        <AvatarImage
                          src={user.image || "/fallback-image.png"}
                        />
                        <AvatarFallback>{user.name}</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center">
                        <Label>{user.name}</Label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label>Comentarios</Label>

                    <Textarea
                      id="comments"
                      placeholder="Adicione um comentario"
                      className="mt-4"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="secondary">Salvar tarefa</Button>
                  <Button>Marcar como Finalizado</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default Cardtask;
