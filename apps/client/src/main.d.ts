import './styles.css';
declare const router: import("@tanstack/router-core").RouterCore<import("@tanstack/router-core").Route<Register, any, "/", "/", string, "__root__", undefined, {}, {}, import("@tanstack/react-router").AnyContext, import("@tanstack/react-router").AnyContext, {}, undefined, import("./routeTree.gen").RootRouteChildren, import("./routeTree.gen").FileRouteTypes, unknown, unknown, undefined>, "never", true, import("@tanstack/history").RouterHistory, Record<string, any>>;
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
export {};
