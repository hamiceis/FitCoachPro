import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "./ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Nome é Obrigátorio",
  }),
  email: z.string().email({
    message: "Email é obrigátorio",
  }),
  password: z.string().min(8, {
    message: "Senha deve conter no mínimo 8 caracteres",
  }),
  age: z.string().min(1, {
    message: "Idade é obrigátoria",
  }).transform(age => parseInt(age)),
  tel: z.string().optional(),
  gender: z.string().optional(),
  height: z.string().min(1, {
    message: "Você precisa informar sua altura",
  }).transform(height => parseInt(height))
});

export function FormLogin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: 18,
      tel: "",
      gender: "",
      height: 155,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted");
    console.log(values);
  };

  return (
    <div className="h-full p-4 space-y-2 max-w-xl mx-auto">
      <Form {...form}>
        <form
          className="space-y-4 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h3 className="text-lg font-medium text-center">
            Formulário Student
          </h3>
          <Separator className="bg-zinc-100" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input  placeholder="Digite seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="username"
                      placeholder="Digite seu email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span1 md:col-span-2">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="current-password"
                      type="password"
                      placeholder="Senha"
                      maxLength={24}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="age"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-20">
                  <FormLabel>Idade</FormLabel>
                  <FormControl>
                    <Input
                      maxLength={2}
                      min={18}
                      max={65}
                      placeholder="20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="tel"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="Whatsapp (Opicional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="gender"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-20">
                  <FormLabel>Gênero</FormLabel>
                  <FormControl>
                    <Input placeholder="M/F" maxLength={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="height"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Altura</FormLabel>
                  <FormControl>
                    <Input
                      maxLength={3}
                      placeholder="Informe sua altura, EX: 169"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Separator className="bg-zinc-200" />
          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>
      </Form>
    </div>
  );
}
