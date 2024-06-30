import AboutPage from './pages/AboutPage.js';
import HomePage from './pages/HomePage.js';
import YoutubePage from './pages/YoutubePage.js';

const routes = [
    {
        pathname: '/',
        page: HomePage,
    },
    {
        pathname: /\/youtube\/([0-9a-z]+)/i,
        page: YoutubePage,
    },
    {
        pathname: '/about',
        page: AboutPage,
    },
];

export default routes;