import { Canvas } from '@react-three/fiber'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import * as THREE from 'three'
import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    zoom: 100,
    near: 0.1,
    far: 200,
    position: [3, 2, 6]
}


root.render(
    <Canvas
        // flat -> disable toneMapping 
        // linear -> activate outputEncoding in mode THREE.LinearEncoding
        dpr={ [ 1, 2 ] }  //But [ 1, 2 ] is actually the default value, meaning that we can remove it.        If you are testing on a high pixel ratio screen or have the luxury of having multiple screens with different pixel ratios, you might notice that the renderer handles it automatically. Still, in previous lessons, we discovered that it’s good practice to clamp it in order to avoid performance issues on devices with a very high pixel ratio.
        gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding //this is the default one
        }}
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [3, 2, 6]
        }}
    >
        <Experience />
    </Canvas>
)