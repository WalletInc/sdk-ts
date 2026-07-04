/// <reference types="node" />
import http from 'http';
import { FetchImportedListRecipientsByPage200Response } from '../model/fetchImportedListRecipientsByPage200Response';
import { ImportedList } from '../model/importedList';
import { ImportedListRecipient } from '../model/importedListRecipient';
import { SSImportedListRecipientCreateParams } from '../model/sSImportedListRecipientCreateParams';
import { WTCountResult } from '../model/wTCountResult';
import { WTEmployeeImportRecords } from '../model/wTEmployeeImportRecords';
import { WTImportedListRecipientFromMembershipTierImport } from '../model/wTImportedListRecipientFromMembershipTierImport';
import { WTSMSImportedListCreate } from '../model/wTSMSImportedListCreate';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ImportedListsApiApiKeys {
    api_key = 0
}
export declare class ImportedListsApi {
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
    setApiKey(key: ImportedListsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveRecipient(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedListRecipient;
    }>;
    countImportedListRecipients(listID: string, isArchiveIncluded?: boolean, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    createImportedList(wTSMSImportedListCreate: WTSMSImportedListCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedList;
    }>;
    createRecipientInImportedList(sSImportedListRecipientCreateParams: SSImportedListRecipientCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedListRecipient;
    }>;
    exportImportedListRecipients(importedListID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    fetchImportedList(listID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedList;
    }>;
    fetchImportedListRecipients(listID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ImportedListRecipient>;
    }>;
    fetchImportedListRecipientsByPage(listID: string, pageSize?: number, pageNum?: number, isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchImportedListRecipientsByPage200Response;
    }>;
    fetchImportedLists(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    importImportedListRecipients(importedListID: string, wTEmployeeImportRecords: WTEmployeeImportRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    importImportedListRecipientsFromMembershipTier(wTImportedListRecipientFromMembershipTierImport: WTImportedListRecipientFromMembershipTierImport, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    restoreRecipient(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedListRecipient;
    }>;
    saveImportedList(listID: string, wTSMSImportedListCreate: WTSMSImportedListCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportedList;
    }>;
}
