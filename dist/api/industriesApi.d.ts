/// <reference types="node" />
import http from 'http';
import { InlineResponse200 } from '../model/inlineResponse200';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum IndustriesApiApiKeys {
    api_key = 0
}
export declare class IndustriesApi {
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
    setApiKey(key: IndustriesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchAllIndustries(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<InlineResponse200>;
    }>;
}
