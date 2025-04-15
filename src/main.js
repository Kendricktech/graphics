import * as BABYLON from 'babylonjs';

const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

const createScene = () => {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 5, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, -10, -1), scene);

  const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
  sphere.position.y = 1;

  const sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
  sphere2.position.x = 4;
  sphere2.position.y = 1;

  const box = BABYLON.MeshBuilder.CreateBox("box",{size:2},scene);
  box.position.x= -4;
  box.position.y = 1;
  const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

  const material = new BABYLON.StandardMaterial("material", scene);
  material.diffuseColor = new BABYLON.Color3(1, 0, 0);
  ground.material = material;

  return scene;
};

const scene = createScene();
engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());
