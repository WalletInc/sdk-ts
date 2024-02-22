/// <reference types="node" />
import http from 'http';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum StaticVoucherCampaignGroupsApiApiKeys {
    api_key = 0
}
export declare class StaticVoucherCampaignGroupsApi {
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
    setApiKey(key: StaticVoucherCampaignGroupsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchStaticVoucherCampaignGroups(campaignsGroupID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
}
