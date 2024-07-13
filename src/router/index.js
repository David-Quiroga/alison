import { createRouter, createWebHistory } from "vue-router";

import AdopcionesView from "../views/adopciones/AdopcionesView.vue";
import HistorialView from "@/views/historial/HistorialView.vue";
import HomeView from "../views/HomeView.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/adopciones",
        name: "adopciones",
        component: AdopcionesView
    },
    {
        path: "/historial",
        name: "historial",
        component: HistorialView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router;