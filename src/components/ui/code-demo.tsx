
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { TextRewind } from "@/components/ui/text-rewind"
import { ErrorBoundary } from "react-error-boundary"

function FallbackComponent() {
  return (
    <div className="w-full h-full flex items-center justify-center text-neutral-300">
      Loading 3D scene...
    </div>
  )
}
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <TextRewind 
            text="Digitaliza-T"
            shadowColors={{
              first: "#07bccc",
              second: "#e601c0",
              third: "#e9019a",
              fourth: "#f40468",
              glow: "#f40468",
            }}
            className="text-4xl md:text-5xl"
          />
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <ErrorBoundary FallbackComponent={FallbackComponent}>
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </ErrorBoundary>
        </div>
      </div>
    </Card>
  )
}
