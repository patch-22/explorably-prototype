import React, { Component } from 'react'
import * as THREE from 'three'

export default class ThreeDemo extends Component {
  constructor(props) {
    super(props)
    this.mainRef = React.createRef()
  }

  componentDidMount() {
    const width = 0.6 * window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })

    renderer.setSize(width, height)
    renderer.setClearColor(0xffffff, 0)

    this.mainRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({ color: 0x800080 })

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const light = new THREE.DirectionalLight(0xffffff, 5.0)
    light.position.set(10, 10, 10)
    scene.add(light)

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    // Make Responsive
    window.addEventListener('resize', () => {
      camera.aspect = (0.6 * window.innerWidth) / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(0.6 * window.innerWidth, window.innerHeight)
    })
  }

  render() {
    return <div ref={this.mainRef} />
  }
}
