import DrunkEffect from './DrunkEffect.jsx'
import { forwardRef } from 'react'

export default forwardRef(function Drunk(props, ref)
{
    console.log(props)
    const effect = new DrunkEffect(props)
    
    return <primitive ref={ ref } object={ effect } />
})