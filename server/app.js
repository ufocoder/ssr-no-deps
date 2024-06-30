import ServerRouter from "./ServerRouter.js";
import routes from "../client/common/routes.js";

import { JSDOM } from "jsdom";

const { document } = new JSDOM().window;

export default function renderIntoString(pathname) {

    const container = document.createElement('div');

    const router = new ServerRouter(container, routes);

    router.run(pathname)

    return container.innerHTML;
}