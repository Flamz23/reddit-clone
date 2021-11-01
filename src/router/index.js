import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Subscriptions from "@/views/Subscriptions.vue";
import NewPost from "@/views/NewPost.vue";
import Conversations from "@/views/Conversations.vue";
import Notifications from "@/views/Notifications.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/subscriptions",
        name: "Subscriptions",
        component: Subscriptions,
    },
    {
        path: "/newPost",
        name: "NewPost",
        component: NewPost,
    },
    {
        path: "/conversations",
        name: "Conversations",
        component: Conversations,
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: Notifications,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;