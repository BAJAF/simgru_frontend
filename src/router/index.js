// Composables
import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "cursos",
        name: "Cursos",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/CoursesPage.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "codigos",
        name: "Codigos",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/CodesPage.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "dashboard",
        name: "Dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/DashboardPage.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "informacion/:courseId",
        name: "Informacion",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/CourseInfoPage.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'reportes',
        name: 'Reportes',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/ReportsPage.vue'),
        meta: {
          requiresAuth: true,
        }
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}

// router.beforeEach(async (to, from, next) => {
//   if(to.matched.some((record) => record.meta.requiresAuth)) {
//     if(await getCurrentUser()) {
//       next()
//     } else {
//       next("/");
//     }
//   } else {
//     next()
//   }
// })

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (await getCurrentUser()) {
//       next();
//     } else {
//       next("/");
//     }
//   } else {
//     if (await getCurrentUser()) {
//       next("/dashboard"); // Redirige al dashboard si el usuario está autenticado, (Me quiero morir)
//     } else {
//       next();
//     }
//   }
// });

router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser();
  const isAuthenticated = !!user;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    isAuthenticated ? next() : next("/");
  } else {
    isAuthenticated ? next("/dashboard") : next();
  }
});


export default router
