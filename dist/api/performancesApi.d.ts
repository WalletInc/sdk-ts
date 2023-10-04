/// <reference types="node" />
import http from 'http';
import { InlineObject1 } from '../model/inlineObject1';
import { InlineObject2 } from '../model/inlineObject2';
import { InlineResponse2003 } from '../model/inlineResponse2003';
import { InlineResponse2004 } from '../model/inlineResponse2004';
import { Performance } from '../model/performance';
import { Ticket } from '../model/ticket';
import { WTPerformanceCreateParams } from '../model/wTPerformanceCreateParams';
import { WTPerformanceUpdateParams } from '../model/wTPerformanceUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PerformancesApiApiKeys {
    api_key = 0
}
export declare class PerformancesApi {
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
    setApiKey(key: PerformancesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archivePerformance(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    countClaimedComps(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2003;
    }>;
    countRedeemedComps(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2003;
    }>;
    createPerformance(wTPerformanceCreateParams: WTPerformanceCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    fetchAllPerformanceTickets(id: any, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Ticket>;
    }>;
    fetchAllPerformances(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchPerformance(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    fetchPerformanceTicketsPage(performanceID: any, pageNum: number, pageSize: number, filterComps?: boolean, filterClaimed?: boolean, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse2004;
    }>;
    importTickets(id: any, inlineObject2: InlineObject2, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    restorePerformance(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    saveTicketSettings(id: any, inlineObject1: InlineObject1, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    updatePerformance(id: any, wTPerformanceUpdateParams: WTPerformanceUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
}
