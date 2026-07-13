"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ReelScene3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 400;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lighting — soft studio + brand accent rims
    scene.add(new THREE.AmbientLight(0xffffff, 0.65));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(3, 5, 4);
    scene.add(key);
    const purple = new THREE.PointLight(0x8b5cf6, 22, 25);
    purple.position.set(-3, 1.5, 3);
    scene.add(purple);
    const blue = new THREE.PointLight(0x3b82f6, 16, 25);
    blue.position.set(3, -1, 2);
    scene.add(blue);

    const human = new THREE.Group();
    scene.add(human);

    const skin = new THREE.MeshStandardMaterial({ color: 0xe9c2a0, roughness: 0.85 });
    const shirt = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.6 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2b2b35, roughness: 0.7 });

    // Head + hair
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 32), skin);
    head.position.y = 1.5;
    human.add(head);
    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.7),
      dark
    );
    hair.position.y = 1.62;
    human.add(hair);

    // Torso
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.6, 1.1, 8, 24), shirt);
    torso.position.y = 0.2;
    human.add(torso);

    // Arms reaching forward to hold phones
    const armGeo = new THREE.CapsuleGeometry(0.18, 1.0, 8, 16);
    const mkArm = (sx: number) => {
      const arm = new THREE.Mesh(armGeo, shirt);
      arm.position.set(sx * 0.75, 0.4, 0.5);
      arm.rotation.z = sx * -Math.PI / 3.2;
      arm.rotation.x = -0.3;
      human.add(arm);
    };
    mkArm(-1);
    mkArm(1);

    // Hands
    const handGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const hands: THREE.Mesh[] = [];
    [-1, 1].forEach((sx) => {
      const hand = new THREE.Mesh(handGeo, skin);
      hand.position.set(sx * 1.05, -0.15, 0.95);
      human.add(hand);
      hands.push(hand);
    });

    // Two phones (influencer multi-phone reel setup) with glowing screens
    const phoneMat = new THREE.MeshStandardMaterial({ color: 0x111113, roughness: 0.4, metalness: 0.3 });
    const screens: THREE.Mesh[] = [];
    const mkPhone = (hand: THREE.Mesh, sx: number) => {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.9, 0.06), phoneMat);
      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(0.38, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x8b5cf6, emissive: 0x8b5cf6, emissiveIntensity: 1.4, roughness: 0.2 })
      );
      screen.position.z = 0.04;
      g.add(body, screen);
      g.position.copy(hand.position);
      g.position.z += 0.18;
      g.rotation.y = sx * -0.3;
      human.add(g);
      screens.push(screen);
    };
    mkPhone(hands[0], -1);
    mkPhone(hands[1], 1);

    // Blinking REC dot near the right phone
    const rec = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xff3b3b })
    );
    rec.position.set(1.45, 0.55, 1.15);
    human.add(rec);

    // Floating engagement particles
    const particleCount = 50;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x8b5cf6, size: 0.06, transparent: true, opacity: 0.7 });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Mouse / touch parallax
    const target = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.4;
    };
    window.addEventListener("pointermove", onMove);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();

      human.rotation.y += (target.x - human.rotation.y) * 0.05;
      human.rotation.x += (-target.y - human.rotation.x) * 0.05;
      human.position.y = Math.sin(t * 1.2) * 0.05;

      screens.forEach((s, i) => {
        (s.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.2 + Math.sin(t * 3 + i) * 0.5;
      });

      rec.visible = Math.sin(t * 4) > -0.2;
      rec.scale.setScalar(0.8 + Math.sin(t * 8) * 0.2);

      particles.rotation.y = t * 0.05;
      const pos = pGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        let y = pos.getY(i) + 0.01;
        if (y > 2.5) y = -2.5;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth || 400;
      const h = mount.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
          obj.geometry.dispose();
          const m = obj.material as THREE.Material | THREE.Material[];
          if (Array.isArray(m)) m.forEach((x) => x.dispose());
          else m.dispose();
        }
      });
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="glass-panel glow-hover relative w-full overflow-hidden rounded-3xl border border-border-subtle">
      <div ref={mountRef} className="h-[340px] w-full md:h-[420px]" style={{ touchAction: "pan-y" }} />

      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-md">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs font-bold tracking-widest text-white">REC</span>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-right backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-widest text-secondary">Shooting a reel</p>
        <p className="text-sm font-semibold text-primary">multi-phone setup</p>
      </div>
    </div>
  );
}
