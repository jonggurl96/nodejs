# Three.js
`npm install three`

## Addons
```javascript
import * as THREE from 'three'; // must be THREE
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
```

# Components
- Animation
- Animation / Tracks
- Audio
- Cameras
- Constants
- Core
- Core / BufferAttribute
- Extras
- Extras / Core
- Extras / Curves
- Geometries
- Helpers
- Lights
- Lights / Shadows
- Loaders
- Loaders / Managers
- Materials
- Math
- Math / Interpolants
- Objects
- Renderers
- Renderers / Shaders
- Renderers / WebXR
- Scenes
- Textures

# Install
## Option 1: NPM
```bash
npm install three
```

## Option 2: CDN
```html
<script type="importmap">
	{
		"imports": {
			"three": "https://unpkg.com/three@<version>/build/three.module.js",
			"three/addons/": "https://unpkg.com/three@<version>/examples/jsm"
		}
	}
</script>
```

# Tutorial
- [document manual](https://threejs.org/docs/#manual/ko/introduction/Installation) 심화 과정까지 진행할 예정 