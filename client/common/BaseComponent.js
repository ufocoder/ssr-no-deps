let BaseComponent;

const isClient = typeof window === "object";

if (isClient) {
    await import('../app/ClientComponent.js').then(ClientComponent => {
        BaseComponent = ClientComponent.default;
    })
} else {
    await import('../../server/ServerComponent.js').then(ServerComponent => {
        BaseComponent = ServerComponent.default;
    })
}

export default BaseComponent;