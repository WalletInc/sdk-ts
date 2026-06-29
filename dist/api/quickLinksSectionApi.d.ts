/// <reference types="node" />
import http from 'http';
import { LinkBookSection } from '../model/linkBookSection';
import { WTQuickLinkSectionCreateParams } from '../model/wTQuickLinkSectionCreateParams';
import { WTQuickLinkSectionUpdateParams } from '../model/wTQuickLinkSectionUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum QuickLinksSectionApiApiKeys {
    api_key = 0
}
export declare class QuickLinksSectionApi {
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
    setApiKey(key: QuickLinksSectionApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveLinkBookSection(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBookSection;
    }>;
    createLinkBookSection(wTQuickLinkSectionCreateParams: WTQuickLinkSectionCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBookSection;
    }>;
    fetchAllLinkBookSections(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreLinkBookSection(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBookSection;
    }>;
    updateLinkBookSection(id: string, wTQuickLinkSectionUpdateParams: WTQuickLinkSectionUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBookSection;
    }>;
}
