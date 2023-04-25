export class Router {

    routes     = {};
    background = {};

    add(routename, page, url) {
        this.routes[routename]     = page;
        this.background[routename] = url;
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();

        window.history.pushState({}, "", event.target.href);
    
        this.handle();
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];
        const image = this.background[pathname] || this.background[404];

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('.app').innerHTML = html;
            document.querySelector('body').style.backgroundImage = `url(${image})`;
        })
    }
}