/// <reference types="node" />
import http from 'http';
import { FetchAllCountries200ResponseInner } from '../model/fetchAllCountries200ResponseInner';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum CountriesApiApiKeys {
    api_key = 0
}
export declare class CountriesApi {
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
    setApiKey(key: CountriesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchAllCountries(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<FetchAllCountries200ResponseInner>;
    }>;
}
