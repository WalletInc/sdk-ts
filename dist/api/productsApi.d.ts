/// <reference types="node" />
import http from 'http';
import { Product } from '../model/product';
import { WTProductCreateParams } from '../model/wTProductCreateParams';
import { WTProductUpdateParams } from '../model/wTProductUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ProductsApiApiKeys {
    api_key = 0
}
export declare class ProductsApi {
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
    setApiKey(key: ProductsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveProduct(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product;
    }>;
    createProduct(wTProductCreateParams: WTProductCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product;
    }>;
    fetchAllProducts(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreProduct(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product;
    }>;
    updateProduct(id: any, wTProductUpdateParams: WTProductUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product;
    }>;
}
