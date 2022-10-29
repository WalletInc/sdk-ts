/// <reference types="node" />
import http from 'http';
import { InlineResponse200 } from '../model/inlineResponse200';
import { WTBillingChangePlan } from '../model/wTBillingChangePlan';
import { WTBillingSavePaymentMethod } from '../model/wTBillingSavePaymentMethod';
import { WTBillingVerifyPaymentMethodResponse } from '../model/wTBillingVerifyPaymentMethodResponse';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum BillingApiApiKeys {
    api_key = 0
}
export declare class BillingApi {
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
    setApiKey(key: BillingApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    cancelPlan(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    changePlan(wTBillingChangePlan: WTBillingChangePlan, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchIndustry(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse200;
    }>;
    fetchInvoices(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchSubscription(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchUsageSummary(startDateTime?: Date, endDateTime?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    savePaymentMethod(wTBillingSavePaymentMethod: WTBillingSavePaymentMethod, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    upcomingInvoices(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    verifyPaymentMethod(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTBillingVerifyPaymentMethodResponse;
    }>;
}
