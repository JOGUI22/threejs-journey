import { Clone, useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
    // Vanilla version
    // const model = useLoader(GLTFLoader, './hamburger.glb')
    // const model = useLoader(
    //     GLTFLoader,
    //     './FlightHelmet/glTF/FlightHelmet.gltf',
    //     (loader) => {
    //         const dracoLoader = new DRACOLoader()
    //         dracoLoader.setDecoderPath('./draco/')
    //         loader.setDRACOLoader(dracoLoader)
    //     }
    // )

    // -- Drei version
    // const model = useGLTF('./hamburger.glb')
    const model = useGLTF('./hamburger-draco.glb')

    return <>
    <Clone object={ model.scene } scale={ 0.35 } position-x={ - 4 } />
    <Clone object={ model.scene } scale={ 0.35 } position-x={ 0 } />
    <Clone object={ model.scene } scale={ 0.35 } position-x={ 4 } />
</>
}

useGLTF.preload('./hamburger-draco.glb')