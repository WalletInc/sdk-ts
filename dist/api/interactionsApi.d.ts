/// <reference types="node" />
import http from 'http';
import { AdvertisementCreditScan } from '../model/advertisementCreditScan';
import { BrowserDetails } from '../model/browserDetails';
import { ClaimTicketRequest } from '../model/claimTicketRequest';
import { DynamicVoucher } from '../model/dynamicVoucher';
import { EmailSubscriber } from '../model/emailSubscriber';
import { FetchAdvertisementCreditScansFromListRequest } from '../model/fetchAdvertisementCreditScansFromListRequest';
import { FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner } from '../model/fetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner';
import { FetchCustomerTicketsWithTokenRequest } from '../model/fetchCustomerTicketsWithTokenRequest';
import { Member } from '../model/member';
import { SmsSubscriber } from '../model/smsSubscriber';
import { StaticVoucher } from '../model/staticVoucher';
import { Ticket } from '../model/ticket';
import { WTEmailSubscriberCreateParamsWalletUI } from '../model/wTEmailSubscriberCreateParamsWalletUI';
import { WTFetchWalletPaymentObjectsWithToken } from '../model/wTFetchWalletPaymentObjectsWithToken';
import { WTPrizeGameActivePromotion } from '../model/wTPrizeGameActivePromotion';
import { WTPrizeGamePlayRequest } from '../model/wTPrizeGamePlayRequest';
import { WTPrizeGamePlayResult } from '../model/wTPrizeGamePlayResult';
import { WTPrizeGameType } from '../model/wTPrizeGameType';
import { WTSmsSubscriberCreateParamsWalletUI } from '../model/wTSmsSubscriberCreateParamsWalletUI';
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
    claimTicket(id: string, claimTicketRequest: ClaimTicketRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Ticket;
    }>;
    createAdvertisementCreditScan(adCreditID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AdvertisementCreditScan;
    }>;
    createEmployeeVCard(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    createIcsFile(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    createVirtualBusinessCardVCard(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    fetchActiveDynamicVouchers(merchantID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<DynamicVoucher>;
    }>;
    fetchActivePrizeGamePromotion(merchantID: string, gameType: WTPrizeGameType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPrizeGameActivePromotion;
    }>;
    fetchAdvertisementCreditScansFromList(merchantID: string, fetchAdvertisementCreditScansFromListRequest: FetchAdvertisementCreditScansFromListRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAllStaticVouchersAssociatedWithCustomerWithVoucherID(voucherID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner>;
    }>;
    fetchCustomerTicketsWithToken(fetchCustomerTicketsWithTokenRequest: FetchCustomerTicketsWithTokenRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Ticket>;
    }>;
    fetchDynamicVoucherWithVoucherID(voucherID: string, options?: {
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
    fetchStaticVoucherWithVoucherID(voucherID: string, options?: {
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
    playPrizeGame(wTPrizeGamePlayRequest: WTPrizeGamePlayRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPrizeGamePlayResult;
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
    subscribeSms(wTSmsSubscriberCreateParamsWalletUI: WTSmsSubscriberCreateParamsWalletUI, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SmsSubscriber;
    }>;
}
