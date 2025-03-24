
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
            if (options?.enableZoom === false) {
              // Try a different approach to disable zoom
              const cameraControls = splineApp?.wheelZoom;
              if (cameraControls) {
                cameraControls.active = false;
              }
            }
            
            if (options?.enablePan === false) {
              // Try a different approach to disable pan
              const cameraPan = splineApp?.pan;
              if (cameraPan) {
                cameraPan.active = false;
              }
            }
            
            if (options?.autoRotate === false) {
              // Try a different approach to disable auto-rotate
              const cameraRotate = splineApp?.autoRotate;
              if (cameraRotate) {
                cameraRotate.active = false;
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
