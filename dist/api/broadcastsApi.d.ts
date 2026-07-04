/// <reference types="node" />
import http from 'http';
import { AdvertisementCreditBroadcast } from '../model/advertisementCreditBroadcast';
import { DynamicVoucherBroadcast } from '../model/dynamicVoucherBroadcast';
import { SimpleSMSBroadcast } from '../model/simpleSMSBroadcast';
import { StaticVoucherCampaignBroadcast } from '../model/staticVoucherCampaignBroadcast';
import { WTEmployeeScheduleSMSCampaignBroadcast } from '../model/wTEmployeeScheduleSMSCampaignBroadcast';
import { WTEmployeeScheduleSimpleSMS } from '../model/wTEmployeeScheduleSimpleSMS';
import { WTEmployeeScheduleSimpleSMSToRecipient } from '../model/wTEmployeeScheduleSimpleSMSToRecipient';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum BroadcastsApiApiKeys {
    api_key = 0
}
export declare class BroadcastsApi {
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
    setApiKey(key: BroadcastsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archivePaymentObjectBroadcast(broadcastID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAdvertisementCreditBroadcasts(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<AdvertisementCreditBroadcast>;
    }>;
    fetchDynamicVoucherBroadcasts(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<DynamicVoucherBroadcast>;
    }>;
    fetchPaymentObjectBroadcasts(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucherCampaignBroadcast>;
    }>;
    fetchSimpleSMSBroadcasts(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<SimpleSMSBroadcast>;
    }>;
    fetchStaticVoucherCampaignBroadcasts(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucherCampaignBroadcast>;
    }>;
    scheduleAdvertisementCredit(advertisementCreditID: string, wTEmployeeScheduleSimpleSMS: WTEmployeeScheduleSimpleSMS, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AdvertisementCreditBroadcast;
    }>;
    scheduleDynamicVoucher(dynamicVoucherID: string, wTEmployeeScheduleSimpleSMS: WTEmployeeScheduleSimpleSMS, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DynamicVoucherBroadcast;
    }>;
    scheduleDynamicVoucherToRecipient(dynamicVoucherID: string, wTEmployeeScheduleSimpleSMSToRecipient: WTEmployeeScheduleSimpleSMSToRecipient, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DynamicVoucherBroadcast;
    }>;
    scheduleSimpleSMS(wTEmployeeScheduleSimpleSMS: WTEmployeeScheduleSimpleSMS, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    scheduleSimpleSMSToRecipient(wTEmployeeScheduleSimpleSMSToRecipient: WTEmployeeScheduleSimpleSMSToRecipient, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    sendSmsCampaignBroadcast(staticVoucherCampaignID: string, wTEmployeeScheduleSMSCampaignBroadcast: WTEmployeeScheduleSMSCampaignBroadcast, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StaticVoucherCampaignBroadcast;
    }>;
}
