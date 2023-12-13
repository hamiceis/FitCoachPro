import { useState, useEffect} from "react"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { toast } from "react-toastify";
import { useAuthTokenContext } from "@/hooks/useAuthToken";
import { api } from "@/services/api"

import { ProfileStudentProps } from "@/types/profileData";

const formSchema = z
  .object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    repassword: z.string().optional(),
    age: z.string().optional(),
    height: z.string().optional(),
    tel: z.string().optional(),
    gender: z.string().optional(),
    cref: z.string().optional()
  })
  .refine((data) => data.password === data.repassword, {
    message: "As senhas não coincidem",
    path: ["repassword"],
  });

const initialValues = {
  name: "",
  email: "",
  password: "",
  repassword: "",
  age: "21",
  height: "156",
  tel: "",
  gender: "",
  cref:"" 
};

type Role = "student" | "teacher"

export function Profile() {
  const [data, setData] = useState<ProfileStudentProps | null>(null)
  const { authToken } = useAuthTokenContext()

  if(!authToken) return null

  const role = authToken?.role as Role;

  const fetchData = async () => {
    try {
      const response = await api.get(`${role}/${authToken.id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [authToken])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: (role ? data : initialValues) as z.infer<typeof formSchema>
  });
  

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const filterData: Record<string, string | number> = {}
    for(let [key, value] of Object.entries(data)){
      if (value !== undefined && value !== '') {
        filterData[key] = key === 'height' || key === 'age' ? Number(value) : value;
      }
    }

    try {
      console.log(filterData)
      toast.success("Dados atualizados com sucesso")
    }catch(error) {
      console.log(error)
      toast.error("Ocorreu erro ao atualizar os dados")
    }
  };
  return (
    <div className="w-full mt-4 p-2 h-max space-y-4 rounded-lg bg-zinc-900/30 shadow-md">
      <h1 className="text-center text-2xl font-bold">Dados Pessoais</h1>

      <div className="w-full py-2 px-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-6"
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      autoComplete="username"
                      disabled={isLoading}
                      className="border border-zinc-100/10 ring:outline-none focus-visible:ring-zinc-100"
                      placeholder={role ? data?.name : initialValues.name}
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
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="email"
                      autoComplete="email-current"
                      className="border border-zinc-100/10 ring:outline-none focus-visible:ring-zinc-100"
                      placeholder={role ? data?.email : initialValues.email}
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
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="password"
                      autoComplete="new-password"
                      className="border border-zinc-100/10 ring:outline-none focus-visible:ring-zinc-100"
                      placeholder="*******"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="repassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme a senha</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="password"
                      autoComplete="new-password"
                      className="border border-zinc-100/10 ring:outline-none focus-visible:ring-zinc-100"
                      placeholder="*******"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {role === "student" ? (
              <>
               <FormField
               name="tel"
               control={form.control}
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Telefone</FormLabel>
                   <FormControl>
                     <Input
                       disabled={isLoading}
                       type="text"
                       className="border border-zinc-100/10 ring:outline-none focus-visible:ring-zinc-100"
                       placeholder={role ? data?.tel : initialValues.tel}
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
                 <FormItem>
                   <FormLabel>Idade</FormLabel>
                   <FormControl>
                     <Input
                       disabled={isLoading}
                       type="text"
                       className="border border-zinc-100/10 ring:outline-none focus-visible:ring-zinc-100"
                       placeholder={(role ? data?.age.toString() : initialValues.age)}
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
                       type="text"
                       className="border border-zinc-100/10 ring:outline-none focus-visible:ring-zinc-100"
                       placeholder={role ? data?.height.toString() : initialValues.height}
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
                 <FormItem>
                   <FormLabel>Sexo</FormLabel>
                   <Select
                     onValueChange={field.onChange}
                     value={field.value}
                     defaultValue={field.value}
                   >
                     <FormControl>
                       <SelectTrigger className="border border-zinc-100/10 ring:outline-none focus:ring-zinc-100 hover:cursor-pointer">
                         <SelectValue
                           defaultValue={field.value}
                           placeholder="Selecione seu sexo"
                         />
                       </SelectTrigger>
                     </FormControl>
                     <SelectContent className="bg-black rounded-md">
                       <SelectItem value="M">M</SelectItem>
                       <SelectItem value="F">F</SelectItem>
                     </SelectContent>
                   </Select>
                   <FormMessage />
                 </FormItem>
               )}
             />
            </>
            ): (
              <>
              <FormField
               name="cref"
               control={form.control}
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Cref</FormLabel>
                   <FormControl>
                     <Input
                       disabled={isLoading}
                       type="text"
                       className="border border-zinc-100/10 ring:outline-none focus-visible:ring-zinc-100"
                       placeholder={role ? data?.cref : initialValues.cref}
                       {...field}
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             <div></div>
              </>
            )}
            <Button className="md:w-40" type="submit" variant="secondary">
              Atualizar dados
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
