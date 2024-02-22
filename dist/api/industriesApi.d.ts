/// <reference types="node" />
import http from 'http';
import { FetchDomainsByIndustry200Response } from '../model/fetchDomainsByIndustry200Response';
import { FetchIndustry200Response } from '../model/fetchIndustry200Response';
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
        'default': Authentication;
        'api_key': ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: IndustriesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchAllIndustries(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<FetchIndustry200Response>;
    }>;
    fetchDomainsByIndustry(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchDomainsByIndustry200Response;
    }>;
    fetchIndustriesIDs(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
