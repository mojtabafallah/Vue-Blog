const routes = [
    {
        path: '/',
        component: ()=> import("../components/DashBoard.vue"),
        name: 'dashboard'
    },
    {
        path: '/:id/showAuthor',
        name: 'showAuthor',
        component: ()=> import("../components/Author/ShowAuthor.vue")
    },
    {
        path: '/:id/showPost',
        name: 'showPost',
        component: () => import("../components/Post/SinglePost.vue")
    },
    {
        path: "/newPost",
        name: 'newPost',
        component: () => import("../components/Post/NewPost.vue")
        
    }
];

export default routes;