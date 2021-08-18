import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home/index.vue';
import Geometry from '../pages/geometry/index.vue';
import * as Geometries from '../pages/geometry/children';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
    }, {
      path: '/geometry',
      name: '几何体(Geometry)',
      component: Geometry,
      children: [
        {
          path: 'plane',
          name: '平面几何体(Plane)',
          component: Geometries.Plane,
        }, {
          path: 'tetrahedron',
          name: '四面几何体(Tetrahedron)',
          component: Geometries.Tetrahedron,
        }, {
          path: 'box',
          name: '立方几何体(Box)',
          component: Geometries.Box,
        }, {
          path: 'octahedron',
          name: '八面几何体(Octahedron)',
          component: Geometries.Octahedron,
        }, {
          path: 'dodecahedron',
          name: '十二面几何体(Dodecahedron)',
          component: Geometries.Dodecahedron,
        }, {
          path: 'icosahedron',
          name: '二十面几何体(Icosahedron)',
          component: Geometries.Icosahedron,
        }, {
          path: 'sphere',
          name: '球几何体(Sphere)',
          component: Geometries.Sphere,
        }, {
          path: 'ring',
          name: '圆环几何体(Ring)',
          component: Geometries.Ring,
        }, {
          path: 'circle',
          name: '圆形几何体(circle)',
          component: Geometries.Circle,
        }, {
          path: 'cone',
          name: '圆锥几何体(Cone)',
          component: Geometries.Cone,
        }, {
          path: 'cylinder',
          name: '圆柱几何体(Cylinder)',
          component: Geometries.Cylinder,
        }, {
          path: 'torus',
          name: '圆环几何体(Torus)',
          component: Geometries.Torus,
        }, {
          path: 'torus-knot',
          name: '圆环扭结几何体(TorusKnot)',
          component: Geometries.TorusKnot,
        }, {
          path: 'tube',
          name: '管道几何体(Tube)',
          component: Geometries.Tube,
        }, {
          path: 'text',
          name: '文本几何体(Text)',
          component: Geometries.Text,
        }
      ]
    }
  ],
});

export default router;
