/// <reference types="node" />
import http from 'http';
import { FetchIndustry200Response } from '../model/fetchIndustry200Response';
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
    buyAddOn(productID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    buySpecialOffer(productID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
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
    fetchAddOns(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchIndustry(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchIndustry200Response;
    }>;
    fetchInvoices(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchSpecialOffers(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
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
