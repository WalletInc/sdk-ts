/// <reference types="node" />
import http from 'http';
import { EmailSubscriber } from '../model/emailSubscriber';
import { WTEmailSubscriberCreateParams } from '../model/wTEmailSubscriberCreateParams';
import { WTEmailSubscriberUpdateParams } from '../model/wTEmailSubscriberUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EmailSubscriberApiApiKeys {
    api_key = 0
}
export declare class EmailSubscriberApi {
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
    setApiKey(key: EmailSubscriberApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveEmailSubscriber(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmailSubscriber;
    }>;
    createEmailSubscriber(wTEmailSubscriberCreateParams: WTEmailSubscriberCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmailSubscriber;
    }>;
    fetchAllEmailSubscribers(startDateTime?: Date, endDateTime?: Date, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreEmailSubscriber(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmailSubscriber;
    }>;
    updateEmailSubscriber(id: any, wTEmailSubscriberUpdateParams: WTEmailSubscriberUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmailSubscriber;
    }>;
}
