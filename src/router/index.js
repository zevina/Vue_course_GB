import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ProjectPage from "@/pages/ProjectPage.vue";
import OurProject from "@/pages/OurProject.vue";
import BlogPage from "@/pages/BlogPage.vue";
import BlogDetailsPage from "@/pages/BlogDetailsPage.vue";
import Error from "@/pages/Error.vue";

export default createRouter(
    {
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/",
          name: "homepage",
          component: HomePage,
        },

        {
          path: "/Project",
          name: "projectpage",
          component: ProjectPage,
        },
        {
          path: "/OurProject",
          name: "ourproject",
          component: OurProject,
        },
        {
          path: "/Blog",
          name: "blogpage",
          component: BlogPage,
        },
        {
          path: "/BlogDetails",
          name: "blogdetailspage",
          component: BlogDetailsPage,
        },
        {
          path: '/:CatchAll(.*)',
          name: '404',
          component: Error
        }
      ]
    }
)