import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

function Sphere({ speed, ...props }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(true);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(
    () =>
      (mesh.current.rotation.x = mesh.current.rotation.y += active ? speed : 0)
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <sphereGeometry attach="geometry" args={[0.8, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "tomato" : "white"}
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}

export default Sphere;
