/// <reference types="node" />
import http from 'http';
import { WTPaymentDesign } from '../model/wTPaymentDesign';
import { WTPaymentDesignCreateParams } from '../model/wTPaymentDesignCreateParams';
import { WTPaymentDesignUpdateParams } from '../model/wTPaymentDesignUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PaymentDesignsApiApiKeys {
    api_key = 0
}
export declare class PaymentDesignsApi {
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
    setApiKey(key: PaymentDesignsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archivePaymentDesign(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPaymentDesign;
    }>;
    createPaymentDesign(wTPaymentDesignCreateParams: WTPaymentDesignCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPaymentDesign;
    }>;
    fetchAllPaymentDesigns(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTPaymentDesign>;
    }>;
    fetchPaymentDesignById(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPaymentDesign;
    }>;
    restorePaymentDesign(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPaymentDesign;
    }>;
    updatePaymentDesign(id: any, wTPaymentDesignUpdateParams: WTPaymentDesignUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPaymentDesign;
    }>;
}
