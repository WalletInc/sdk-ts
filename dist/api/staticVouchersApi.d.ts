/// <reference types="node" />
import http from 'http';
import { ReachPerformanceStats } from '../model/reachPerformanceStats';
import { WTStaticVoucher } from '../model/wTStaticVoucher';
import { WTStaticVoucherCreateParams } from '../model/wTStaticVoucherCreateParams';
import { WTStaticVoucherUpdateParams } from '../model/wTStaticVoucherUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum StaticVouchersApiApiKeys {
    api_key = 0
}
export declare class StaticVouchersApi {
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
    setApiKey(key: StaticVouchersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createStaticVoucher(wTStaticVoucherCreateParams: WTStaticVoucherCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucher;
    }>;
    deleteStaticVoucher(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    fetchReachStatsOfAllStaticVouchers(broadcastScheduledStartAt?: Date, broadcastScheduledEndAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReachPerformanceStats;
    }>;
    fetchReachStatsOfIndividualStaticVoucher(staticVoucherID: any, broadcastScheduledStartAt?: Date, broadcastScheduledEndAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReachPerformanceStats;
    }>;
    fetchStaticVoucher(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucher;
    }>;
    updateStaticVoucher(id: any, wTStaticVoucherUpdateParams: WTStaticVoucherUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucher;
    }>;
}
