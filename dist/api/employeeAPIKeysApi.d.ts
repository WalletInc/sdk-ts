/// <reference types="node" />
import http from 'http';
import { EmployeeAPIKey } from '../model/employeeAPIKey';
import { WTEmployeeAPIKey } from '../model/wTEmployeeAPIKey';
import { WTEmployeeAPIKeyCreateParams } from '../model/wTEmployeeAPIKeyCreateParams';
import { WTEmployeeAPIKeyUpdateParams } from '../model/wTEmployeeAPIKeyUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EmployeeAPIKeysApiApiKeys {
    api_key = 0
}
export declare class EmployeeAPIKeysApi {
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
    setApiKey(key: EmployeeAPIKeysApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveEmployeeAPIKeys(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeAPIKey;
    }>;
    createEmployeeAPIKeys(wTEmployeeAPIKeyCreateParams: WTEmployeeAPIKeyCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeAPIKey;
    }>;
    fetchAllEmployeeAPIKeys(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<EmployeeAPIKey>;
    }>;
    fetchEmployeeAPIKeyById(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTEmployeeAPIKey;
    }>;
    updateEmployeeAPIKeys(id: any, wTEmployeeAPIKeyUpdateParams: WTEmployeeAPIKeyUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeAPIKey;
    }>;
}
