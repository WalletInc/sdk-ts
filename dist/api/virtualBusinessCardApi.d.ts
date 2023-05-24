/// <reference types="node" />
import http from 'http';
import { VirtualBusinessCard } from '../model/virtualBusinessCard';
import { WTVirtualBusinessCardCreateParams } from '../model/wTVirtualBusinessCardCreateParams';
import { WTVirtualBusinessCardUpdateParams } from '../model/wTVirtualBusinessCardUpdateParams';
import { WalletPageView } from '../model/walletPageView';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum VirtualBusinessCardApiApiKeys {
    api_key = 0
}
export declare class VirtualBusinessCardApi {
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
    setApiKey(key: VirtualBusinessCardApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveVirtualBusinessCard(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VirtualBusinessCard;
    }>;
    createVirtualBusinessCard(wTVirtualBusinessCardCreateParams: WTVirtualBusinessCardCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VirtualBusinessCard;
    }>;
    fetchAllVirtualBusinessCards(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchVirtualBusinessCard(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VirtualBusinessCard;
    }>;
    fetchVirtualBusinessCardRequests(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WalletPageView>;
    }>;
    restoreVirtualBusinessCard(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VirtualBusinessCard;
    }>;
    updateVirtualBusinessCard(id: any, wTVirtualBusinessCardUpdateParams: WTVirtualBusinessCardUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VirtualBusinessCard;
    }>;
}
