/// <reference types="node" />
import http from 'http';
import { Dining } from '../model/dining';
import { WTDiningCreateParams } from '../model/wTDiningCreateParams';
import { WTDiningUpdateParams } from '../model/wTDiningUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum DiningApiApiKeys {
    api_key = 0
}
export declare class DiningApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'api_key': ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DiningApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveDining(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Dining;
    }>;
    createDining(wTDiningCreateParams: WTDiningCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Dining;
    }>;
    fetchAllDining(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreDining(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Dining;
    }>;
    updateDining(id: any, wTDiningUpdateParams: WTDiningUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Dining;
    }>;
}
