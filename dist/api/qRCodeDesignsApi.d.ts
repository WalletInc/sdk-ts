/// <reference types="node" />
import http from 'http';
import { QRCodeDesign } from '../model/qRCodeDesign';
import { WTQRCodeDesign } from '../model/wTQRCodeDesign';
import { WTQRCodeDesignCreateParams } from '../model/wTQRCodeDesignCreateParams';
import { WTQRCodeDesignUpdateParams } from '../model/wTQRCodeDesignUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum QRCodeDesignsApiApiKeys {
    api_key = 0
}
export declare class QRCodeDesignsApi {
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
    setApiKey(key: QRCodeDesignsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveQRCodeDesign(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTQRCodeDesign;
    }>;
    createQRCodeDesign(wTQRCodeDesignCreateParams: WTQRCodeDesignCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTQRCodeDesign;
    }>;
    fetchAllQRCodeDesigns(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTQRCodeDesign>;
    }>;
    fetchQRCodeDesignById(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTQRCodeDesign;
    }>;
    restoreQRCodeDesign(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: QRCodeDesign;
    }>;
    updateQRCodeDesign(id: any, wTQRCodeDesignUpdateParams: WTQRCodeDesignUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTQRCodeDesign;
    }>;
}
