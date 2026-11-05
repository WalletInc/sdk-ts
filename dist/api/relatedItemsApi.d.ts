/// <reference types="node" />
import http from 'http';
import { WTRelatedItemSearchResults } from '../model/wTRelatedItemSearchResults';
import { WTRelatedItemSourceType } from '../model/wTRelatedItemSourceType';
import { WTRelatedItemType } from '../model/wTRelatedItemType';
import { WTRelatedItemUsage } from '../model/wTRelatedItemUsage';
import { WTRelatedItems } from '../model/wTRelatedItems';
import { WTRelatedItemsUpdate } from '../model/wTRelatedItemsUpdate';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum RelatedItemsApiApiKeys {
    api_key = 0
}
export declare class RelatedItemsApi {
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
    setApiKey(key: RelatedItemsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchRelatedItemUsage(type: WTRelatedItemType, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTRelatedItemUsage>;
    }>;
    fetchRelatedItems(type: WTRelatedItemSourceType, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTRelatedItems;
    }>;
    saveRelatedItems(type: WTRelatedItemSourceType, id: string, wTRelatedItemsUpdate: WTRelatedItemsUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTRelatedItems;
    }>;
    searchRelatedItems(q?: string, type?: WTRelatedItemType, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTRelatedItemSearchResults;
    }>;
}
