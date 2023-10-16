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

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Nome é Obrigátorio",
  }),
  email: z.string().email({
    message: "Email é obrigatório",
  }),
  password: z.string().min(8, {
    message: "Senha deve conter no mínimo 8 caracteres",
  }),
  age: z.number().min(1, {
    message: "Idade é obrigatória",
  }),
  tel: z.string().optional(),
  gender: z.string().optional(),
  height: z.number().min(1, {
    message: "Você precisa informar sua altura",
  }),
});

export function FormRegister() {
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

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <div className="h-full p-4 space-y-2 max-w-xl">
      <Form {...form}>
        <form
          className="space-y-4 w-full relative"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Button
            variant="ghost"
            type="button"
            className="w-10 absolute -top-1 rounded-full"
          >
            <Link to="/login">
              <ArrowLeft />
            </Link>
          </Button>
          <h3 className="text-lg font-medium text-center">Formulário Aluno</h3>
          <Separator className="bg-zinc-100" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="border border-zinc-500"
                      placeholder="Digite seu nome"
                      {...field}
                    />
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
                      disabled={isLoading}
                      className="border border-zinc-500"
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
                      disabled={isLoading}
                      className="border border-zinc-500"
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
                      disabled={isLoading}
                      className="border border-zinc-500"
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
                    <Input
                      disabled={isLoading}
                      className="border border-zinc-500"
                      placeholder="Whatsapp (Opicional)"
                      {...field}
                    />
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
                    <Input
                      disabled={isLoading}
                      className="border border-zinc-500"
                      placeholder="M/F"
                      maxLength={1}
                      {...field}
                    />
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
                      disabled={isLoading}
                      className="border border-zinc-500"
                      maxLength={3}
                      placeholder="Altura em cm: 155"
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
