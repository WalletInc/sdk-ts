/// <reference types="node" />
import http from 'http';
import { ImageGrid } from '../model/imageGrid';
import { WTImageGridCreateParams } from '../model/wTImageGridCreateParams';
import { WTImageGridUpdateParams } from '../model/wTImageGridUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ImageGridApiApiKeys {
    api_key = 0
}
export declare class ImageGridApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        api_key: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ImageGridApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveImageGrid(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImageGrid;
    }>;
    createImageGrid(wTImageGridCreateParams: WTImageGridCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImageGrid;
    }>;
    fetchAllImageGrid(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreImageGrid(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImageGrid;
    }>;
    updateImageGrid(id: any, wTImageGridUpdateParams: WTImageGridUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImageGrid;
    }>;
}
