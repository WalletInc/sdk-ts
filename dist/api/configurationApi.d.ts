/// <reference types="node" />
import http from 'http';
import { InlineObject3 } from '../model/inlineObject3';
import { WTWalletConfigurationSaveWalletRecord } from '../model/wTWalletConfigurationSaveWalletRecord';
import { WalletConfiguration } from '../model/walletConfiguration';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ConfigurationApiApiKeys {
    api_key = 0
}
export declare class ConfigurationApi {
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
    setApiKey(key: ConfigurationApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createPublicChatRoom(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    saveMerchantCreditPaymentDesign(inlineObject3: InlineObject3, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    saveWalletRecord(wTWalletConfigurationSaveWalletRecord: WTWalletConfigurationSaveWalletRecord, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WalletConfiguration;
    }>;
}
