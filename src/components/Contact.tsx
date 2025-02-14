
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface FormValues {
  username: string;
  email: string;
  message: string;
}

const Contact = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    toast.success("Mensaje enviado con éxito!", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section id="contacto" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-600">
            Estamos aquí para ayudarte a transformar tu visión en realidad
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                rules={{ 
                  required: "El nombre es requerido", 
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      Este es tu nombre completo.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: "El email es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" type="email" {...field} />
                    </FormControl>
                    <FormDescription>
                      Ingresa tu dirección de email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                rules={{ 
                  required: "El mensaje es requerido",
                  minLength: {
                    value: 10,
                    message: "El mensaje debe tener al menos 10 caracteres"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Escribe tu mensaje aquí..." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Comparte los detalles de tu proyecto o consulta.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
