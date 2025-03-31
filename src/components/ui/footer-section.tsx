
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Sun, Twitter } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight">Empresa</h2>
            <p className="mb-6 text-muted-foreground">
              Soluciones digitales para impulsar el crecimiento de tu negocio.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                Inicio
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Nosotros
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Servicios
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Proyectos
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Consulta
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Redes Sociales</h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Conéctate con nosotros en LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Cambiar modo oscuro
              </Label>
            </div>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Digitaliza-T. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Términos
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
