
'use client'

import { useIsMobile } from "@/hooks/use-mobile";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { ErrorBoundary } from "react-error-boundary"

function FallbackComponent() {
  return (
    <div className="w-full h-full flex items-center justify-center text-neutral-300">
      Loading 3D scene...
    </div>
  )
}
 
export function SplineSceneBasic() {
  const isMobile = useIsMobile();
  
  // If on mobile, don't load the 3D scene at all
  if (isMobile) {
    return null;
  }
  
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <div className="flex h-full">
        <div className="flex-1 relative">
          <ErrorBoundary FallbackComponent={FallbackComponent}>
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
              options={{ enableZoom: false, autoRotate: false, enablePan: false }}
            />
          </ErrorBoundary>
        </div>
      </div>
    </Card>
  )
}
