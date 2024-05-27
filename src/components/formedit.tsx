import { Button } from "./ui/button";
import {
  Dialog,
  DialogFooter,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { Textarea } from "./ui/textarea";

export default function EditForm() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 left-6 md:bottom-8 md:left-8"
            variant="secondary"
          >
            Editar tarefa
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Editar tarefa</DialogTitle>
            <DialogDescription>
              Atualize os campos abaixo para editar a tarefa.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Título</Label>
              <Input defaultValue="#boraCodar um Kanban 🚀" id="title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea id="description">
                Novo desafio do #boraCodar da Rocketseat, onde é proposto
                construir...
              </Textarea>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tags">Tags</Label>
              <Input defaultValue="rocketseat, desafio" id="tags" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="assignee">Responsável</Label>
              <Select defaultValue="user1">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o responsável" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user1">Usuário 1</SelectItem>
                  <SelectItem value="user2">Usuário 2</SelectItem>
                  <SelectItem value="user3">Usuário 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
          <DialogFooter>
            <Button className="mr-2" variant="secondary">
              Cancelar
            </Button>
            <Button>Salvar alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
