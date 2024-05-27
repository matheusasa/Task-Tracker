export function DialogForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Criar Equipe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Criar nova equipe</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar uma nova equipe.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Equipe</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Textarea />{" "}
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resp"
              render={({ field }) => (
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o responsável" />
                  </SelectTrigger>
                  <SelectContent>
                    {Users.map((user) => (
                      <SelectItem key={user.id} value={String(user.id)}>
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <DialogFooter>
          <Button className="mr-2" variant="secondary">
            Cancelar
          </Button>
          <Button>Criar equipe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
