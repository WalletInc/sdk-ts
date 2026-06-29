/// <reference types="node" />
import http from 'http';
import { SaveMerchantCreditPaymentDesignRequest } from '../model/saveMerchantCreditPaymentDesignRequest';
import { WTAndroidKeystoreResponse } from '../model/wTAndroidKeystoreResponse';
import { WTWalletConfigurationSaveWalletRecord } from '../model/wTWalletConfigurationSaveWalletRecord';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum WalletConfigurationApiApiKeys {
    api_key = 0
}
export declare class WalletConfigurationApi {
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
    setApiKey(key: WalletConfigurationApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    generateAndroidKeystore(regenerate?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAndroidKeystoreResponse;
    }>;
    saveMerchantCreditPaymentDesign(saveMerchantCreditPaymentDesignRequest: SaveMerchantCreditPaymentDesignRequest, options?: {
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
        body: any;
    }>;
}
