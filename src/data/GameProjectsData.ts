import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "glTF Viewer", "img/gltfViewer.gif", 
    `
    <div class="paragraph">
    This is a renderer I'm working on with the ultimate goal of supporting most of the <a target="_blank" href="https://en.wikipedia.org/wiki/GlTF">glTF</a> spec. My motivation for this project is to learn about new graphics concepts.
    <br />
    <a target="_blank" href="https://github.com/equilibrium139/gltf-viewer">Source code</a>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/jw35o5AwEA4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features:
        <ul>
        <li>Animation (morph targets, skeletal animation, step/linear/cubic interpolation)</li>
        <li>ImGui UI (scene hierarchy, manipulating entity transform, toggling animations, switching cameras)</li>
        <li>Normal mapping and tangent generation using Mikktspace algorithm</li>
        <li>PBR materials, vertex colors, flat shading</li>
        </ul>
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Depthcaster", "img/depthcaster.gif", `
    <div class="paragraph">
        <strong>Depthcaster</strong> is a dungeon crawler roguelike made with Unity. I worked on it with a group of peers in a capstone course at OSU.
        <br />
        <a target="_blank" href="https://git.gentasaur.us/gsemaj/Depthcaster">Source code</a>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/va07rDwPCbk" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        My role:
        <ul>
        <li>Visual effects</li>
        <li>Enemy logic</li>
        <li>Combat</li>
        <li>Player controls</li>
        </ul>
    </div>
    `, "#5a78af", true),
    new ProjectData("project-3", "Anim View", "img/anim_view.gif", `
    <div class="paragraph">
        This project is an animation viewer I worked on in order to gain a better understanding of the math underlying skeletal animation.
        <br />
        <a target="_blank" href="https://github.com/equilibrium139/anim_view">Source code</a>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/LuEdsILbJuk" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Create poses by editing mesh skeleton</li>
        <li>Manipulate animations (pause, set speed, change animation time)</li>
        <li>Visualize mesh skeleton (each joint is rendered as coordinate system at a certain location)</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/anim_view_skeleton.png" />
        <img class="pc-screenshot" src="img/anim_view_edit.png" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "Software Rasterizer", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    This software rasterizer was a great learning experience. No graphics API. Just C++ and the ability to manipulate pixels on a window.
    <br />
    <a target="_blank" href="https://equilibrium139.github.io/SoftwareRasterizerBrowser/">Demo</a>
    <br />
    <a target="_blank" href="https://github.com/equilibrium139/SoftwareRasterizer">Source code</a>
    <br />
    <embed width="100%" height="800" frameborder="0" scrolling="no" src="https://equilibrium139.github.io/SoftwareRasterizerBrowser/">
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Frustum culling and clipping</li>
        <li>Perspective correct texture mapping</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>
    `, "#e80fb7"),
];