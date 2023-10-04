/// <reference types="node" />
import http from 'http';
import { Agreement } from '../model/agreement';
import { ImportedList } from '../model/importedList';
import { ImportedListRecipient } from '../model/importedListRecipient';
import { InlineResponse2005 } from '../model/inlineResponse2005';
import { InlineResponse2006 } from '../model/inlineResponse2006';
import { InlineResponse2007 } from '../model/inlineResponse2007';
import { OptInList } from '../model/optInList';
import { OptInListSource } from '../model/optInListSource';
import { OptInListSubscriber } from '../model/optInListSubscriber';
import { OutboundSMS } from '../model/outboundSMS';
import { PhoneNumber } from '../model/phoneNumber';
import { SSImportedListRecipientCreateParams } from '../model/sSImportedListRecipientCreateParams';
import { SSOutboundStatuses } from '../model/sSOutboundStatuses';
import { StaticVoucherCampaignBroadcast } from '../model/staticVoucherCampaignBroadcast';
import { Tcpa } from '../model/tcpa';
import { WTCountResult } from '../model/wTCountResult';
import { WTEmployeeImportRecords } from '../model/wTEmployeeImportRecords';
import { WTImportedListRecipientFromMembershipTierImport } from '../model/wTImportedListRecipientFromMembershipTierImport';
import { WTOptInListCreationParams } from '../model/wTOptInListCreationParams';
import { WTSMSAcquirePhoneNumber } from '../model/wTSMSAcquirePhoneNumber';
import { WTSMSCreateAgreement } from '../model/wTSMSCreateAgreement';
import { WTSMSImportOptInListSubscribers } from '../model/wTSMSImportOptInListSubscribers';
import { WTSMSImportedListCreate } from '../model/wTSMSImportedListCreate';
import { WTSMSOptInListSourceCreate } from '../model/wTSMSOptInListSourceCreate';
import { WTSMSUpdatePhoneNumberConfig } from '../model/wTSMSUpdatePhoneNumberConfig';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum SMSApiApiKeys {
    api_key = 0
}
export declare class SMSApi {
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
    setApiKey(key: SMSApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    acquirePhoneNumber(wTSMSAcquirePhoneNumber: WTSMSAcquirePhoneNumber, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PhoneNumber;
    }>;
    archivePhoneNumber(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PhoneNumber;
    }>;
    archiveRecipient(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedListRecipient;
    }>;
    countImportedListRecipients(listID: string, isArchiveIncluded?: boolean, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countOptInListSubscribers(listID: string, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countOptInSourceSubscribers(sourceID: string, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countOutboundSMS(phoneNumberID: string, toPhoneNumber?: string, status?: string, paymentObjectBroadcastID?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    createImportedList(wTSMSImportedListCreate: WTSMSImportedListCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedList;
    }>;
    createOptInList(wTOptInListCreationParams: WTOptInListCreationParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInList;
    }>;
    createOptInListSource(wTSMSOptInListSourceCreate: WTSMSOptInListSourceCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInListSource;
    }>;
    createRecipientInImportedList(sSImportedListRecipientCreateParams: SSImportedListRecipientCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedListRecipient;
    }>;
    createSMSAgreement(wTSMSCreateAgreement: WTSMSCreateAgreement, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Agreement;
    }>;
    exportImportedListRecipients(importedListID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    exportOptInListSubscribers(listID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    fetchBlockedTCPAEntries(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Tcpa>;
    }>;
    fetchImportedListRecipients(listID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ImportedListRecipient>;
    }>;
    fetchImportedListRecipientsByPage(listID: string, pageSize?: number, pageNum?: number, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2007;
    }>;
    fetchOptInListSources(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchOptInListSubscribers(listID: string, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInListSubscriber>;
    }>;
    fetchOptInListSubscribersByPage(listID: string, pageSize?: number, pageNum?: number, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2006;
    }>;
    fetchOptInListsAssociatedWithPhoneNumber(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInList>;
    }>;
    fetchOptInSourceSubscribers(sourceID: string, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInListSubscriber>;
    }>;
    fetchOptInSourcesAssociatedWithPhoneNumber(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInListSource>;
    }>;
    fetchOutboundSMS(phoneNumberID: string, toPhoneNumber?: string, status?: string, paymentObjectBroadcastID?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OutboundSMS>;
    }>;
    fetchOutboundSMSByPage(phoneNumberID: string, toPhoneNumber?: string, paymentObjectBroadcastID?: string, pageSize?: number, pageNum?: number, status?: SSOutboundStatuses, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2005;
    }>;
    fetchPaymentObjectBroadcasts(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucherCampaignBroadcast>;
    }>;
    fetchSMSAgreement(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    importImportedListRecipients(importedListID: string, wTEmployeeImportRecords: WTEmployeeImportRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    importImportedListRecipientsFromMembershipTier(wTImportedListRecipientFromMembershipTierImport: WTImportedListRecipientFromMembershipTierImport, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    importOptInListSubscribers(listID: string, wTSMSImportOptInListSubscribers: WTSMSImportOptInListSubscribers, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    restorePhoneNumber(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PhoneNumber;
    }>;
    restoreRecipient(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedListRecipient;
    }>;
    retrieveSentAndMaxCountOfMessages(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    saveImportedList(listID: string, wTSMSImportedListCreate: WTSMSImportedListCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedList;
    }>;
    saveOptInList(listID: string, wTOptInListCreationParams: WTOptInListCreationParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInList;
    }>;
    saveOptInListSource(sourceID: string, wTSMSOptInListSourceCreate: WTSMSOptInListSourceCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInListSource;
    }>;
    sendPhoneNumberForVerification(phoneNumberID: string, wTSMSUpdatePhoneNumberConfig: WTSMSUpdatePhoneNumberConfig, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    updatePhoneNumber(phoneNumberID: string, wTSMSUpdatePhoneNumberConfig: WTSMSUpdatePhoneNumberConfig, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PhoneNumber;
    }>;
}
