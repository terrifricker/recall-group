import { Renderer, Scene, Sphere } from "../../utils/3D";
import { useRef, useEffect } from "react";

export const Mercury = ({ viewWidth, viewHeight }) => {
  const rendererRef = useRef(
    new Renderer(viewWidth, viewHeight, { antialias: false })
  );
  const sceneRef = useRef(new Scene(rendererRef.current));
  const sphereRef = useRef(
    new Sphere({
      mapURL: `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/mercury-surface.jpg`,
      bumpMapURL: `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/mercury-bump-map.jpg`,
      bumpScale: 0.3,
      shinySurface: true,
    })
  );

  const canvasRef = useRef(null);

  useEffect(() => {
    sphereRef.current.setAnimation(() => {
      // because the actual rotation ratio of mercury
      // relative to the earth is rather fast,
      // we squashed the velocity.
      // earth rotation speed = 0.0015
      // mercury rotation speed = 0.005
      sphereRef.current.mesh.rotation.y += 0.005;
    });

    sceneRef.current.add(sphereRef.current);

    sceneRef.current.positionCamera(0, 0, 3);

    sceneRef.current.setAmbientLight(0xffffff, 0.2);
    sceneRef.current.setPointLight(0xffffff, 1, { x: 5, y: 3, z: 5 });

    rendererRef.current.attachTo(canvasRef.current);

    sceneRef.current.animate();
  }, []);

  return <div ref={canvasRef}></div>;
};
