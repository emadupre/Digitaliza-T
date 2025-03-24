
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
        // Instead of passing options directly, we need to pass individual props
        // that the Spline component actually accepts
        onLoad={(spline) => {
          if (options?.enableZoom === false) {
            // Disable zoom if specified
            const camera = spline.camera;
            if (camera) {
              camera.zoom.enable = false;
            }
          }
          
          if (options?.enablePan === false) {
            // Disable pan if specified
            const camera = spline.camera;
            if (camera) {
              camera.pan.enable = false;
            }
          }
          
          if (options?.autoRotate === false) {
            // Disable auto rotation if specified
            const camera = spline.camera;
            if (camera) {
              camera.autoRotate = false;
            }
          }
        }}
      />
    </Suspense>
  )
}
