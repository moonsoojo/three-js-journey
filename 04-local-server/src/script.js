import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.CylinderGeometry(1, 1, 5);
const material = new THREE.MeshBasicMaterial({ color: "beige" });
const yut1 = new THREE.Mesh(geometry, material);
yut1.position.set(-7, 0, -1);
scene.add(yut1);
const yut2 = new THREE.Mesh(geometry, material);
yut2.position.set(-4, 0, 3);
scene.add(yut2);
const yut3 = new THREE.Mesh(geometry, material);
yut3.position.set(0, 2, -2);
scene.add(yut3);
const yut4 = new THREE.Mesh(geometry, material);
yut4.position.set(4, 0, -2);
scene.add(yut4);

// Sizes
const sizes = {
  width: 800,
  height: 1200,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 20;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
