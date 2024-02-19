import Vue from "vue"
import Router from "vue-router"
import Inicio from "./components/Inicio"
import Menu from "./components/template/Menu"
import MenuAlternativo from "./components/template/MenuAlternativo"

// OS COMPONENTES ABAIXO SERÃO CARREGADOS VIA LAZY LOADING

// import Usuario from "./components/usuario/Usuario"
// import UsuarioLista from "./components/usuario/UsuarioLista"
// import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe"
// import UsuarioEditar from "./components/usuario/UsuarioEditar"

Vue.use(Router)

// Com os comentários "webpack...", podemos agrupar os componentes para lazy loading em grupos.
const Usuario = () => import(/* webpackChunkName: "usuario" */"./components/usuario/Usuario")
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */"./components/usuario/UsuarioLista")
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */"./components/usuario/UsuarioDetalhe")
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */"./components/usuario/UsuarioEditar")

const router = new Router({
    // mode: "hash",
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
        name: "inicio",
        path: "/",
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: "/usuario/",
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlternativo
        },
        props: true, // Todos os parâmetros da rota serão enviados aos componentes como props.
        children: [
            { path: "", component: UsuarioLista },
            { path: ":id", component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
                console.log("antes da rota -> usuário detalhe")
                next()
            } },
            // Dar um nome para a rota pode auxiliar o acesso em casos que o path seja muito grande.
            { path: ":id/editar", component: UsuarioEditar, props: true, name: "editarUsuario" }
        ]
    }, {
        path: "/redirecionar",
        redirect: "/usuario"
    }, {
        path: "*",
        redirect: "/"
    }]
})

router.beforeEach((to, from, next) => {
    console.log("antes das rotas -> global")
    next() // Se o next não for chamado, ele não nevagará para a próxima rota.
})

export default router