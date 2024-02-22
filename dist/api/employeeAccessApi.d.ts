/// <reference types="node" />
import http from 'http';
import { Employee } from '../model/employee';
import { WTAuthenticationRegister } from '../model/wTAuthenticationRegister';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EmployeeAccessApiApiKeys {
    api_key = 0
}
export declare class EmployeeAccessApi {
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
    setApiKey(key: EmployeeAccessApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    register(wTAuthenticationRegister: WTAuthenticationRegister, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employee;
    }>;
}
