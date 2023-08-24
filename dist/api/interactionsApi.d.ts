/// <reference types="node" />
import http from 'http';
import { AdvertisementCreditScan } from '../model/advertisementCreditScan';
import { BrowserDetails } from '../model/browserDetails';
import { DynamicVoucher } from '../model/dynamicVoucher';
import { EmailSubscriber } from '../model/emailSubscriber';
import { InlineObject2 } from '../model/inlineObject2';
import { InlineObject3 } from '../model/inlineObject3';
import { InlineResponse20010 } from '../model/inlineResponse20010';
import { Member } from '../model/member';
import { StaticVoucher } from '../model/staticVoucher';
import { Ticket } from '../model/ticket';
import { WTEmailSubscriberCreateParamsWalletUI } from '../model/wTEmailSubscriberCreateParamsWalletUI';
import { WTFetchWalletPaymentObjectsWithToken } from '../model/wTFetchWalletPaymentObjectsWithToken';
import { WalletConfiguration } from '../model/walletConfiguration';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum InteractionsApiApiKeys {
    api_key = 0
}
export declare class InteractionsApi {
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
    setApiKey(key: InteractionsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    claimTicket(id: any, inlineObject2: InlineObject2, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Ticket;
    }>;
    createAdvertisementCreditScan(adCreditID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AdvertisementCreditScan;
    }>;
    createEmployeeVCard(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    createIcsFile(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    createVirtualBusinessCardVCard(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    fetchAllStaticVouchersAssociatedWithCustomerWithVoucherID(voucherID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<InlineResponse20010>;
    }>;
    fetchCustomerTicketsWithToken(inlineObject3: InlineObject3, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Ticket>;
    }>;
    fetchDynamicVoucherWithVoucherID(voucherID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DynamicVoucher;
    }>;
    fetchMemberInformation(memberID: string, merchantID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Member;
    }>;
    fetchStaticVoucherWithVoucherID(voucherID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StaticVoucher;
    }>;
    fetchWalletPageWithToken(wTFetchWalletPaymentObjectsWithToken: WTFetchWalletPaymentObjectsWithToken, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchWalletPaymentObjectsWithToken(wTFetchWalletPaymentObjectsWithToken: WTFetchWalletPaymentObjectsWithToken, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    findByVanityHandle(handle: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WalletConfiguration;
    }>;
    identifyItem(itemID: string, isRefresh?: boolean, phoneVerificationToken?: string, referrer?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    requestMerchantURLRedirect(itemID: string, browserDetails: BrowserDetails, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    subscribeEmail(wTEmailSubscriberCreateParamsWalletUI: WTEmailSubscriberCreateParamsWalletUI, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmailSubscriber;
    }>;
}
