/// <reference types="node" />
import http from 'http';
import { Gaming } from '../model/gaming';
import { WTGamingCreateParams } from '../model/wTGamingCreateParams';
import { WTGamingUpdateParams } from '../model/wTGamingUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum GamingApiApiKeys {
    api_key = 0
}
export declare class GamingApi {
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
    setApiKey(key: GamingApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveGaming(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Gaming;
    }>;
    createGaming(wTGamingCreateParams: WTGamingCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Gaming;
    }>;
    fetchAllGaming(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreGaming(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Gaming;
    }>;
    updateGaming(id: any, wTGamingUpdateParams: WTGamingUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Gaming;
    }>;
}
