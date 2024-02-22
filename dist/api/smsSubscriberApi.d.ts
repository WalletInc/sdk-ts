/// <reference types="node" />
import http from 'http';
import { SmsSubscriber } from '../model/smsSubscriber';
import { WTSmsSubscriberCreateParams } from '../model/wTSmsSubscriberCreateParams';
import { WTSmsSubscriberUpdateParams } from '../model/wTSmsSubscriberUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum SmsSubscriberApiApiKeys {
    api_key = 0
}
export declare class SmsSubscriberApi {
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
    setApiKey(key: SmsSubscriberApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveSmsSubscriber(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SmsSubscriber;
    }>;
    createSmsSubscriber(wTSmsSubscriberCreateParams: WTSmsSubscriberCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SmsSubscriber;
    }>;
    fetchAllSmsSubscribers(startDateTime?: Date, endDateTime?: Date, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreSmsSubscriber(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SmsSubscriber;
    }>;
    updateSmsSubscriber(id: any, wTSmsSubscriberUpdateParams: WTSmsSubscriberUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SmsSubscriber;
    }>;
}
