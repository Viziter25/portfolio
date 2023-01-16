import React from 'react';
import s from '../Main.module.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



export const Particle = () => {
  const particlesInit = async (main:any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className={s.particle}

        options={{
        "particles": {
          "number": {
            "value": 50
          },
          "size": {
            "value": 3
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          }
        }
      }}
      />
    </div>
  );
};
