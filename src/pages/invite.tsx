import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"


import { SendHorizonal } from "lucide-react"


const formSchema = z.object({
  email: z.string().email({
    message: "Informe um email válido"
  }).min(1, {
    message: "Email inválido"
  })
})

export function InvitePage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), 
    defaultValues: {
      email: ""
    }
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
    toast({
      title: "Aluno cadastrado na sua lista",
      type: "background",
      action: <SendHorizonal size={16} />
    })
    form.reset()
  }

  return (
    <div className="h-[32.3rem] md:h-[32.4rem] flex items-center justify-center">
        <div className="px-4 py-6 rounded-lg flex flex-col items-center bg-zinc-900/30 shadow-md">
          <h1 className="text-xl font-semibold text-zinc-100">
            Informe o <span className="text-primary text-lg">
              Email
              </span> para adicionar aluno a sua lista
          </h1>

          <div>
          <Form {...form}>
            <form
            className="w-full flex items-center gap-2"
            onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField 
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 relative">
                  <FormLabel className="font-bold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input 
                    className="w-72 border-zinc-100/10 focus-visible:ring-zinc-100"
                    placeholder="aluno@email.com" 
                    {...field} />
                  </FormControl>
                  <FormMessage className="absolute top-9 left-12" />
                </FormItem>
              )}
              />
              <Button
              className="self-end"
              type="submit" 
              >
                Enviar
              </Button>
            </form>
          </Form>
          </div>
        </div>
    </div>
  )
}