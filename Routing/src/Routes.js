import Home from './components/Home.vue'
import Header from './components/Header.vue'

//This is a better way at doing imports for routing because its better on performance
//you can add a third argument to resolve.ensure, such as 'user' that will bundle all user components together into one
//file
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    });
};

//This is a better way at doing imports for routing because its better on performance
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    })
};

//This is a better way at doing imports for routing because its better on performance
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    })
};

//This is a better way at doing imports for routing because its better on performance
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    })
};

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
            {path:':id', component: UserDetail, beforeEnter: (to,from,next) => {
            console.log('This function can also be created in the component');
            next();
}},
            {path:':id/edit', component: UserEdit, name: 'userEdit'}
        ]},
    //this is a specific redirection
    {path: '/redirect-me', redirect: {name: 'home'}},
    {path: '*', redirect: '/'}
];