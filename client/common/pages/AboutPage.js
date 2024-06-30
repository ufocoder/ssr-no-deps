import ContentComponent from '../components/ContentComponent.js';
import BasePage from '../BasePage.js';

export default class AboutPage extends BasePage {
    components = {
        content: new ContentComponent({ 
            content: 'About page'
        }),
    }

    createTemplate() {
        return `
            <div>
                <h2>About page</h2>
                <div data-component="content"></div>
            </div>
        `
    }
}