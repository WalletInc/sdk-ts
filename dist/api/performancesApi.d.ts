/// <reference types="node" />
import http from 'http';
import { Performance } from '../model/performance';
import { WTPerformanceCreateParams } from '../model/wTPerformanceCreateParams';
import { WTPerformanceUpdateParams } from '../model/wTPerformanceUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PerformancesApiApiKeys {
    api_key = 0
}
export declare class PerformancesApi {
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
    setApiKey(key: PerformancesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archivePerformance(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    createPerformance(wTPerformanceCreateParams: WTPerformanceCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    fetchAllPerformances(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restorePerformance(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    updatePerformance(id: any, wTPerformanceUpdateParams: WTPerformanceUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
}
