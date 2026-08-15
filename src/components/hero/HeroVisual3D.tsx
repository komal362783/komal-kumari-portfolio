import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Database, BarChart3, Cpu } from 'lucide-react';

export const HeroVisual3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group to hold all 3D data elements for unified rotation
    const dataGroup = new THREE.Group();
    scene.add(dataGroup);

    // 1. Create Data Nodes (Spheres with vibrant emerald & cyan glowing materials)
    const nodeCount = 42;
    const nodePositions: THREE.Vector3[] = [];
    const nodeColors = [
      new THREE.Color('#10B981'), // Vibrant Emerald
      new THREE.Color('#06B6D4'), // Vibrant Cyan
      new THREE.Color('#34D399'), // Light Emerald
      new THREE.Color('#22D3EE'), // Bright Cyan
      new THREE.Color('#64748B'), // Slate
    ];

    const nodeGeometry = new THREE.SphereGeometry(0.095, 16, 16);
    const nodeMeshGroup = new THREE.Group();

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + (Math.random() - 0.5) * 1.2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.8;
      const z = r * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      const color = nodeColors[Math.floor(Math.random() * nodeColors.length)];
      const material = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: false,
      });

      const mesh = new THREE.Mesh(nodeGeometry, material);
      mesh.position.copy(pos);
      nodeMeshGroup.add(mesh);
    }
    dataGroup.add(nodeMeshGroup);

    // 2. Connect nearest neighbors with glowing emerald/cyan line edges
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.32,
    });

    const linePoints: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 1.7) {
          linePoints.push(nodePositions[i]);
          linePoints.push(nodePositions[j]);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    dataGroup.add(lineSegments);

    // 3. Central Core Wireframe Data Icosahedron (Cyan)
    const coreGeometry = new THREE.IcosahedronGeometry(1.4, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    dataGroup.add(coreMesh);

    // 4. Subtle Orbital Data Rings
    const ringGeo = new THREE.TorusGeometry(3.2, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.25,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh1.rotation.x = Math.PI / 3;
    dataGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    dataGroup.add(ringMesh2);

    // 5. Floating Background Particle Starfield
    const particlesCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 14;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Interactive Mouse Tracking with smooth lerping
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      dataGroup.rotation.y += 0.003;
      dataGroup.rotation.x += 0.0015;
      coreMesh.rotation.y -= 0.005;
      coreMesh.rotation.z += 0.003;
      particles.rotation.y = elapsedTime * 0.02;

      dataGroup.rotation.y += (targetRotationY - dataGroup.rotation.y) * 0.05;
      dataGroup.rotation.x += (targetRotationX - dataGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      nodeGeometry.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[540px] flex items-center justify-center">
      {/* Ambient glow behind 3D visual */}
      <div className="absolute inset-0 bg-radial from-emerald-500/10 via-cyan-500/5 to-transparent pointer-events-none -z-10" />

      {/* WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Data Node Mesh — Move cursor to interact"
      />

      {/* Floating Micro Analytics Glass Cards */}
      <div className="absolute top-6 left-4 sm:left-6 glass-card px-3.5 py-2.5 rounded-xl border border-cyan-500/35 shadow-lg pointer-events-none backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-wider uppercase text-slate-300">Structured Modeling</div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Relational Star Schema</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-4 sm:right-6 glass-card px-3.5 py-2.5 rounded-xl border border-emerald-500/35 shadow-lg pointer-events-none backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-wider uppercase text-slate-300">Visual Insights</div>
            <div className="text-xs font-bold text-white">
              EDA & KPI Intelligence
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 hidden md:flex glass-card px-3 py-1.5 rounded-lg border border-slate-700 items-center gap-2 text-[11px] font-mono text-slate-200 pointer-events-none">
        <Cpu className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
        <span>3D Cluster: Reacts to mouse coordinates</span>
      </div>
    </div>
  );
};
