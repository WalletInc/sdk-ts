/// <reference types="node" />
import http from 'http';
import { StaticVoucherCampaign } from '../model/staticVoucherCampaign';
import { WTCountResult } from '../model/wTCountResult';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum SettingsApiApiKeys {
    api_key = 0
}
export declare class SettingsApi {
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
    setApiKey(key: SettingsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getActiveCampaigns(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucherCampaign>;
    }>;
    getVouchersCount(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
}
