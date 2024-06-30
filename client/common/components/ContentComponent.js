import BaseComponent from "../BaseComponent.js";

export default class ContentComponent extends BaseComponent {
    createTemplate() {
        return `<div> Content Component: ${this.props.content}</div>`
    }
}
