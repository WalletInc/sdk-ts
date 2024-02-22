/// <reference types="node" />
import http from 'http';
import { PromoCode } from '../model/promoCode';
import { WTPromoCodeCreateParams } from '../model/wTPromoCodeCreateParams';
import { WTPromoCodeUpdateParams } from '../model/wTPromoCodeUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PromotionCodesApiApiKeys {
    api_key = 0
}
export declare class PromotionCodesApi {
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
    setApiKey(key: PromotionCodesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archivePromoCode(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PromoCode;
    }>;
    createPromoCode(wTPromoCodeCreateParams: WTPromoCodeCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PromoCode;
    }>;
    fetchAllPromoCodes(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restorePromoCode(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PromoCode;
    }>;
    updatePromoCode(id: any, wTPromoCodeUpdateParams: WTPromoCodeUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PromoCode;
    }>;
}
