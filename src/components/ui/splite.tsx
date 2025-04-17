
'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  options?: {
    enableZoom?: boolean
    enablePan?: boolean
    autoRotate?: boolean
  }
}

export function SplineScene({ scene, className, options }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={(splineApp) => {
          // Use try-catch to safely handle any issues with the Spline API
          try {
            // Since we can't directly access these properties due to TypeScript errors,
            // we'll use a more generic approach to try and disable features
            if (options?.enableZoom === false) {
              // Try a more generic approach using any type
              const app = splineApp as any;
              if (app && typeof app.setZoom === 'function') {
                app.setZoom(false);
              }
            }
            
            if (options?.enablePan === false) {
              const app = splineApp as any;
              if (app && typeof app.setPan === 'function') {
                app.setPan(false);
              }
            }
            
            if (options?.autoRotate === false) {
              const app = splineApp as any;
              if (app && typeof app.setAutoRotate === 'function') {
                app.setAutoRotate(false);
              }
            }
          } catch (error) {
            console.error("Failed to configure Spline options:", error);
          }
        }}
      />
    </Suspense>
  )
}
