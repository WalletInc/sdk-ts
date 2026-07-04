/// <reference types="node" />
import http from 'http';
import { FetchInboundSMSByPage200Response } from '../model/fetchInboundSMSByPage200Response';
import { FetchOutboundSMSByPage200Response } from '../model/fetchOutboundSMSByPage200Response';
import { InboundSMS } from '../model/inboundSMS';
import { OutboundSMS } from '../model/outboundSMS';
import { SSOutboundStatuses } from '../model/sSOutboundStatuses';
import { WTCountResult } from '../model/wTCountResult';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum SMSMessagesApiApiKeys {
    api_key = 0
}
export declare class SMSMessagesApi {
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
    setApiKey(key: SMSMessagesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    countInboundSMS(phoneNumberID: string, fromPhoneNumber?: string, body?: string, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countOutboundSMS(phoneNumberID: string, toPhoneNumber?: string, status?: string, paymentObjectBroadcastID?: string, startDate?: Date, endDate?: Date, options?: {
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
    fetchInboundSMS(phoneNumberID: string, fromPhoneNumber?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<InboundSMS>;
    }>;
    fetchInboundSMSByPage(phoneNumberID: string, fromPhoneNumber?: string, pageSize?: number, pageNum?: number, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchInboundSMSByPage200Response;
    }>;
    fetchMerchantOutboundSMS(phoneNumberID: string, toPhoneNumber: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OutboundSMS>;
    }>;
    fetchOutboundSMS(phoneNumberID: string, toPhoneNumber?: string, status?: string, paymentObjectBroadcastID?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OutboundSMS>;
    }>;
    fetchOutboundSMSByPage(phoneNumberID: string, toPhoneNumber?: string, paymentObjectBroadcastID?: string, pageSize?: number, pageNum?: number, status?: SSOutboundStatuses, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchOutboundSMSByPage200Response;
    }>;
    retrieveSentAndMaxCountOfMessages(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
