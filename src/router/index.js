import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '../views/signIn.vue';
import AlbumIndex from '../views/album/index.vue';
import AlbumCreate from '../views/album/create.vue';
import AlbumEdit from "../views/album/edit.vue";
import AlbumShow from "../views/album/show.vue";
import PhotoCreate from "../views/photo/create.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: { name: "AlbumIndex" },
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/albums',
    name: AlbumIndex,
    component: AlbumIndex
  },
  {
    path: '/albums/create',
    name: AlbumCreate,
    component: AlbumCreate
  },
  {
    path: "/albums/:albumId/edit",
    name: "AlbumEdit",
    component: AlbumEdit,
    props: true,
  },
  {
    path: "/albums/:albumId",
    name: "AlbumShow",
    component: AlbumShow,
    props: true,
  },
  {
    path: "/albums/:albumId/photo/create",
    name: "PhotoCreate",
    component: PhotoCreate,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
