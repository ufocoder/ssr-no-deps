export default class ClientPage {
    element;
    components = {}
    componentElements = {}

    constructor() {
        this.element = this.createElement(this.createTemplate());
        this.selectComponentElements();
    }

    createElement(template) {
        const element = document.createElement('div');
        element.innerHTML = template;
        return element.firstElementChild;
    }

    selectComponentElements() {
        const elements = this.element.querySelectorAll('[data-component]');

        for (const element of elements) {
            const name = element.getAttribute('data-component');
            this.componentElements[name] = element;
        }
    }

    createTemplate() {
        return `<div></div>`
    }

    render(containerElement, routeParams) {
        for (const [componentName, componentInstance] of Object.entries(this.components)) {
            const componentContainer = this.componentElements[componentName];
            if (componentContainer) {
                componentInstance.render(componentContainer, routeParams);
            }
        }

        containerElement.appendChild(this.element);
    }

    destroy() {
        for (const componentInstance of Object.values(this.components)) {
            componentInstance.destroy();
        } 

        this.element.remove();
    }
}