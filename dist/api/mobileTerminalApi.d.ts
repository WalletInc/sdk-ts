/// <reference types="node" />
import http from 'http';
import { Member } from '../model/member';
import { WTWalletItemRedemption } from '../model/wTWalletItemRedemption';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum MobileTerminalApiApiKeys {
    api_key = 0
}
export declare class MobileTerminalApi {
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
    setApiKey(key: MobileTerminalApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchWalletItemFromMobileTerminal(itemID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    findMemberByID(memberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Member;
    }>;
    redeemWalletItemFromMobileTerminal(itemID: string, wTWalletItemRedemption: WTWalletItemRedemption, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
