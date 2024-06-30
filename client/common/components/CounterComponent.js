import BaseComponent from "../BaseComponent.js";

export default class CounterComponent extends BaseComponent {
    value = 0;

    constructor(props) {
        super(props);
    }

    createTemplate() {
        return `
            <div> 
                <button data-element="increment">+</button>
                <input data-element="input" type="text" disabled value="${this.props.value}" />
                <button data-element="decrement">-</button>
            </div>
        `
    }

    render(...params) {
        super.render(...params)
        this.createEventListeners();
    }

    handleIncrementButtonClick = (e) => {
        this.props.value += 1;
        this.subElements.input.value = this.props.value;
    }

    handleDecrementButtonClick = (e) => {
        this.props.value -= 1;
        this.subElements.input.value = this.props.value;
    }

    createEventListeners() {
        this.subElements.increment.addEventListener('click', this.handleIncrementButtonClick)
        this.subElements.decrement.addEventListener('click', this.handleDecrementButtonClick)
    }

    destroyEventListeners() {
        this.subElements.increment.removeEventListener('click', this.handleIncrementButtonClick)
        this.subElements.decrement.removeEventListener('click', this.handleDecrementButtonClick)
    }

    destroy() {
        super.destroy();
        this.destroyEventListeners();
    }
}
