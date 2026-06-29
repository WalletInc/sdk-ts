/// <reference types="node" />
import http from 'http';
import { WTAdvertisementCredit } from '../model/wTAdvertisementCredit';
import { WTAdvertisementCreditCreateParams } from '../model/wTAdvertisementCreditCreateParams';
import { WTAdvertisementCreditScan } from '../model/wTAdvertisementCreditScan';
import { WTAdvertisementCreditUpdateParams } from '../model/wTAdvertisementCreditUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PrizesApiApiKeys {
    api_key = 0
}
export declare class PrizesApi {
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
    setApiKey(key: PrizesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveAdvertisementCredit(id: string, options?: {
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
    fetchAdvertisementCreditById(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAdvertisementCredit;
    }>;
    fetchAdvertisementCreditScans(id: string, options?: {
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
    restoreAdvertisementCredit(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAdvertisementCredit;
    }>;
    updateAdvertisementCredit(id: string, wTAdvertisementCreditUpdateParams: WTAdvertisementCreditUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAdvertisementCredit;
    }>;
}
