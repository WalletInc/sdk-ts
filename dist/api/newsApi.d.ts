/// <reference types="node" />
import http from 'http';
import { NewsArticle } from '../model/newsArticle';
import { WTNewsArticleCreateParams } from '../model/wTNewsArticleCreateParams';
import { WTNewsArticleUpdateParams } from '../model/wTNewsArticleUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum NewsApiApiKeys {
    api_key = 0
}
export declare class NewsApi {
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
    setApiKey(key: NewsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveNewsArticle(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NewsArticle;
    }>;
    createNewsArticle(wTNewsArticleCreateParams: WTNewsArticleCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NewsArticle;
    }>;
    fetchAllNewsArticles(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreNewsArticle(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NewsArticle;
    }>;
    updateNewsArticle(id: any, wTNewsArticleUpdateParams: WTNewsArticleUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NewsArticle;
    }>;
}
