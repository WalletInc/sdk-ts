/// <reference types="node" />
import http from 'http';
import { WTMerchantUpdate } from '../model/wTMerchantUpdate';
import { WTMerchantUpdatePOSIntegration } from '../model/wTMerchantUpdatePOSIntegration';
import { WTMerchantUpdatePointsOfContact } from '../model/wTMerchantUpdatePointsOfContact';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum MerchantApiApiKeys {
    api_key = 0
}
export declare class MerchantApi {
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
    setApiKey(key: MerchantApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveMerchantProfile(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchCustomRoles(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchEmployees(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchPublicEmployees(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchWalletConfiguration(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    updateMerchant(wTMerchantUpdate: WTMerchantUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    updatePointsOfContact(wTMerchantUpdatePointsOfContact: WTMerchantUpdatePointsOfContact, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    updatePosIntegration(wTMerchantUpdatePOSIntegration: WTMerchantUpdatePOSIntegration, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
