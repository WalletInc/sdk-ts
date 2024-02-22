/// <reference types="node" />
import http from 'http';
import { Request } from '../model/request';
import { Response } from '../model/response';
import { StaticVoucher } from '../model/staticVoucher';
import { WTCountResult } from '../model/wTCountResult';
import { WTInfoGenesisLookupRequestErrors } from '../model/wTInfoGenesisLookupRequestErrors';
import { WTInfoGenesisRecordFilterParameters } from '../model/wTInfoGenesisRecordFilterParameters';
import { WTInfoGenesisRoutingIDs } from '../model/wTInfoGenesisRoutingIDs';
import { WTInfoGenesisUniquePostingIDs } from '../model/wTInfoGenesisUniquePostingIDs';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum InfoGenesisReportsApiApiKeys {
    api_key = 0
}
export declare class InfoGenesisReportsApi {
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
    setApiKey(key: InfoGenesisReportsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    countAdCreditsRedemptions(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countAdCreditsRefunds(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countDynamicVoucherRedemptions(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countDynamicVoucherRefunds(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countMembershipPointsRedemptions(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countMembershipPointsRefunds(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countMembershipTierRedemptions(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countMembershipTierRefunds(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countMerchantCreditRedemptions(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countMerchantCreditRefunds(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countStaticVoucherRedemptions(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countStaticVoucherRefunds(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    fetchInfoGenesisAuthorizations(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Request>;
    }>;
    fetchInfoGenesisCampaignData(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    fetchInfoGenesisLookupRequests(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Request>;
    }>;
    fetchInfoGenesisLookupRequestsErrors(wTInfoGenesisLookupRequestErrors: WTInfoGenesisLookupRequestErrors, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Request>;
    }>;
    fetchInfoGenesisRedeemedStaticVouchers(wTInfoGenesisUniquePostingIDs: WTInfoGenesisUniquePostingIDs, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucher>;
    }>;
    fetchInfoGenesisRedeemedUniquePostingIDs(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchInfoGenesisRedemptions(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Request>;
    }>;
    fetchInfoGenesisRefundedRoutingIDs(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchInfoGenesisRefundedStaticVouchers(wTInfoGenesisRoutingIDs: WTInfoGenesisRoutingIDs, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucher>;
    }>;
    fetchInfoGenesisRefunds(wTInfoGenesisRecordFilterParameters: WTInfoGenesisRecordFilterParameters, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Request>;
    }>;
    fetchInfoGenesisRequest(transactionID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Request;
    }>;
    fetchInfoGenesisRequests(wTInfoGenesisRoutingIDs: WTInfoGenesisRoutingIDs, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Request>;
    }>;
    fetchInfoGenesisResponseErrors(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Response>;
    }>;
    fetchInfoGenesisResponses(wTInfoGenesisRoutingIDs: WTInfoGenesisRoutingIDs, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Response>;
    }>;
    fetchInfoGenesisTransactionsWithUniquePostingIDs(wTInfoGenesisUniquePostingIDs: WTInfoGenesisUniquePostingIDs, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Request>;
    }>;
}
