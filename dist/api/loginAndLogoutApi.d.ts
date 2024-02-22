/// <reference types="node" />
import http from 'http';
import { LoginStatus200Response } from '../model/loginStatus200Response';
import { WTAuthenticationLoginRequest } from '../model/wTAuthenticationLoginRequest';
import { WTAuthenticationLoginResponse } from '../model/wTAuthenticationLoginResponse';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum LoginAndLogoutApiApiKeys {
    api_key = 0
}
export declare class LoginAndLogoutApi {
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
    setApiKey(key: LoginAndLogoutApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    login(wTAuthenticationLoginRequest: WTAuthenticationLoginRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAuthenticationLoginResponse;
    }>;
    loginStatus(token: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LoginStatus200Response;
    }>;
    logout(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
}
