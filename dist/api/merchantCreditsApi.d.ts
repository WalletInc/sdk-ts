/// <reference types="node" />
import http from 'http';
import { InlineResponse2002 } from '../model/inlineResponse2002';
import { MSMerchantCreditHistoryPagination } from '../model/mSMerchantCreditHistoryPagination';
import { MSMerchantCreditRedemptionPagination } from '../model/mSMerchantCreditRedemptionPagination';
import { MerchantCreditSearch } from '../model/merchantCreditSearch';
import { PaginatedWTMerchantCredits } from '../model/paginatedWTMerchantCredits';
import { PaginationRequestWithIDAndWithoutSortOptions } from '../model/paginationRequestWithIDAndWithoutSortOptions';
import { PaginationRequestWithSortOptions } from '../model/paginationRequestWithSortOptions';
import { PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber } from '../model/pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber';
import { WTMerchantCredit } from '../model/wTMerchantCredit';
import { WTMerchantCreditCreationParams } from '../model/wTMerchantCreditCreationParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum MerchantCreditsApiApiKeys {
    api_key = 0
}
export declare class MerchantCreditsApi {
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
    setApiKey(key: MerchantCreditsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveMerchantCredit(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMerchantCredit;
    }>;
    createMerchantCredit(wTMerchantCreditCreationParams: WTMerchantCreditCreationParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMerchantCredit;
    }>;
    fetchMerchantCreditById(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMerchantCredit;
    }>;
    fetchMerchantCreditCount(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2002;
    }>;
    fetchMerchantCreditHistoryLog(paginationRequestWithIDAndWithoutSortOptions: PaginationRequestWithIDAndWithoutSortOptions, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MSMerchantCreditHistoryPagination;
    }>;
    fetchMerchantCreditRedemptionLog(paginationRequestWithIDAndWithoutSortOptions: PaginationRequestWithIDAndWithoutSortOptions, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MSMerchantCreditRedemptionPagination;
    }>;
    fetchMerchantCreditsByPage(paginationRequestWithSortOptions: PaginationRequestWithSortOptions, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTMerchantCredit>;
    }>;
    restoreMerchantCredit(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMerchantCredit;
    }>;
    searchMerchantCredits(merchantCreditSearch: MerchantCreditSearch, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedWTMerchantCredits;
    }>;
    updateMerchantCredit(id: any, pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber: PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMerchantCredit;
    }>;
}
