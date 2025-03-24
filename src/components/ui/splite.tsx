
'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  options?: {
    enableZoom?: boolean
    autoRotate?: boolean
    enablePan?: boolean
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
          if (options?.enableZoom === false) {
            try {
              // Intenta acceder a los controles de la cámara a través de la API de splineApp
              const camera = splineApp.findObjectByName('Camera');
              if (camera && camera.userData && camera.userData.controls) {
                camera.userData.controls.enableZoom = false;
              }
            } catch (error) {
              console.error("Failed to disable zoom:", error);
            }
          }
          
          if (options?.enablePan === false) {
            try {
              const camera = splineApp.findObjectByName('Camera');
              if (camera && camera.userData && camera.userData.controls) {
                camera.userData.controls.enablePan = false;
              }
            } catch (error) {
              console.error("Failed to disable pan:", error);
            }
          }
          
          if (options?.autoRotate === false) {
            try {
              const camera = splineApp.findObjectByName('Camera');
              if (camera && camera.userData && camera.userData.controls) {
                camera.userData.controls.autoRotate = false;
              }
            } catch (error) {
              console.error("Failed to disable auto-rotate:", error);
            }
          }
        }}
      />
    </Suspense>
  )
}
