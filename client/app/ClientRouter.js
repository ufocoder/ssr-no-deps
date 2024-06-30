import BaseRouter from "../common/BaseRouter.js";

export default class ClientRouter extends BaseRouter {

    handleWindowClick = (e) => {
        const linkElement = e.target.closest("a");

        if (!linkElement) {
            return;
        }

        const href = linkElement.getAttribute("href");

        if (!href) {
            return;
        }

        e.preventDefault();
        this.processPathname(href);
        window.history.pushState(null,  linkElement.textContent, href);
    }

    run() {
        window.addEventListener('click', this.handleWindowClick);
    }
}