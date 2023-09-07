import './style.css'

// scene camera render
import * as THREE from 'three';

//allow the mouse to move around
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

//scence
const scene = new THREE.Scene();

//camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);

//render
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(10);
// camera.position.setX(-3);

renderer.render(scene, camera);

const bgcolor =  new THREE.Color(0x03a5fc);
scene.background = bgcolor;

// Shape Tours
// const geometry1 = new THREE.TorusGeometry(10,3,16,10)
// const material1 = new THREE.MeshStandardMaterial({color: 0xFF6347 });
// const torus = new THREE.Mesh(geometry1, material1); 
// scene.add(torus)

//Shape Earth sphere
// const earthTexture = new THREE.TextureLoader().load('earthmap1k.jpg');
// const earthNormalTexture = new THREE.TextureLoader().load('earthspec1k.jpg');

// const earthGeometry = new THREE.SphereGeometry(3, 32, 32);
// const earthMaterial = new THREE.MeshBasicMaterial({
//   map: earthTexture,
//   normalMap : earthNormalTexture,
// });
// const earth = new THREE.Mesh(earthGeometry, earthMaterial);
// scene.add(earth);

const floorGeometry = new THREE.BoxGeometry(10, 0.1, 10);
const floorMaterial = new THREE.MeshStandardMaterial({color: 0x0000ff});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

// pointing light
const pointLight = new THREE.PointLight(0xffffff, 100, 0);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

// light helper
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);


//mouse move
const controls = new OrbitControls(camera, renderer.domElement);

// function addStar() {
//     const geometry = new THREE.SphereGeometry(0.05, 3, 4,6.283185307179586,6.283185307179586,6.283185307179586,6.283185307179586);
//     const material = new THREE.MeshStandardMaterial({color: 0xffffff});
//     const star = new THREE.Mesh(geometry, material);

//     const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 20) );

//     star.position.set(x, y, z);
//     scene.add(star);
// }

// Array(200).fill().forEach(addStar);

//Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // earth.rotation.y += 0.01;
  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate();