import BaseComponent from "../BaseComponent.js";

export default class YoutubeComponent extends BaseComponent {
    createTemplate() {
        const [code] = this.routeParams;
        return `
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/${code}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            ></iframe>`
    }
}
