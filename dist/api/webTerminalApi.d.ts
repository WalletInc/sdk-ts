/// <reference types="node" />
import http from 'http';
import { WTWalletItemRedemption } from '../model/wTWalletItemRedemption';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum WebTerminalApiApiKeys {
    api_key = 0
}
export declare class WebTerminalApi {
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
    setApiKey(key: WebTerminalApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchWalletItemFromWebTerminal(itemID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    redeemWalletItemFromWebTerminal(itemID: string, wTWalletItemRedemption: WTWalletItemRedemption, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    refundWalletItemFromWebTerminal(ledgerEntryID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
