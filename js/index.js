import { Router } from "./router.js";

const router = new Router();
router.add('/', './pages/home.html', '../assets/HomeImg.png');
router.add('/universe', '/pages/universe.html', '../assets/UniverseImg.png');
router.add('/exploration', '/pages/exploration.html', '../assets/ExplorationImg.png');
router.add(404, '/pages/404.html', '../assets/HomeImg.png');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();