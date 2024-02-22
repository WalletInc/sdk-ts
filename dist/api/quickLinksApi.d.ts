/// <reference types="node" />
import http from 'http';
import { LinkBook } from '../model/linkBook';
import { WTLinkBook } from '../model/wTLinkBook';
import { WTLinkBookCreateParams } from '../model/wTLinkBookCreateParams';
import { WTLinkBookUpdateParams } from '../model/wTLinkBookUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum QuickLinksApiApiKeys {
    api_key = 0
}
export declare class QuickLinksApi {
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
    setApiKey(key: QuickLinksApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveLinkBook(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBook;
    }>;
    createLinkBook(wTLinkBookCreateParams: WTLinkBookCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBook;
    }>;
    fetchAllLinkBook(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchLinkBookById(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTLinkBook;
    }>;
    restoreLinkBook(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBook;
    }>;
    updateLinkBook(id: any, wTLinkBookUpdateParams: WTLinkBookUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBook;
    }>;
}
