import ContentComponent from '../components/ContentComponent.js';
import CounterComponent from '../components/CounterComponent.js';
import BasePage from '../BasePage.js';

export default class HomePage extends BasePage {
    components = {
        content: new ContentComponent({ 
            content: 'About page'
        }),
        counter: new CounterComponent({
            value: 42,
        })
    }


    createTemplate() {
        return `
            <div>
                <h2>Homepage</h2>

                <h4>Subtitle content</h4>
                <div data-component="content"></div>

                <h4>Subtitle counter</h4>
                <div data-component="counter"></div>
            </div>
        `
    }
}