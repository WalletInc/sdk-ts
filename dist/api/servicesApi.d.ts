/// <reference types="node" />
import http from 'http';
import { Service } from '../model/service';
import { WTServiceCreateParams } from '../model/wTServiceCreateParams';
import { WTServiceUpdateParams } from '../model/wTServiceUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ServicesApiApiKeys {
    api_key = 0
}
export declare class ServicesApi {
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
    setApiKey(key: ServicesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveService(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Service;
    }>;
    createService(wTServiceCreateParams: WTServiceCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Service;
    }>;
    fetchAllServices(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreService(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Service;
    }>;
    updateService(id: any, wTServiceUpdateParams: WTServiceUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Service;
    }>;
}
