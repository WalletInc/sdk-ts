/// <reference types="node" />
import http from 'http';
import { PhoneNumber } from '../model/phoneNumber';
import { Tcpa } from '../model/tcpa';
import { WTSMSAcquirePhoneNumber } from '../model/wTSMSAcquirePhoneNumber';
import { WTSMSUpdatePhoneNumberConfig } from '../model/wTSMSUpdatePhoneNumberConfig';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PhoneNumbersApiApiKeys {
    api_key = 0
}
export declare class PhoneNumbersApi {
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
    setApiKey(key: PhoneNumbersApiApiKeys, value: string): void;
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
    fetchBlockedTCPAEntries(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Tcpa>;
    }>;
    fetchMerchantPhoneNumbers(isArchiveIncluded?: boolean, isApproved?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchPhoneNumber(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PhoneNumber;
    }>;
    fetchSMSAgreement(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchTCPAFilter(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Tcpa>;
    }>;
    restorePhoneNumber(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PhoneNumber;
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
