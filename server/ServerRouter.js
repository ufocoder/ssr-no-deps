import BaseRouter from "../client/common/BaseRouter.js";

export default class ServerRoute extends BaseRouter {
    run(pathname) {
        this.processPathname(pathname);
    }
}