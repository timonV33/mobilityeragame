"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function HeroBanner3D({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let frameId = 0;
    let disposed = false;

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;

    // Scene matching build_in_blender.py world background (0.92, 0.94, 0.96)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0.92, 0.94, 0.96);

    // Camera matching build_in_blender.py:
    // Blender Z-up: location=(0.3, -4.2, 0.9), target=(-0.1, 0.0, 0.6), lens=50mm
    // glTF / Three.js Y-up: location=(0.3, 0.9, 4.2), target=(-0.1, 0.6, 0.0)
    const camera = new THREE.PerspectiveCamera(26, width / height, 0.1, 100);
    camera.position.set(0.3, 0.9, 4.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Studio lighting matching build_in_blender.py Sun + soft studio fill
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xdbe4f0, 1.35);
    hemiLight.position.set(0, 5, 0);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.6);
    sunLight.position.set(2.5, 4.2, 3.8);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0xeef4ff, 1.1);
    fillLight.position.set(-3, 2, 2);
    scene.add(fillLight);

    // Subtle shadow-catching floor plane
    const groundGeo = new THREE.PlaneGeometry(16, 16);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    scene.add(ground);

    // Interactive OrbitControls centered on (-0.1, 0.6, 0.0)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(-0.1, 0.6, 0.0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enablePan = false;
    controls.minDistance = 2.4;
    controls.maxDistance = 6.5;
    controls.minPolarAngle = Math.PI * 0.22;
    controls.maxPolarAngle = Math.PI * 0.54;
    controls.minAzimuthAngle = -Math.PI * 0.32;
    controls.maxAzimuthAngle = Math.PI * 0.32;
    controls.update();

    let boxObj: THREE.Object3D | null = null;
    let boardObj: THREE.Object3D | null = null;
    let boxBaseY = 0.51;
    let boardBaseY = 0.65;

    const loader = new GLTFLoader();
    loader.load(
      "/models/mobility_era_banner.glb",
      (gltf) => {
        if (disposed) return;
        const root = gltf.scene;
        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            const mat = mesh.material as THREE.MeshStandardMaterial;
            if (mat && mat.map) {
              mat.map.colorSpace = THREE.SRGBColorSpace;
              mat.map.anisotropy = renderer.capabilities.getMaxAnisotropy();
            }
          }
          if (child.name === "MobilityEra_Box") {
            boxObj = child;
            boxBaseY = child.position.y;
          }
          if (child.name === "Board_Backdrop") {
            boardObj = child;
            boardBaseY = child.position.y;
          }
        });
        scene.add(root);
        setLoaded(true);
      },
      undefined,
      (err) => {
        console.error("Failed to load GLB:", err);
      }
    );

    const clock = new THREE.Clock();
    const animate = () => {
      if (disposed) return;
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (boxObj) {
        boxObj.position.y = boxBaseY + Math.sin(t * 1.4) * 0.025;
      }
      if (boardObj) {
        boardObj.position.y = boardBaseY + Math.sin(t * 1.1 + 1.0) * 0.015;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container || disposed) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);
    window.addEventListener("resize", handleResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      ro.disconnect();
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        aria-label="Interactive 3D Mobility Era Board Game & Box"
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#ebf0f5] text-xs font-medium text-slate-500">
          Loading 3D Scene...
        </div>
      )}
    </div>
  );
}
