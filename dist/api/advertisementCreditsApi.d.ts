/// <reference types="node" />
import http from 'http';
import { WTAdvertisementCredit } from '../model/wTAdvertisementCredit';
import { WTAdvertisementCreditCreateParams } from '../model/wTAdvertisementCreditCreateParams';
import { WTAdvertisementCreditScan } from '../model/wTAdvertisementCreditScan';
import { WTAdvertisementCreditUpdateParams } from '../model/wTAdvertisementCreditUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AdvertisementCreditsApiApiKeys {
    api_key = 0
}
export declare class AdvertisementCreditsApi {
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
    setApiKey(key: AdvertisementCreditsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveAdvertisementCredit(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAdvertisementCredit;
    }>;
    createAdvertisementCredit(wTAdvertisementCreditCreateParams: WTAdvertisementCreditCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAdvertisementCredit;
    }>;
    fetchAdvertisementCreditById(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAdvertisementCredit;
    }>;
    fetchAdvertisementCreditScans(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTAdvertisementCreditScan>;
    }>;
    fetchAllAdvertisementCredits(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTAdvertisementCredit>;
    }>;
    restoreAdvertisementCredit(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAdvertisementCredit;
    }>;
    updateAdvertisementCredit(id: any, wTAdvertisementCreditUpdateParams: WTAdvertisementCreditUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAdvertisementCredit;
    }>;
}
