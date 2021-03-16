import React from "react";
import { Canvas } from "react-three-fiber";
import { Html, OrbitControls } from "drei";
import { Controls, useControl } from "react-three-gui";
import Box from "./components/Box/Box";
import Sphere from "./components/Box/Sphere";
import Cylinder from "./components/Box/Cylinder";
import "./App.css";

export default function App() {
  const { animation: { to: rotateSpeed = 0 } = {} } = useControl(
    "Rotate Speed",
    {
      type: "number",
      min: -0.1,
      max: 0.1,
      spring: true
    }
  );

  return (
    <>
      <Canvas>
        <ambientLight />
        <directionalLight castShadow position={[0, 10, 0]} intensity={1.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" color={"teal"} />
          </mesh>
          <Cylinder position={[-2, 0, 0]} speed={rotateSpeed} />
          <Box position={[0, 0, 0]} speed={rotateSpeed} />
          <Sphere position={[2, 0, 0]} speed={rotateSpeed} />
        </group>
        <Html>
          <div class="button">
            <button>Cylinder</button>
            <button>Cube</button>
            <button>Sphere</button>
          </div>
        </Html>
        <OrbitControls />
      </Canvas>
      <Controls />
    </>
  );
}
// function generateNewCylinder() {
//   const total = boxes.length
//   const color = colors[getRandomInt(6)]
//   let newBoxes = boxes.map((props) => ({ ...props, move: false }))
//   newBoxes.push({ position: [getRandomInt(3), total * 0.5 - 3, 0], color: color, move: true })

// }
