/// <reference types="node" />
import http from 'http';
import { CreateStaticVoucherCampaign } from '../model/createStaticVoucherCampaign';
import { CreateStaticVoucherCampaignWithVoucher } from '../model/createStaticVoucherCampaignWithVoucher';
import { CreateStaticVoucherCampaignWithVoucherWithCSV } from '../model/createStaticVoucherCampaignWithVoucherWithCSV';
import { InlineResponse2002 } from '../model/inlineResponse2002';
import { InlineResponse2004 } from '../model/inlineResponse2004';
import { ReachPerformanceStats } from '../model/reachPerformanceStats';
import { StaticVoucherCampaign } from '../model/staticVoucherCampaign';
import { StaticVoucherCampaignUpdate } from '../model/staticVoucherCampaignUpdate';
import { UpdateStaticVoucherCampaignWithVoucher } from '../model/updateStaticVoucherCampaignWithVoucher';
import { VSCampaignGeneratedMessage } from '../model/vSCampaignGeneratedMessage';
import { VSCampaignGeneratedMessagePagination } from '../model/vSCampaignGeneratedMessagePagination';
import { WTStaticVoucher } from '../model/wTStaticVoucher';
import { WTStaticVoucherCampaign } from '../model/wTStaticVoucherCampaign';
import { WTStaticVoucherCampaignPreviewMessages } from '../model/wTStaticVoucherCampaignPreviewMessages';
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
    archiveStaticVoucherCampaign(campaignID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StaticVoucherCampaign;
    }>;
    countVouchersLoaded(campaignID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2002;
    }>;
    countVouchersRedeemed(campaignID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2002;
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
    createStaticVoucherCampaignWithVoucher(createStaticVoucherCampaignWithVoucher: CreateStaticVoucherCampaignWithVoucher, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
    duplicateStaticVoucherCampaignById(campaignID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
    fetchPerformanceOverview(campaignID: any, options?: {
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
    fetchReachStatsOfIndividualStaticVoucherCampaign(staticVoucherCampaignID: any, broadcastScheduledStartAt?: Date, broadcastScheduledEndAt?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReachPerformanceStats;
    }>;
    fetchStaticVoucherCampaignById(id: any, options?: {
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
    fetchStaticVouchers(campaignID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTStaticVoucher>;
    }>;
    fetchStaticVouchersPage(campaignID: any, pagenum: number, pagesize: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2004;
    }>;
    fetchViews(campaignID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTWalletPageView>;
    }>;
    fetchVouchersRedeemed(campaignID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTStaticVoucher>;
    }>;
    previewMessages(campaignID: any, wTStaticVoucherCampaignPreviewMessages: WTStaticVoucherCampaignPreviewMessages, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<VSCampaignGeneratedMessage>;
    }>;
    previewMessagesByPage(campaignID: any, wTStaticVoucherCampaignPreviewMessagesByPage: WTStaticVoucherCampaignPreviewMessagesByPage, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VSCampaignGeneratedMessagePagination;
    }>;
    restoreStaticVoucherCampaign(campaignID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StaticVoucherCampaign;
    }>;
    updateStaticVoucherCampaign(campaignID: any, staticVoucherCampaignUpdate: StaticVoucherCampaignUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
    updateStaticVoucherCampaignWithVoucher(campaignID: any, updateStaticVoucherCampaignWithVoucher: UpdateStaticVoucherCampaignWithVoucher, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTStaticVoucherCampaign;
    }>;
}
