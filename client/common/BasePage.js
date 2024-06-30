let BaseComponent;

const isClient = typeof window === "object";

if (isClient) {
    await import('../app/ClientPage.js').then(ClientPage => {
        BaseComponent = ClientPage.default;
    })
} else {
    await import('../../server/ServerPage.js').then(ServerPage => {
        BaseComponent = ServerPage.default;
    })
}

export default BaseComponent;