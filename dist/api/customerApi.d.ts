/// <reference types="node" />
import http from 'http';
import { StaticVoucher } from '../model/staticVoucher';
import { WTCustomerSearchByMemberID } from '../model/wTCustomerSearchByMemberID';
import { WTCustomerSearchByPhoneNumber } from '../model/wTCustomerSearchByPhoneNumber';
import { WalletPageView } from '../model/walletPageView';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum CustomerApiApiKeys {
    api_key = 0
}
export declare class CustomerApi {
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
    setApiKey(key: CustomerApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchActiveVouchers(memberID?: string, cellPhoneNumber?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucher>;
    }>;
    fetchAllVouchers(memberID?: string, cellPhoneNumber?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucher>;
    }>;
    fetchExpiredVouchers(memberID?: string, cellPhoneNumber?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucher>;
    }>;
    fetchRedeemedVouchers(memberID?: string, cellPhoneNumber?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucher>;
    }>;
    fetchRefundedVouchers(memberID?: string, cellPhoneNumber?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucher>;
    }>;
    fetchUpcomingVouchers(memberID?: string, cellPhoneNumber?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucher>;
    }>;
    fetchWalletViewsForSession(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WalletPageView>;
    }>;
    searchByMemberID(wTCustomerSearchByMemberID: WTCustomerSearchByMemberID, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    searchByPhoneNumber(wTCustomerSearchByPhoneNumber: WTCustomerSearchByPhoneNumber, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
