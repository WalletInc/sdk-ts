/// <reference types="node" />
import http from 'http';
import { WTEmployeeImportRecords } from '../model/wTEmployeeImportRecords';
import { WTEmployeeUpdateRecords } from '../model/wTEmployeeUpdateRecords';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ImportExportApiApiKeys {
    api_key = 0
}
export declare class ImportExportApi {
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
    setApiKey(key: ImportExportApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    exportClubMembers(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    exportMerchantCredits(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    exportStaticVoucherCampaign(campaignID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    importClubMembers(wTEmployeeImportRecords: WTEmployeeImportRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    importMerchantCredits(wTEmployeeImportRecords: WTEmployeeImportRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    setExportDataFilesRead(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    updateClubMembers(wTEmployeeUpdateRecords: WTEmployeeUpdateRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
}
