const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    const camera2 = new BABYLON.FreeCamera("camera2", new BABYLON.Vector3(0, 5, -10), scene);
    camera2.setTarget(BABYLON.Vector3.Zero());
    camera2.attachControl(canvas, true);

    const light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, 1, 0), scene);
    light2.intensity = 0.7;

    const base = BABYLON.MeshBuilder.CreateGround("base", { width: 10, height: 10 }, scene);
    const baseMaterial = new BABYLON.StandardMaterial("Base Material", scene);
    baseMaterial.diffuseColor = BABYLON.Color3.Green();


    // BABYLON.ImportMeshAsync(AssetsManager.meshes.Yeti.rootUrl).then((result)) =>{

    // }

    const checkerTexture = new BABYLON.Texture(AssetsManager.textures.checkerboard_basecolor.png.path, scene);
    baseMaterial.diffuseTexture = checkerTexture;

    base.material = baseMaterial;

    return scene;
};

const scene = createScene();
engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener("resize", () => engine.resize());
