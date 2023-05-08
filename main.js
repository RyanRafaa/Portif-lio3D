import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// exibir a tela de carregamento
document.getElementById("loader").style.display = "block";

// ocultar a tela de carregamento após 5 segundos
setTimeout(function(){
  document.getElementById("loader").style.display = "none";
}, 3000);
const canvas = document.getElementById('myCanvas');

// Configuração do renderizador
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();

// Configuração da câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(42, 14, -15);
camera.rotateY(Math.PI / 5); // Rotação em 45 graus no eixo X
camera.rotateX(Math.PI / -4); // Rotação em 45 graus no eixo X

// Adicionando luzes
const ambientLight = new THREE.AmbientLight(0xffffff, 1, 100);
ambientLight.position.set(42, 12, -15);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(42, 12, -15);
pointLight.rotateY(Math.PI / 5); // Rotação em 45 graus no eixo X
pointLight.rotateX(Math.PI / -4); 
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xffffff, 1, 100);
pointLight2.position.set(40, 20, -30);
scene.add(pointLight2);

// Carregando o modelo
const loader = new GLTFLoader();

let model;

loader.load('ASUS5.glb', (gltf) => {
  model = gltf.scene;
  scene.add(model);
});
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
let isMoving = false;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', onDocumentMouseMove);

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) * 0.001;
  mouseY = (event.clientY - windowHalfY) * 0.001;
  isMoving = true;

  // Define um tempo de espera de 3 segundos após o último movimento do mouse
  setTimeout(() => {
    isMoving = false;
  }, 3000);
}
const divcelular = document.getElementById("divcelular");
divcelular.style.display = 'none';
const voltar = document.getElementById("voltar");
voltar.style.display = 'none';
const tutorial = document.getElementById("tutorial")
tutorial.style.display = 'block'

window.addEventListener('click', onWindowClick);

function onWindowClick(event) {
	
  // Verifica se o clique ocorreu em uma área específica da tela
  if (event.clientX > 600 && event.clientX < 700 && event.clientY > 200 && event.clientY < 300) {
    // Ajusta a posição da câmera para dar zoom na cena
    document.removeEventListener('mousemove', onDocumentMouseMove);
	tutorial.style.display = 'none'
	camera.position.z = -20;
	camera.position.y = 6;
	camera.position.x = 38;

	camera.rotateY(50.35); // Rotação em 45 graus no eixo X
	camera.rotateX(Math.PI / 4); // Rotação em 45 graus no eixo X
	camera.rotateZ(Math.PI / 80); // Rotação em 45 graus no eixo X	
	window.removeEventListener('click', onWindowClick);
	canvas.style.filter = 'blur(5px)';
	const div = document.getElementById("myDiv");
	const div1 = document.getElementById("myDiv2");
	const div2 = document.getElementById("myDiv3");
	const voltar = document.getElementById("voltar");
	const divcelular = document.getElementById("divcelular");
	div.style.display = 'flex';
	div1.style.display = 'block';
	div2.style.display = 'none';
	voltar.style.display = 'none';
	divcelular.style.display = 'none';
	
	const buttonwind = document.getElementById("winds");
	buttonwind.addEventListener('click', pctela)
	function pctela() {
	
		
		div1.style.display = 'none';
		div2.style.display = 'block';
	}	
	const buttonmin = document.getElementById("minimizar");
	buttonmin.addEventListener('click', areadetrab)
	function areadetrab() {
	
		
		div1.style.display = 'block';
		div2.style.display = 'none';
		
	}
	const buttonesc = document.getElementById("fechar");
	buttonesc.addEventListener('click', comeco)
	function comeco() {
	
		location.reload();
		
	} 
	 //tela pc
  } else if (event.clientX > 200 && event.clientX < 700 && event.clientY > 20 && event.clientY < 100) {
	document.removeEventListener('mousemove', onDocumentMouseMove);
	camera.position.z = -17;
	camera.position.y = 11;
	camera.position.x = 38;
	voltar.style.display = 'block';
	camera.rotateY(51); // Rotação em 45 graus no eixo X
	camera.rotateX(Math.PI / 4); // Rotação em 45 graus no eixo X
	camera.rotateZ(0); // Rotação em 45 graus no eixo X	
	window.removeEventListener('click', onWindowClick);
	//quadros
  } else if (event.clientX > 0 && event.clientX < 700 && event.clientY > 390 && event.clientY < 430){
	document.removeEventListener('mousemove', onDocumentMouseMove);
	camera.position.z = -18;
	camera.position.y = 6;
	camera.position.x = 38;
	voltar.style.display = 'block';
	canvas.style.filter = 'blur(5px)';
	window.removeEventListener('click', onWindowClick);
	divcelular.style.display = 'block';

	const buttoncelular = document.getElementById("botao-menu-celular");
	buttoncelular.addEventListener('click', sociallinks)
	
	function sociallinks() {
		const telacelularlink = document.getElementById("telacelulardisplay");
		const linksocialtelinha = document.getElementById("linksteladisplay");
		linksocialtelinha.style.display = 'block'
		telacelularlink.style.backgroundImage = "url('./imgs/celulartela2.png')"
		buttoncelular.removeEventListener('click', sociallinks)
		buttoncelular.addEventListener('click', iniciosociallinks)

	}	
	function iniciosociallinks() {
		const telacelularlink = document.getElementById("telacelulardisplay");
		const linksocialtelinha = document.getElementById("linksteladisplay");
		linksocialtelinha.style.display = 'none'
		telacelularlink.style.backgroundImage = "url('./imgs/celulartela.png')"
		buttoncelular.removeEventListener('click', iniciosociallinks)
		buttoncelular.addEventListener('click', sociallinks)

	}
	 
  }//tela do celular
  
}

function animate() {
  // Verifica se o mouse está se movendo
  if (isMoving) {
    targetX = mouseX;
    targetY = mouseY;
    camera.rotation.y += 0.0001 * (targetX - camera.rotation.y);
    camera.rotation.x += 0.0001 * (targetY - camera.rotation.x);
  }

  requestAnimationFrame(animate);
  
}

renderer.render(scene, camera);
animate();