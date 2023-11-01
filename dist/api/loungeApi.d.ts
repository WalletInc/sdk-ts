/// <reference types="node" />
import http from 'http';
import { Lounge } from '../model/lounge';
import { WTLoungeCreateParams } from '../model/wTLoungeCreateParams';
import { WTLoungeUpdateParams } from '../model/wTLoungeUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum LoungeApiApiKeys {
    api_key = 0
}
export declare class LoungeApi {
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
    setApiKey(key: LoungeApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveLounge(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Lounge;
    }>;
    createLounge(wTLoungeCreateParams: WTLoungeCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Lounge;
    }>;
    fetchAllLounge(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreLounge(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Lounge;
    }>;
    updateLounge(id: any, wTLoungeUpdateParams: WTLoungeUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Lounge;
    }>;
}
