/// <reference types="node" />
import http from 'http';
import { WTPosMachine } from '../model/wTPosMachine';
import { WTPosMachineCreateParams } from '../model/wTPosMachineCreateParams';
import { WTPosMachineUpdateParams } from '../model/wTPosMachineUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum IntegratedTerminalsApiApiKeys {
    api_key = 0
}
export declare class IntegratedTerminalsApi {
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
    setApiKey(key: IntegratedTerminalsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archivePOSMachine(id: any, options?: {
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
    restorePOSMachine(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPosMachine;
    }>;
    updatePOSMachine(id: any, wTPosMachineUpdateParams: WTPosMachineUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTPosMachine;
    }>;
}
