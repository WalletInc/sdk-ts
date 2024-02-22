/// <reference types="node" />
import http from 'http';
import { ApplicableTerminals } from '../model/applicableTerminals';
import { FetchAllLedgerTransactions200Response } from '../model/fetchAllLedgerTransactions200Response';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TransactionLedgerApiApiKeys {
    api_key = 0
}
export declare class TransactionLedgerApi {
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
    setApiKey(key: TransactionLedgerApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    fetchAllLedgerTransactions(startDateTime: Date, endDateTime: Date, pageNum: number, pageSize: number, registerType?: ApplicableTerminals, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchAllLedgerTransactions200Response;
    }>;
}
