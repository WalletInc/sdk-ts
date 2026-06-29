/// <reference types="node" />
import http from 'http';
import { CreateStaticVoucherCampaign } from '../model/createStaticVoucherCampaign';
import { CreateStaticVoucherCampaignWithVoucherWithCSV } from '../model/createStaticVoucherCampaignWithVoucherWithCSV';
import { FetchMembersCount200Response } from '../model/fetchMembersCount200Response';
import { FetchStaticVouchersPage200Response } from '../model/fetchStaticVouchersPage200Response';
import { PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherIsActive } from '../model/pickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherIsActive';
import { ReachPerformanceStats } from '../model/reachPerformanceStats';
import { StaticVoucherCampaign } from '../model/staticVoucherCampaign';
import { StaticVoucherCampaignUpdate } from '../model/staticVoucherCampaignUpdate';
import { UpdateStaticVoucherCampaignWithVoucher } from '../model/updateStaticVoucherCampaignWithVoucher';
import { VSCampaignGeneratedMessagePagination } from '../model/vSCampaignGeneratedMessagePagination';
import { WTStaticVoucher } from '../model/wTStaticVoucher';
import { WTStaticVoucherCampaign } from '../model/wTStaticVoucherCampaign';
import { WTStaticVoucherCampaignPreviewMessagesByPage } from '../model/wTStaticVoucherCampaignPreviewMessagesByPage';
import { WTWalletPageView } from '../model/wTWalletPageView';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum StaticVoucherCampaignsApiApiKeys {
    api_key = 0
}
export declare class StaticVoucherCampaignsApi {
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
    setApiKey(key: StaticVoucherCampaignsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveStaticVoucherCampaign(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StaticVoucherCampaign;
    }>;
    countVouchersLoaded(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchMembersCount200Response;
    }>;
    countVouchersRedeemed(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchMembersCount200Response;
    }>;
    createStaticVoucherCampaign(createStaticVoucherCampaign: CreateStaticVoucherCampaign, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
    createStaticVoucherCampaignFromCSV(createStaticVoucherCampaignWithVoucherWithCSV: CreateStaticVoucherCampaignWithVoucherWithCSV, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
    createStaticVoucherCampaignWithVoucher(body: PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherIsActive, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
    duplicateStaticVoucherCampaignById(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
    fetchPerformanceOverview(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    fetchReachStatsOfAllStaticVoucherCampaigns(broadcastScheduledStartAt?: Date, broadcastScheduledEndAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReachPerformanceStats;
    }>;
    fetchReachStatsOfIndividualStaticVoucherCampaign(staticVoucherCampaignID: string, broadcastScheduledStartAt?: Date, broadcastScheduledEndAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReachPerformanceStats;
    }>;
    fetchStaticVoucherCampaignById(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
    fetchStaticVoucherCampaigns(isArchiveIncluded?: boolean, sourceID?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTStaticVoucherCampaign>;
    }>;
    fetchStaticVouchers(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTStaticVoucher>;
    }>;
    fetchStaticVouchersPage(campaignID: string, pagenum: number, pagesize: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchStaticVouchersPage200Response;
    }>;
    fetchViews(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTWalletPageView>;
    }>;
    fetchVouchersRedeemed(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTStaticVoucher>;
    }>;
    previewMessagesByPage(campaignID: string, wTStaticVoucherCampaignPreviewMessagesByPage: WTStaticVoucherCampaignPreviewMessagesByPage, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VSCampaignGeneratedMessagePagination;
    }>;
    restoreStaticVoucherCampaign(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StaticVoucherCampaign;
    }>;
    updateStaticVoucherCampaign(campaignID: string, staticVoucherCampaignUpdate: StaticVoucherCampaignUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
    updateStaticVoucherCampaignWithVoucher(campaignID: string, updateStaticVoucherCampaignWithVoucher: UpdateStaticVoucherCampaignWithVoucher, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
}
