/// <reference types="node" />
import http from 'http';
import { DashboardWidget } from '../model/dashboardWidget';
import { WTCountResult } from '../model/wTCountResult';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum DashboardApiApiKeys {
    api_key = 0
}
export declare class DashboardApi {
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
    setApiKey(key: DashboardApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchDashboardActiveStaticVoucherCampaignsCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardActiveStaticVouchersCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardAppleWalletSubscribersCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardEmployeesCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardMembersCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardMembershipTiersCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardNewsArticlesCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardOptInListsCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardOptInSourcesCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardOutboundSMSCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardPOSMachinesCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardPOSTransactionsCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardPerformancesCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardPhoneNumbersCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardRedemptionsCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardRefundsCount(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardWalletPageViewsCount(startDateTime: Date, endDateTime: Date, walletObjectPrefix?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchDashboardWidgetsCatalog(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<DashboardWidget>;
    }>;
}
