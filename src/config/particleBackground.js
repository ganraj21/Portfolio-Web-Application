import React from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleConfig from './particle-config';

const ParticleBackground = () =>{
return(
    <Particles params={particleConfig}></Particles>
)
}

export default ParticleBackground