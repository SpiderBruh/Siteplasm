'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Geometry - Brutalist 3D Asterisk
    const mesh = new THREE.Group();
    const material = new THREE.LineBasicMaterial({ 
      color: 0x1C1917, // Premium Black
      transparent: true,
      opacity: 0.3 
    });

    // Structural columns to form the asterisk
    const armGeo = new THREE.CylinderGeometry(0.12, 0.12, 5, 6);
    const wireframe = new THREE.WireframeGeometry(armGeo);
    
    const rotations = [
      [0, 0, 0],
      [Math.PI / 2, 0, 0],
      [0, 0, Math.PI / 2],
      [Math.PI / 4, Math.PI / 4, 0],
      [-Math.PI / 4, Math.PI / 4, 0],
      [0, Math.PI / 4, Math.PI / 4],
      [0, -Math.PI / 4, Math.PI / 4],
    ];

    rotations.forEach(rot => {
      const arm = new THREE.LineSegments(wireframe, material);
      arm.rotation.set(rot[0], rot[1], rot[2]);
      mesh.add(arm);
    });

    scene.add(mesh);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xCA8A04, // Premium Gold
      transparent: true,
      opacity: 0.6,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.y += 0.002;
      mesh.rotation.x += 0.001;

      // Parallax
      mesh.rotation.x += mouse.current.y * 0.05;
      mesh.rotation.y += mouse.current.x * 0.05;

      particlesMesh.rotation.y += 0.001;
      particlesMesh.position.y += Math.sin(Date.now() * 0.001) * 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
};
