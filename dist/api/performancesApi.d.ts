/// <reference types="node" />
import http from 'http';
import { CountClaimedComps200Response } from '../model/countClaimedComps200Response';
import { FetchPerformanceTicketsPage200Response } from '../model/fetchPerformanceTicketsPage200Response';
import { ImportTicketsRequest } from '../model/importTicketsRequest';
import { Performance } from '../model/performance';
import { SaveTicketSettingsRequest } from '../model/saveTicketSettingsRequest';
import { SortDirection } from '../model/sortDirection';
import { Ticket } from '../model/ticket';
import { TicketSortKeys } from '../model/ticketSortKeys';
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
    archivePerformance(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    countClaimedComps(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CountClaimedComps200Response;
    }>;
    countRedeemedComps(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CountClaimedComps200Response;
    }>;
    createPerformance(wTPerformanceCreateParams: WTPerformanceCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    exportTickets(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Ticket>;
    }>;
    fetchAllPerformanceTickets(id: string, isArchiveIncluded?: boolean, options?: {
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
    fetchPerformance(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    fetchPerformanceTicketsPage(performanceID: string, pageNum: number, pageSize: number, filterComps?: boolean, filterClaimed?: boolean, sortBy?: TicketSortKeys, sortDirection?: SortDirection, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchPerformanceTicketsPage200Response;
    }>;
    importTickets(id: string, importTicketsRequest: ImportTicketsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    restorePerformance(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    saveTicketSettings(id: string, saveTicketSettingsRequest: SaveTicketSettingsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
    updatePerformance(id: string, wTPerformanceUpdateParams: WTPerformanceUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Performance;
    }>;
}
