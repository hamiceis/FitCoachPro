import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function ToggleRegister() {
  return (
    <>
      <Tabs defaultValue="Student" className="w-96">
        <TabsList>
          <TabsTrigger value="Student">Student</TabsTrigger>
          <TabsTrigger value="Teacher">Teacher</TabsTrigger>
        </TabsList>
        <TabsContent value="Student">
         Criar conta como aluno
        </TabsContent>
        <TabsContent value="Teacher">
          Criar conta como professor 
          </TabsContent>
      </Tabs>
    </>
  );
}
