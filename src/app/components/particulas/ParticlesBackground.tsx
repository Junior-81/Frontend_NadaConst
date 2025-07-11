'use client';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import particlesConfig from '../../../../particlesjs-config';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="h-full w-full" // <-- isso aqui força o canvas a ocupar o container!
      />
    </div>
  );
}
