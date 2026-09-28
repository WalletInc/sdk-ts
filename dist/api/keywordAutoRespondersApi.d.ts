/// <reference types="node" />
import http from 'http';
import { WTAutoResponder } from '../model/wTAutoResponder';
import { WTAutoResponderCreateParams } from '../model/wTAutoResponderCreateParams';
import { WTAutoResponderHit } from '../model/wTAutoResponderHit';
import { WTAutoResponderUpdateParams } from '../model/wTAutoResponderUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum KeywordAutoRespondersApiApiKeys {
    api_key = 0
}
export declare class KeywordAutoRespondersApi {
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
    setApiKey(key: KeywordAutoRespondersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveAutoResponder(autoResponderID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAutoResponder;
    }>;
    createAutoResponder(wTAutoResponderCreateParams: WTAutoResponderCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAutoResponder;
    }>;
    fetchAllAutoResponders(phoneNumberID?: string, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTAutoResponder>;
    }>;
    fetchAutoResponderHits(autoResponderID?: string, limit?: number, offset?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTAutoResponderHit>;
    }>;
    restoreAutoResponder(autoResponderID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAutoResponder;
    }>;
    updateAutoResponder(wTAutoResponderUpdateParams: WTAutoResponderUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTAutoResponder;
    }>;
}
