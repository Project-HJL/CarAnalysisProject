import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import '../index.css'; // Certifique-se de criar este arquivo CSS

const CarModel: React.FC = () => {
  // Ajuste o caminho para carregar o modelo a partir da pasta public
  const { scene } = useGLTF('/car.glb'); // Use o caminho correto para o modelo GLTF

  return (
    <Canvas className="car-model-canvas" style={{ height: '25rem', width: '100%' }}>
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
      <pointLight position={[0, 15, 0]} intensity={150} distance={30} decay={2} />

      <primitive object={scene} scale={[1, 1, 1]} position={[0, 0, 0]} />
      
      <OrbitControls />
    </Canvas>
  );
};

const CarAnalysisPage: React.FC = () => {
  return (
    <div className="container-1">
      <div className="container-1-content-text">
        <h2>CAR ANALYSIS</h2>
        <p>
          Com o Car Analysis, você não apenas resolve problemas com confiança, mas também mantém seu veículo funcionando perfeitamente por mais tempo, garantindo uma jornada tranquila e sem preocupações.
        </p>
        <p>
          Além disso, vai além do diagnóstico, oferecendo também orientações para a manutenção preventiva e otimização do desempenho do veículo.
        </p>
        <p>
          Com sua interface intuitiva e sistema de bate-papo com IA, o Car Analysis oferece análises detalhadas e soluções para uma ampla gama de problemas mecânicos, elétricos e de outros tipos.
        </p>
      </div>
      <div className="container-1-content-model">
        <CarModel />
      </div>
    </div>
  );
};

export default CarAnalysisPage;
