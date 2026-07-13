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
    camera.position.set(0, 0.6, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lighting — soft studio + brand accent rims
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
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
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), skin);
    head.position.y = 1.5;
    human.add(head);
    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.7),
      dark
    );
    hair.position.y = 1.6;
    human.add(hair);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.25, 16), skin);
    neck.position.y = 1.12;
    human.add(neck);

    // Torso
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 1.0, 8, 24), shirt);
    torso.position.y = 0.2;
    human.add(torso);

    // Relaxed (viewer-right) arm down the side
    const relaxedArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.9, 8, 16), shirt);
    relaxedArm.position.set(0.78, 0.05, 0.3);
    relaxedArm.rotation.z = 0.3;
    human.add(relaxedArm);
    const relaxedHand = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), skin);
    relaxedHand.position.set(0.95, -0.42, 0.45);
    human.add(relaxedHand);

    // Raised (viewer-left) arm holding the phone up for a selfie
    const raisedArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.8, 8, 16), shirt);
    raisedArm.position.set(-0.4, 1.0, 0.55);
    raisedArm.rotation.z = -0.3;
    raisedArm.rotation.x = -0.3;
    human.add(raisedArm);
    const selfieHand = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), skin);
    selfieHand.position.set(-0.3, 1.5, 0.78);
    human.add(selfieHand);

    // Phone (screen facing the camera = the selfie preview)
    const phoneMat = new THREE.MeshStandardMaterial({ color: 0x111113, roughness: 0.4, metalness: 0.3 });
    const phoneScreen = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x8b5cf6,
      emissiveIntensity: 1.4,
      roughness: 0.2,
    });
    const phone = new THREE.Group();
    const phoneBody = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.82, 0.06), phoneMat);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.72), phoneScreen);
    screen.position.z = 0.04;
    phone.add(phoneBody, screen);
    phone.position.set(-0.22, 1.52, 1.0);
    phone.rotation.y = 0.15;
    phone.rotation.z = -0.08;
    human.add(phone);

    // Blinking shutter / flash near the phone
    const flash = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    flash.position.set(-0.22, 1.96, 1.0);
    human.add(flash);

    // Floating likes / engagement particles
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

      phoneScreen.emissiveIntensity = 1.2 + Math.sin(t * 3) * 0.5;

      // shutter flash every ~2.2s
      const blink = Math.sin(t * 2.8);
      flash.visible = blink > 0.6;
      flash.scale.setScalar(0.7 + blink * 0.4);

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
        <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
        <span className="text-xs font-bold tracking-widest text-white">SELFIE</span>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-right backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-widest text-secondary">Taking a selfie</p>
        <p className="text-sm font-semibold text-primary">one phone, real moment</p>
      </div>
    </div>
  );
}
