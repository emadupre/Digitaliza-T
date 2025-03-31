
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
import { useIsMobile } from "@/hooks/use-mobile"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const isMobile = useIsMobile()

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-black/90 text-foreground">
      <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">Digitaliza-T</h2>
            <p className="text-sm md:text-base text-white/70">
              Soluciones digitales para impulsar el crecimiento de tu negocio.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-indigo-500 after:mt-1">Enlaces Rápidos</h3>
            <nav className="grid grid-cols-2 gap-2 md:block md:space-y-2 text-sm">
              <a href="#inicio" className="block transition-colors hover:text-purple-400">
                Inicio
              </a>
              <a href="#nosotros" className="block transition-colors hover:text-purple-400">
                Nosotros
              </a>
              <a href="#servicios" className="block transition-colors hover:text-purple-400">
                Servicios
              </a>
              <a href="#proyectos" className="block transition-colors hover:text-purple-400">
                Proyectos
              </a>
              <a href="#consulta" className="block transition-colors hover:text-purple-400">
                Consulta
              </a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-indigo-500 after:mt-1">Redes Sociales</h3>
            
            {/* Social media icons - responsive layout */}
            <div className="flex flex-wrap gap-3">
              {isMobile ? (
                // Mobile - Simple buttons without tooltips for better performance
                <>
                  <Button variant="outline" size="icon" className="rounded-full bg-black/30 hover:bg-purple-500/20 border-white/10 hover:border-purple-500/50 transition-all">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full bg-black/30 hover:bg-purple-500/20 border-white/10 hover:border-purple-500/50 transition-all">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full bg-black/30 hover:bg-purple-500/20 border-white/10 hover:border-purple-500/50 transition-all">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full bg-black/30 hover:bg-purple-500/20 border-white/10 hover:border-purple-500/50 transition-all">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </>
              ) : (
                // Desktop - Tooltips enabled for better UX
                <>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full bg-black/30 hover:bg-purple-500/20 border-white/10 hover:border-purple-500/50 transition-all">
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
                        <Button variant="outline" size="icon" className="rounded-full bg-black/30 hover:bg-purple-500/20 border-white/10 hover:border-purple-500/50 transition-all">
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
                        <Button variant="outline" size="icon" className="rounded-full bg-black/30 hover:bg-purple-500/20 border-white/10 hover:border-purple-500/50 transition-all">
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
                        <Button variant="outline" size="icon" className="rounded-full bg-black/30 hover:bg-purple-500/20 border-white/10 hover:border-purple-500/50 transition-all">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Conéctate con nosotros en LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              )}
            </div>
            
            {/* Theme toggle - simplified for better performance */}
            <div className="flex items-center space-x-2 mt-4">
              <Sun className="h-4 w-4 text-white/70" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-purple-600"
              />
              <Moon className="h-4 w-4 text-white/70" />
              <Label htmlFor="dark-mode" className="sr-only">
                Cambiar modo oscuro
              </Label>
            </div>
          </div>
        </div>
        
        {/* Footer bottom section - optimized layout */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
          <p className="text-xs md:text-sm text-white/60">
            © 2024 Digitaliza-T. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4 text-xs md:text-sm">
            <a href="#" className="text-white/60 transition-colors hover:text-purple-400">
              Privacidad
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-purple-400">
              Términos
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-purple-400">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
