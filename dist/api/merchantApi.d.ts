/// <reference types="node" />
import http from 'http';
import { AdvertisementCreditBroadcast } from '../model/advertisementCreditBroadcast';
import { DynamicVoucherBroadcast } from '../model/dynamicVoucherBroadcast';
import { HelpDeskRequest } from '../model/helpDeskRequest';
import { ImportedList } from '../model/importedList';
import { InboundSMS } from '../model/inboundSMS';
import { InlineResponse2003 } from '../model/inlineResponse2003';
import { OptInList } from '../model/optInList';
import { OutboundSMS } from '../model/outboundSMS';
import { PhoneNumber } from '../model/phoneNumber';
import { SimpleSMSBroadcast } from '../model/simpleSMSBroadcast';
import { StaticVoucherCampaignBroadcast } from '../model/staticVoucherCampaignBroadcast';
import { Tcpa } from '../model/tcpa';
import { WTCountResult } from '../model/wTCountResult';
import { WTMerchantUpdate } from '../model/wTMerchantUpdate';
import { WTMerchantUpdatePOSIntegration } from '../model/wTMerchantUpdatePOSIntegration';
import { WTMerchantUpdatePointsOfContact } from '../model/wTMerchantUpdatePointsOfContact';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum MerchantApiApiKeys {
    api_key = 0
}
export declare class MerchantApi {
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
    setApiKey(key: MerchantApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveMerchantProfile(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    archivePaymentObjectBroadcast(broadcastID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    countInboundSMS(phoneNumberID: any, fromPhoneNumber?: string, body?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    exportInboundMessages(phoneNumberID: string, locale: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    exportOutboundMessages(phoneNumberID: string, locale: string, paymentObjectBroadcastID?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    fetchAdvertisementCreditBroadcasts(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<AdvertisementCreditBroadcast>;
    }>;
    fetchCustomRoles(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchDynamicVoucherBroadcasts(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<DynamicVoucherBroadcast>;
    }>;
    fetchEmployees(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchHelpDeskRequests(phoneNumberID: any, isResolved?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<HelpDeskRequest>;
    }>;
    fetchImportedList(listID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedList;
    }>;
    fetchImportedLists(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchInboundSMS(phoneNumberID: any, fromPhoneNumber?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<InboundSMS>;
    }>;
    fetchInboundSMSByPage(phoneNumberID: any, fromPhoneNumber?: string, pageSize?: number, pageNum?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2003;
    }>;
    fetchMerchantOutboundSMS(phoneNumberID: any, toPhoneNumber: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OutboundSMS>;
    }>;
    fetchMerchantPhoneNumbers(isArchiveIncluded?: boolean, isApproved?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchOptInList(listID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInList;
    }>;
    fetchOptInLists(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchPhoneNumber(phoneNumberID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PhoneNumber;
    }>;
    fetchPublicEmployees(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
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
    fetchTCPAFilter(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Tcpa>;
    }>;
    fetchWalletConfiguration(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    updateMerchant(wTMerchantUpdate: WTMerchantUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    updatePointsOfContact(wTMerchantUpdatePointsOfContact: WTMerchantUpdatePointsOfContact, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    updatePosIntegration(wTMerchantUpdatePOSIntegration: WTMerchantUpdatePOSIntegration, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
