
import { router } from './router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';
const body = document.body;
const nav = Navbar();
body.insertBefore(nav, body.firstChild);
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

const app = document.getElementById('app');
if (app) {
    const footer = Footer();
    app.insertAdjacentElement('afterend', footer);
}
