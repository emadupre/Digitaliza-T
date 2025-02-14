
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
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const Contact = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
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
            Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
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
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      Tu nombre completo o el de tu representante.
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
                      Tu dirección de email principal.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                rules={{ 
                  required: "El nombre de la empresa es requerido"
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de tu empresa" {...field} />
                    </FormControl>
                    <FormDescription>
                      Nombre de tu empresa o proyecto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                rules={{ 
                  required: "El teléfono es requerido",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Número de teléfono inválido"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 234 567 8900" type="tel" {...field} />
                    </FormControl>
                    <FormDescription>
                      Un número de teléfono donde podamos contactarte.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectType"
                rules={{ 
                  required: "El tipo de proyecto es requerido"
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Proyecto</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ej: Página web, Sistema de gestión, App móvil" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Describe brevemente el tipo de proyecto que necesitas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                rules={{ 
                  required: "El presupuesto estimado es requerido"
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Presupuesto Estimado</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ej: $5,000 - $10,000" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Tu presupuesto aproximado para el proyecto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeline"
                rules={{ 
                  required: "El tiempo estimado es requerido"
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tiempo Estimado</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ej: 3 meses, Antes de diciembre" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      ¿Cuándo necesitas que el proyecto esté terminado?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                rules={{ 
                  required: "La descripción del proyecto es requerida",
                  minLength: {
                    value: 20,
                    message: "Por favor, proporciona una descripción más detallada (mínimo 20 caracteres)"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción del Proyecto</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe tu proyecto, objetivos, funcionalidades principales y cualquier detalle relevante..." 
                        className="min-h-[150px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Proporciona todos los detalles posibles sobre tu proyecto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Enviar Solicitud
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
