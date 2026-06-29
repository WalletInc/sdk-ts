/// <reference types="node" />
import http from 'http';
import { WTWalletItemRedemption } from '../model/wTWalletItemRedemption';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum WooCommerceTerminalApiApiKeys {
    api_key = 0
}
export declare class WooCommerceTerminalApi {
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
    setApiKey(key: WooCommerceTerminalApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchWalletItemFromWooCommerceTerminal(itemID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    redeemWalletItemFromWooCommerceTerminal(itemID: string, wTWalletItemRedemption: WTWalletItemRedemption, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    refundWalletItemFromWooCommerceTerminal(ledgerEntryID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
