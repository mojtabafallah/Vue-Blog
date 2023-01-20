import dashBoard from "../components/DashBoard.vue";
import ShowAuthor from "../components/Author/ShowAuthor.vue";

const routes = [
    {
        path: '/',
        component: dashBoard,
        name: 'dashboard'
    },
    {
        path: '/showAuthor/:id',
        name: 'showAuthor',
        component: ShowAuthor

    }
];

export default routes;