
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
import { useState } from "react";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

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

const steps = [
  {
    id: 1,
    name: 'Información Personal',
    fields: ['username', 'email', 'company', 'phone']
  },
  {
    id: 2,
    name: 'Detalles del Proyecto',
    fields: ['projectType', 'budget', 'timeline']
  },
  {
    id: 3,
    name: 'Descripción',
    fields: ['message']
  }
];

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
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

  const currentFields = steps.find(step => step.id === currentStep)?.fields || [];

  const validateCurrentStep = async () => {
    const result = await form.trigger(currentFields as any);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

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
    <section id="contacto" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto glass backdrop-blur-md bg-background/25 p-8 rounded-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Solicita una Consulta</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto para que podamos ofrecerte una solución personalizada
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center items-center">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  step.id === currentStep 
                    ? 'border-primary bg-primary text-black font-bold'
                    : step.id < currentStep
                    ? 'border-primary bg-primary text-black font-bold'
                    : 'border-gray-400 text-gray-400'
                }`}>
                  {step.id < currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-20 h-0.5 mx-2 ${
                    step.id < currentStep ? 'bg-primary' : 'bg-gray-400'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <span className="text-sm font-medium text-gray-300">
              {steps.find(step => step.id === currentStep)?.name}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, stagger: 0.1 }}
          className="w-full max-w-md mx-auto"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {currentStep === 1 && (
                <>
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
                </>
              )}

              {currentStep === 2 && (
                <>
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
                </>
              )}

              {currentStep === 3 && (
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
              )}

              <div className="flex justify-between gap-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex-1 border-gray-500 text-white hover:bg-gray-800 hover:text-white"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Anterior
                  </Button>
                )}
                
                {currentStep < steps.length ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary text-black hover:bg-primary/80"
                  >
                    Siguiente
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="flex-1 bg-primary text-black hover:bg-primary/80"
                  >
                    Enviar Solicitud
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
