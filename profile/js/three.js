import {GLTFLoader} from 'GLTFLoader';
import {OrbitControls} from 'OrbitControls';
import * as THREE from 'three';

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#canvas'),
    antialias : true,
    alpha: true
});
renderer.outputEncoding = THREE.sRGBEncoding;

let camera = new THREE.PerspectiveCamera(30,1);
camera.position.set(0,0,7);

let loader = new GLTFLoader();
loader.load('shiba/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    renderer.render(scene, camera);
    const controls = new OrbitControls( camera, renderer.domElement );

    function animate(){
        requestAnimationFrame(animate)
        controls.update();
        gltf.scene.rotation.y += 0.07
        renderer.render(scene,camera);
    }
    animate()
})