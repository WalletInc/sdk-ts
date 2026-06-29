/// <reference types="node" />
import http from 'http';
import { WTPosMachine } from '../model/wTPosMachine';
import { WTPosMachineCreateParams } from '../model/wTPosMachineCreateParams';
import { WTPosMachineUpdateParams } from '../model/wTPosMachineUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PointOfSaleConfigurationApiApiKeys {
    api_key = 0
}
export declare class PointOfSaleConfigurationApi {
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
    setApiKey(key: PointOfSaleConfigurationApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archivePOSMachine(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPosMachine;
    }>;
    createPOSMachine(wTPosMachineCreateParams: WTPosMachineCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPosMachine;
    }>;
    fetchAllPOSMachines(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    restorePOSMachine(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPosMachine;
    }>;
    updatePOSMachine(id: string, wTPosMachineUpdateParams: WTPosMachineUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPosMachine;
    }>;
}
