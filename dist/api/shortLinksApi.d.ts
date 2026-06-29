/// <reference types="node" />
import http from 'http';
import { MerchantURL } from '../model/merchantURL';
import { WTMerchantURLCreate } from '../model/wTMerchantURLCreate';
import { WTMerchantURLUpdate } from '../model/wTMerchantURLUpdate';
import { WalletPageView } from '../model/walletPageView';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ShortLinksApiApiKeys {
    api_key = 0
}
export declare class ShortLinksApi {
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
    setApiKey(key: ShortLinksApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveMerchantURL(id: string, options?: {
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
    fetchMerchantURL(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MerchantURL;
    }>;
    fetchMerchantURLRequests(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WalletPageView>;
    }>;
    restoreMerchantURL(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MerchantURL;
    }>;
    updateMerchantURL(id: string, wTMerchantURLUpdate: WTMerchantURLUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MerchantURL;
    }>;
}
