/// <reference types="node" />
import http from 'http';
import { LinkBookSection } from '../model/linkBookSection';
import { WTLinkBookSectionCreateParams } from '../model/wTLinkBookSectionCreateParams';
import { WTLinkBookSectionUpdateParams } from '../model/wTLinkBookSectionUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum LinkBookSectionApiApiKeys {
    api_key = 0
}
export declare class LinkBookSectionApi {
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
    setApiKey(key: LinkBookSectionApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveLinkBookSection(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBookSection;
    }>;
    createLinkBookSection(wTLinkBookSectionCreateParams: WTLinkBookSectionCreateParams, options?: {
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
    restoreLinkBookSection(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBookSection;
    }>;
    updateLinkBookSection(id: any, wTLinkBookSectionUpdateParams: WTLinkBookSectionUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkBookSection;
    }>;
}
