/// <reference types="node" />
import http from 'http';
import { LinkBook } from '../model/linkBook';
import { WTQuickLink } from '../model/wTQuickLink';
import { WTQuickLinkCreateParams } from '../model/wTQuickLinkCreateParams';
import { WTQuickLinkUpdateParams } from '../model/wTQuickLinkUpdateParams';
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
    setApiKey(key: QuickLinksApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveLinkBook(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBook;
    }>;
    createLinkBook(wTQuickLinkCreateParams: WTQuickLinkCreateParams, options?: {
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
    fetchLinkBookById(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTQuickLink;
    }>;
    restoreLinkBook(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBook;
    }>;
    updateLinkBook(id: string, wTQuickLinkUpdateParams: WTQuickLinkUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBook;
    }>;
}
