/// <reference types="node" />
import http from 'http';
import { RoomRate } from '../model/roomRate';
import { WTRoomRateCreateParams } from '../model/wTRoomRateCreateParams';
import { WTRoomRateUpdateParams } from '../model/wTRoomRateUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum RoomRatesApiApiKeys {
    api_key = 0
}
export declare class RoomRatesApi {
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
    setApiKey(key: RoomRatesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveRoomRate(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RoomRate;
    }>;
    createRoomRate(wTRoomRateCreateParams: WTRoomRateCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RoomRate;
    }>;
    fetchAllRoomRates(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreRoomRate(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RoomRate;
    }>;
    updateRoomRate(id: any, wTRoomRateUpdateParams: WTRoomRateUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RoomRate;
    }>;
}
