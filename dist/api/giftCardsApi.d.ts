/// <reference types="node" />
import http from 'http';
import { WTCertificateDealCreateRequest } from '../model/wTCertificateDealCreateRequest';
import { WTCertificatePurchaseRequest } from '../model/wTCertificatePurchaseRequest';
import { WTGiftCardPurchaseRequest } from '../model/wTGiftCardPurchaseRequest';
import { WTGiftClaimRequest } from '../model/wTGiftClaimRequest';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum GiftCardsApiApiKeys {
    api_key = 0
}
export declare class GiftCardsApi {
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
    setApiKey(key: GiftCardsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    claimGift(giftID: string, wTGiftClaimRequest: WTGiftClaimRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    createCertificateDeal(wTCertificateDealCreateRequest: WTCertificateDealCreateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchCertificateDeal(dealID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchGift(giftID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    publishCertificateDeal(dealID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    purchaseCertificateFromDeal(dealID: string, wTCertificatePurchaseRequest: WTCertificatePurchaseRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    purchaseGiftCard(wTGiftCardPurchaseRequest: WTGiftCardPurchaseRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
