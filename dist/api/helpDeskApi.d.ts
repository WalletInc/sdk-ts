/// <reference types="node" />
import http from 'http';
import { HelpDeskRequest } from '../model/helpDeskRequest';
import { OutboundSMS } from '../model/outboundSMS';
import { WTEmployeeSendHelpDeskResponse } from '../model/wTEmployeeSendHelpDeskResponse';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum HelpDeskApiApiKeys {
    api_key = 0
}
export declare class HelpDeskApi {
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
    setApiKey(key: HelpDeskApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchHelpDeskRequests(phoneNumberID: string, isResolved?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<HelpDeskRequest>;
    }>;
    sendHelpDeskResponse(wTEmployeeSendHelpDeskResponse: WTEmployeeSendHelpDeskResponse, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OutboundSMS;
    }>;
    setHelpDeskRequestResolved(helpDeskRequestID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HelpDeskRequest;
    }>;
}
