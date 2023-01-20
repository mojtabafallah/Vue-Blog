import dashBoard from "../components/DashBoard.vue";
import ShowAuthor from "../components/Author/ShowAuthor.vue";
import SinglePost from "../components/Post/SinglePost.vue";

const routes = [
    {
        path: '/',
        component: dashBoard,
        name: 'dashboard'
    },
    {
        path: '/:id/showAuthor',
        name: 'showAuthor',
        component: ShowAuthor
    },
    {
        path: '/:id/showPost',
        name: 'showPost',
        component: SinglePost
    }
];

export default routes;