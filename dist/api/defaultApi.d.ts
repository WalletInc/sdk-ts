/// <reference types="node" />
import http from 'http';
import { AdvertisementCreditScan } from '';
import { DynamicVoucher } from '';
import { EmailSubscriber } from '';
import { LedgerEntry } from '';
import { Member } from '';
import { OptInListSubscriber } from '';
import { SmsSubscriber } from '';
import { StaticVoucher } from '';
import { Ticket } from '';
import { WTMembershipTier } from '';
import { WTMerchantCredit } from '';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum DefaultApiApiKeys {
    api_key = 0
}
export declare class DefaultApi {
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
    setApiKey(key: DefaultApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    customersDynamicVoucherRedeemed(dynamicVoucher?: DynamicVoucher, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersDynamicVoucherRefunded(dynamicVoucher?: DynamicVoucher, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersMerchantCreditRedeemed(wTMerchantCredit?: WTMerchantCredit, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersMerchantCreditRefunded(wTMerchantCredit?: WTMerchantCredit, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersPrizeRedeemed(advertisementCreditScan?: AdvertisementCreditScan, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersPrizeRefunded(advertisementCreditScan?: AdvertisementCreditScan, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersStaticVoucherRedeemed(staticVoucher?: StaticVoucher, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersStaticVoucherRefunded(staticVoucher?: StaticVoucher, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersTicketClaimed(ticket?: Ticket, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersTicketRedeemed(ticket?: Ticket, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    customersTicketUnclaimed(ticket?: Ticket, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    membersPointsRedeemed(member?: Member, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    membersPointsRefunded(member?: Member, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    membersTierRedeemed(wTMembershipTier?: WTMembershipTier, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    membersTierRefunded(wTMembershipTier?: WTMembershipTier, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    subscribersEmailOptIn(emailSubscriber?: EmailSubscriber, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    subscribersSMSDefaultOptIn(smsSubscriber?: SmsSubscriber, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    subscribersSMSKeywordOptIn(optInListSubscriber?: OptInListSubscriber, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    visitorsAuthentiationSuccess(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    visitorsBusinessCardDownloaded(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    visitorsCalendarEventDownloaded(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    walletPlatformAddOnPurchased(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    walletPlatformInvoiceCreated(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    walletPlatformInvoicePaid(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    walletPlatformLedgerEntryCreated(ledgerEntry?: LedgerEntry, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    walletPlatformPaymentMethodAdded(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    walletPlatformSubscriptionChanged(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
