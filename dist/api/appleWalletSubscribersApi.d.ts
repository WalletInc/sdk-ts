/// <reference types="node" />
import http from 'http';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AppleWalletSubscribersApiApiKeys {
    api_key = 0
}
export declare class AppleWalletSubscribersApi {
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
    setApiKey(key: AppleWalletSubscribersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchAppleWalletSubscriberActivity(subscriptionID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAppleWalletSubscribers(startDateTime?: Date, endDateTime?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
}
