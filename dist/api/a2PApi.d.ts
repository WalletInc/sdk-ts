/// <reference types="node" />
import http from 'http';
import { A2PApplicationSubmission } from '../model/a2PApplicationSubmission';
import { WTA2PApplicationUpdateParams } from '../model/wTA2PApplicationUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum A2PApiApiKeys {
    api_key = 0
}
export declare class A2PApi {
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
    setApiKey(key: A2PApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    beginA2PApplication(a2PApplicationSubmission: A2PApplicationSubmission, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    fetchA2PApplication(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchA2PRegistration(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    updateA2PApplication(applicationID: string, wTA2PApplicationUpdateParams: WTA2PApplicationUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
}
