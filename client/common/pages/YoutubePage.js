import ContentComponent from '../components/ContentComponent.js';
import YoutubeComponent from '../components/YoutubeComponent.js';
import BasePage from '../BasePage.js';

export default class YoutubePage extends BasePage {
    components = {
        before: new ContentComponent({ 
            content: 'Content before embed youtube'
        }),
        youtube: new YoutubeComponent(),
        after: new ContentComponent({ 
            content: 'Content after embed youtube'
        }),
    }

    createTemplate() {
        return `
            <div>
                <h2>Youtube page</h2>

                <div data-component="before"></div>
                <div data-component="youtube"></div>
                <div data-component="after"></div>
            </div>
        `
    }
}