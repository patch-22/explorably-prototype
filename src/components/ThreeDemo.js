import React, { Component } from "react";
import * as THREE from "three";

export default class ThreeDemo extends Component {
  constructor(props) {
    super(props);
    this.mainRef = React.createRef();
  }

  componentDidMount() {
    const width = 0.6 * window.innerWidth
    const height = 0.6 * window.innerHeight

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);

    this.mainRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x800080 });

    this.cube = new THREE.Mesh(geometry, material)
    scene.add(this.cube)

    const light = new THREE.DirectionalLight(0xffffff, 5.0);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate)
      this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    // Make Responsive
    window.addEventListener("resize", () => {
      camera.aspect = 0.6 * window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(0.6 * window.innerWidth, window.innerHeight);
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.color !== prevProps.color) {
      this.cube.material = new THREE.MeshStandardMaterial({ color: this.props.color ? 0x800080 : 0x60a0c })
    }
  }
  render() {
    return <div>
      <div ref={this.mainRef} />
      {this.props.children}
    </div>
  }
}
