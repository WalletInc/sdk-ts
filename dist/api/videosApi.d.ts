/// <reference types="node" />
import http from 'http';
import { Video } from '../model/video';
import { WTVideoCreateParams } from '../model/wTVideoCreateParams';
import { WTVideoUpdateParams } from '../model/wTVideoUpdateParams';
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
        'default': Authentication;
        'api_key': ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: VideosApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveVideo(id: any, options?: {
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
    restoreVideo(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Video;
    }>;
    updateVideo(id: any, wTVideoUpdateParams: WTVideoUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Video;
    }>;
}
