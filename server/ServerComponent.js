import { JSDOM } from "jsdom";

const { document } = new JSDOM().window;

export default class ServerComponent {
    element;
    subElements = {};

    constructor(props) {
        this.props = props;
    }

    createTemplate() {
        throw new Error('method must be implemented');
    }

    createElement(template) {
        const element = document.createElement('div');
        element.innerHTML = template;
        return element.firstElementChild;
    }

    selectSubElements() {
        const elements = this.element.querySelectorAll('[data-element]');

        for (const element of elements) {
            const name = element.getAttribute('data-element');
            this.subElements[name] = element;
        }
    }

    render(containerElement, routeParams) {
        this.routeParams = routeParams;
        this.element = this.createElement(this.createTemplate());
        this.selectSubElements();

        containerElement.appendChild(this.element);
    }

    destroy() {
        this.element.remove();
    }
}
