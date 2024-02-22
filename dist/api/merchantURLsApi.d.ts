/// <reference types="node" />
import http from 'http';
import { MerchantURL } from '../model/merchantURL';
import { WTMerchantURLCreate } from '../model/wTMerchantURLCreate';
import { WTMerchantURLUpdate } from '../model/wTMerchantURLUpdate';
import { WalletPageView } from '../model/walletPageView';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum MerchantURLsApiApiKeys {
    api_key = 0
}
export declare class MerchantURLsApi {
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
    setApiKey(key: MerchantURLsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveMerchantURL(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MerchantURL;
    }>;
    createMerchantURL(wTMerchantURLCreate: WTMerchantURLCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MerchantURL;
    }>;
    fetchAllMerchantURLs(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchMerchantURL(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MerchantURL;
    }>;
    fetchMerchantURLRequests(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WalletPageView>;
    }>;
    restoreMerchantURL(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MerchantURL;
    }>;
    updateMerchantURL(id: any, wTMerchantURLUpdate: WTMerchantURLUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MerchantURL;
    }>;
}
