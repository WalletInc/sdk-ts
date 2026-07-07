/// <reference types="node" />
import http from 'http';
import { WTConnectAccountStatus } from '../model/wTConnectAccountStatus';
import { WTConnectOnboardingLinkRequest } from '../model/wTConnectOnboardingLinkRequest';
import { WTConnectOnboardingLinkResponse } from '../model/wTConnectOnboardingLinkResponse';
import { WTConnectPaymentsSummary } from '../model/wTConnectPaymentsSummary';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum StripeConnectApiApiKeys {
    api_key = 0
}
export declare class StripeConnectApi {
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
    setApiKey(key: StripeConnectApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createConnectOnboardingLink(wTConnectOnboardingLinkRequest: WTConnectOnboardingLinkRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTConnectOnboardingLinkResponse;
    }>;
    fetchConnectAccountStatus(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTConnectAccountStatus;
    }>;
    fetchConnectPaymentsSummary(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTConnectPaymentsSummary;
    }>;
}
