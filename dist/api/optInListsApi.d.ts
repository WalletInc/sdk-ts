/// <reference types="node" />
import http from 'http';
import { FetchOptInListSubscribersByPage200Response } from '../model/fetchOptInListSubscribersByPage200Response';
import { OptInList } from '../model/optInList';
import { OptInListSource } from '../model/optInListSource';
import { OptInListSubscriber } from '../model/optInListSubscriber';
import { WTCountResult } from '../model/wTCountResult';
import { WTOptInListCreationParams } from '../model/wTOptInListCreationParams';
import { WTSMSImportOptInListSubscribers } from '../model/wTSMSImportOptInListSubscribers';
import { WTSMSOptInListSourceCreate } from '../model/wTSMSOptInListSourceCreate';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum OptInListsApiApiKeys {
    api_key = 0
}
export declare class OptInListsApi {
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
    setApiKey(key: OptInListsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    countOptInListSubscribers(listID: string, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countOptInSourceSubscribers(sourceID: string, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    createOptInList(wTOptInListCreationParams: WTOptInListCreationParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInList;
    }>;
    createOptInListSource(wTSMSOptInListSourceCreate: WTSMSOptInListSourceCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInListSource;
    }>;
    exportOptInListSubscribers(listID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    fetchOptInList(listID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInList;
    }>;
    fetchOptInListSource(sourceID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInListSource;
    }>;
    fetchOptInListSources(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchOptInListSourcesCreatedByEmployee(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInListSource>;
    }>;
    fetchOptInListSubscribers(listID: string, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInListSubscriber>;
    }>;
    fetchOptInListSubscribersByPage(listID: string, pageSize?: number, pageNum?: number, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchOptInListSubscribersByPage200Response;
    }>;
    fetchOptInLists(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchOptInListsAssociatedWithPhoneNumber(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInList>;
    }>;
    fetchOptInSourceSubscribers(sourceID: string, isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInListSubscriber>;
    }>;
    fetchOptInSourcesAssociatedWithPhoneNumber(phoneNumberID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInListSource>;
    }>;
    importOptInListSubscribers(listID: string, wTSMSImportOptInListSubscribers: WTSMSImportOptInListSubscribers, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    saveOptInList(listID: string, wTOptInListCreationParams: WTOptInListCreationParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInList;
    }>;
    saveOptInListSource(sourceID: string, wTSMSOptInListSourceCreate: WTSMSOptInListSourceCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInListSource;
    }>;
}
