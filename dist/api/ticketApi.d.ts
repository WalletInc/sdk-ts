/// <reference types="node" />
import http from 'http';
import { Ticket } from '../model/ticket';
import { WTTicket } from '../model/wTTicket';
import { WTTicketCreateParams } from '../model/wTTicketCreateParams';
import { WTTicketUpdateParams } from '../model/wTTicketUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TicketApiApiKeys {
    api_key = 0
}
export declare class TicketApi {
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
    setApiKey(key: TicketApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveTicket(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Ticket;
    }>;
    createTicket(wTTicketCreateParams: WTTicketCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Ticket;
    }>;
    fetchTicket(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTTicket;
    }>;
    restoreTicket(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Ticket;
    }>;
    updateTicket(id: any, wTTicketUpdateParams: WTTicketUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Ticket;
    }>;
}
