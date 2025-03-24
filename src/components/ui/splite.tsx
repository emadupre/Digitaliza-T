
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
              // Attempt to access camera controls through the spline app
              const cameraControls = splineApp.findObjectByName('Camera')?.userData?.controls;
              if (cameraControls) {
                cameraControls.enableZoom = false;
              }
            } catch (error) {
              console.error("Failed to disable zoom:", error);
            }
          }
          
          if (options?.enablePan === false) {
            try {
              const cameraControls = splineApp.findObjectByName('Camera')?.userData?.controls;
              if (cameraControls) {
                cameraControls.enablePan = false;
              }
            } catch (error) {
              console.error("Failed to disable pan:", error);
            }
          }
          
          if (options?.autoRotate === false) {
            try {
              const cameraControls = splineApp.findObjectByName('Camera')?.userData?.controls;
              if (cameraControls) {
                cameraControls.autoRotate = false;
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
