export default class BaseRouter {

    lastPage;
    container;
    routes;

    constructor(container, routes) {
        this.routes = routes;
        this.container = container;
    }

    extractRouteParams(route, pathname) {
        if (route.pathname instanceof RegExp) {
            const result = pathname.match(route.pathname);
            if (result) {
                return result.slice(1);
            }
        }

        return [];
    }

    processPathname(pathname = '/') {
        for (const route of this.routes) {
            const shouldUseRoute = route.pathname instanceof RegExp
                ? route.pathname.test(pathname)
                : pathname === route.pathname;

            if (shouldUseRoute) {
                if (this.lastPage) {
                    this.lastPage.destroy();
                }
                this.container.innerHTML = '';
                this.lastPage = new route.page;

                const routeParams = this.extractRouteParams(route, pathname);
                
                this.lastPage.render(this.container, routeParams);
            }
        }
    }

    run() {
        throw new Error ("must be implemented");
    }
}