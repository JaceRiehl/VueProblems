import User from './components/user/User.vue'
import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Header from './components/Header.vue'
export const routes = [
    //this is the default path
    {path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
        }},
    //this sets up the user path
    {path: '/user', components: {
        default: User,
        'header-bottom': Header}, children: [
            {path: '', component: UserStart, name: 'home'},
            //id is a flexible element
            {path:':id', component: UserDetail},
            {path:':id/edit', component: UserEdit, name: 'userEdit'}
        ]},
    //this is a specific redirection
    {path: '/redirect-me', redirect: {name: 'home'}},
    {path: '*', redirect: '/'}
];