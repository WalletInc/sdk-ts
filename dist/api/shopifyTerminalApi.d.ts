/// <reference types="node" />
import http from 'http';
import { WTWalletItemRedemption } from '../model/wTWalletItemRedemption';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ShopifyTerminalApiApiKeys {
    api_key = 0
}
export declare class ShopifyTerminalApi {
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
    setApiKey(key: ShopifyTerminalApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchWalletItemFromShopifyTerminal(itemID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    redeemWalletItemFromShopifyTerminal(itemID: string, wTWalletItemRedemption: WTWalletItemRedemption, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    refundWalletItemFromShopifyTerminal(ledgerEntryID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
