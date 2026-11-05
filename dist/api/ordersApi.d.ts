/// <reference types="node" />
import http from 'http';
import { WTOrder } from '../model/wTOrder';
import { WTOrderingSettings } from '../model/wTOrderingSettings';
import { WTOrderingSettingsUpdateParams } from '../model/wTOrderingSettingsUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum OrdersApiApiKeys {
    api_key = 0
}
export declare class OrdersApi {
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
    setApiKey(key: OrdersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchOrder(orderId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTOrder;
    }>;
    fetchOrderingSettings(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTOrderingSettings;
    }>;
    listOrders(venueID?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTOrder>;
    }>;
    redactOrderDonorNote(orderId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTOrder;
    }>;
    updateOrderingSettings(wTOrderingSettingsUpdateParams: WTOrderingSettingsUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTOrderingSettings;
    }>;
}
