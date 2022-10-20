/// <reference types="node" />
import http from 'http';
import { ReachPerformanceStats } from '../model/reachPerformanceStats';
import { WTDynamicVoucher } from '../model/wTDynamicVoucher';
import { WTDynamicVoucherCreateParams } from '../model/wTDynamicVoucherCreateParams';
import { WTDynamicVoucherRedemption } from '../model/wTDynamicVoucherRedemption';
import { WTDynamicVoucherUpdateParams } from '../model/wTDynamicVoucherUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum DynamicVouchersApiApiKeys {
    api_key = 0
}
export declare class DynamicVouchersApi {
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
    setApiKey(key: DynamicVouchersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createDynamicVoucher(wTDynamicVoucherCreateParams: WTDynamicVoucherCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTDynamicVoucher;
    }>;
    fetchAllDynamicVouchers(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTDynamicVoucher>;
    }>;
    fetchDynamicVoucherById(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTDynamicVoucher;
    }>;
    fetchDynamicVoucherRedemptions(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTDynamicVoucherRedemption>;
    }>;
    fetchReachStatsOfAllDynamicVouchers(broadcastScheduledStartAt?: Date, broadcastScheduledEndAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReachPerformanceStats;
    }>;
    fetchReachStatsOfIndividualDynamicVoucher(dynamicVoucherID: any, broadcastScheduledStartAt?: Date, broadcastScheduledEndAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReachPerformanceStats;
    }>;
    saveDynamicVoucher(id: any, wTDynamicVoucherUpdateParams: WTDynamicVoucherUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTDynamicVoucher;
    }>;
}
