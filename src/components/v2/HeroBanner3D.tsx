"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function HeroBanner3D({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let frameId = 0;
    let disposed = false;

    const init = () => {
      if (disposed || !container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf7fafc);

      const fov = 28;
      const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 100);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      // Even studio lighting so colors remain 100% vibrant and true to the artwork
      const ambient = new THREE.AmbientLight(0xffffff, 2.5);
      scene.add(ambient);

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.45);
      dirLight.position.set(1.5, 2.2, 3.5);
      scene.add(dirLight);

      const meshWidth = 2.4 * (2048 / 1452);
      const meshHeight = 2.4;

      const updateCameraDistance = (w: number, h: number) => {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();

        // Compute exact camera distance so the 3D diorama fills the viewport edge-to-edge (cover mode) with room for subtle 3D parallax
        const vFovRad = THREE.MathUtils.degToRad(fov);
        const distForHeight = (meshHeight * 0.46) / Math.tan(vFovRad / 2);
        const hFovRad = 2 * Math.atan(Math.tan(vFovRad / 2) * camera.aspect);
        const distForWidth = (meshWidth * 0.46) / Math.tan(hFovRad / 2);
        // Use min distance so the 3D scene covers top, right, and bottom edges without empty borders
        camera.position.z = Math.min(distForHeight, distForWidth);
      };

      updateCameraDistance(width, height);

      let dioramaGroup: THREE.Object3D | null = null;
      const loader = new GLTFLoader();
      loader.load(
        "/models/mobility_era_banner.glb",
        (gltf) => {
          if (disposed) return;
          const root = gltf.scene;
          root.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              const mat = mesh.material as THREE.MeshStandardMaterial;
              if (mat && mat.map) {
                mat.map.colorSpace = THREE.SRGBColorSpace;
                mat.map.anisotropy = renderer.capabilities.getMaxAnisotropy();
                // Replace with high-fidelity unlit+subtle-shading material so artwork colors are 100% accurate
                mesh.material = new THREE.MeshBasicMaterial({
                  map: mat.map,
                });
              }
            }
          });
          dioramaGroup = root;
          scene.add(root);
        },
        undefined,
        (err) => {
          console.error("Failed to load 3D banner GLB:", err);
        }
      );

      // Subtle 3D mouse parallax (NO zoom allowed)
      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;

      const onPointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        targetRotY = THREE.MathUtils.clamp(nx * 0.055, -0.06, 0.06);
        targetRotX = THREE.MathUtils.clamp(ny * 0.04, -0.045, 0.045);
      };

      const onPointerLeave = () => {
        targetRotX = 0;
        targetRotY = 0;
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      container.addEventListener("pointerleave", onPointerLeave);

      const animate = () => {
        if (disposed) return;
        frameId = requestAnimationFrame(animate);

        currentRotX += (targetRotX - currentRotX) * 0.06;
        currentRotY += (targetRotY - currentRotY) * 0.06;

        if (dioramaGroup) {
          dioramaGroup.rotation.x = currentRotX;
          dioramaGroup.rotation.y = currentRotY;
        }

        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!container || disposed) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        updateCameraDistance(w, h);
        renderer.setSize(w, h);
      };

      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
      window.addEventListener("resize", handleResize);

      return () => {
        ro.disconnect();
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("pointermove", onPointerMove);
        container.removeEventListener("pointerleave", onPointerLeave);
        renderer.dispose();
      };
    };

    let cleanupInner: (() => void) | undefined;
    if (container.clientWidth > 0 && container.clientHeight > 0) {
      cleanupInner = init();
    } else {
      const waitRo = new ResizeObserver(() => {
        if (container.clientWidth > 0 && container.clientHeight > 0) {
          waitRo.disconnect();
          cleanupInner = init();
        }
      });
      waitRo.observe(container);
      return () => {
        disposed = true;
        waitRo.disconnect();
        cancelAnimationFrame(frameId);
        cleanupInner?.();
      };
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      cleanupInner?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        backgroundImage: "url('/images/hero-banner-scene.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`relative w-full h-full select-none ${className}`}
      aria-label="3D Mobility Era Board Game Scene"
    />
  );
}
