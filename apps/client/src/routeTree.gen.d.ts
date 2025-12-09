import { Route as rootRouteImport } from './routes/__root';
import { Route as IndexRouteImport } from './routes/index';
declare const IndexRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/", "/", "/", "/", undefined, import("@tanstack/router-core").ResolveParams<"/">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
export interface FileRoutesByFullPath {
    '/': typeof IndexRoute;
}
export interface FileRoutesByTo {
    '/': typeof IndexRoute;
}
export interface FileRoutesById {
    __root__: typeof rootRouteImport;
    '/': typeof IndexRoute;
}
export interface FileRouteTypes {
    fileRoutesByFullPath: FileRoutesByFullPath;
    fullPaths: '/';
    fileRoutesByTo: FileRoutesByTo;
    to: '/';
    id: '__root__' | '/';
    fileRoutesById: FileRoutesById;
}
export interface RootRouteChildren {
    IndexRoute: typeof IndexRoute;
}
declare module '@tanstack/react-router' {
    interface FileRoutesByPath {
        '/': {
            id: '/';
            path: '/';
            fullPath: '/';
            preLoaderRoute: typeof IndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
    }
}
export declare const routeTree: import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, any, "/", "/", string, "__root__", undefined, {}, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, RootRouteChildren, FileRouteTypes, unknown, unknown, undefined>;
export {};
