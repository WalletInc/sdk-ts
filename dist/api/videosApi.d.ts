/// <reference types="node" />
import http from 'http';
import { Video } from '../model/video';
import { WTVideoCreateParams } from '../model/wTVideoCreateParams';
import { WTVideoUpdateParams } from '../model/wTVideoUpdateParams';
import { WTVideoUploadProvision } from '../model/wTVideoUploadProvision';
import { WTVideoUploadProvisionParams } from '../model/wTVideoUploadProvisionParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum VideosApiApiKeys {
    api_key = 0
}
export declare class VideosApi {
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
    setApiKey(key: VideosApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveVideo(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Video;
    }>;
    createVideo(wTVideoCreateParams: WTVideoCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Video;
    }>;
    fetchAllVideo(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    provisionVideoUpload(wTVideoUploadProvisionParams: WTVideoUploadProvisionParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTVideoUploadProvision;
    }>;
    restoreVideo(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Video;
    }>;
    updateVideo(id: string, wTVideoUpdateParams: WTVideoUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Video;
    }>;
}
