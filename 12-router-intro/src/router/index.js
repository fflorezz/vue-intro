import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Posts from "../views/Posts.vue";
import Users from "../views/Users.vue";
import PostPage from "../components/PostPage.vue";
import UserPage from "../components/UserPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/posts/:postId",
    component: PostPage,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/:userId",
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
