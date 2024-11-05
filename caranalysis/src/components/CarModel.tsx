import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const CarModel: React.FC = () => {
  const { scene } = useGLTF('./public/car.glb'); // Substitua pelo caminho do seu modelo GLTF

  return (
    <Canvas style={{ height: '30rem', width: '100%' }}>
      {/* Luz Ambiente */}
      <ambientLight intensity={0.5} />
      
      {/* Luzes Pontuais */}
      <pointLight position={[10, 10, 10]} intensity={10} distance={50} />
      <pointLight position={[-10, -10, -10]} intensity={10} distance={50} />
      <pointLight position={[10, -10, -10]} intensity={10} distance={50} />
      <pointLight position={[-10, 10, 10]} intensity={10} distance={50} />

      {/* Luz Direcional */}
      <directionalLight position={[10, 10, 10]} intensity={10} />
      <directionalLight position={[-10, -10, -10]} intensity={10} />
      
      {/* Luz Spot */}
      <spotLight position={[15, 15, 15]} angle={0.3} penumbra={1} intensity={7} />

      {/* Luz Superior */}
      <pointLight position={[0, 15, 0]} intensity={1.5} distance={20} decay={2} />

      <primitive object={scene} scale={[1, 1, 1]} position={[0, 0, 0]} />
      
      <OrbitControls />
    </Canvas>
  );
};

export default CarModel;