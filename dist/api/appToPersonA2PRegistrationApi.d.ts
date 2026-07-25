/// <reference types="node" />
import http from 'http';
import { A2PApplicationSubmission } from '../model/a2PApplicationSubmission';
import { A2PGovernmentSubmission } from '../model/a2PGovernmentSubmission';
import { A2PNonProfitSubmission } from '../model/a2PNonProfitSubmission';
import { A2PPublicSubmission } from '../model/a2PPublicSubmission';
import { A2PSoleProprietorSubmission } from '../model/a2PSoleProprietorSubmission';
import { A2PStandardSubmission } from '../model/a2PStandardSubmission';
import { WTA2PApplicationUpdateParams } from '../model/wTA2PApplicationUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AppToPersonA2PRegistrationApiApiKeys {
    api_key = 0
}
export declare class AppToPersonA2PRegistrationApi {
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
    setApiKey(key: AppToPersonA2PRegistrationApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    beginA2PApplication(a2PApplicationSubmission: A2PApplicationSubmission, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    beginA2PApplicationGovernment(a2PGovernmentSubmission: A2PGovernmentSubmission, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    beginA2PApplicationNonProfit(a2PNonProfitSubmission: A2PNonProfitSubmission, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    beginA2PApplicationPublic(a2PPublicSubmission: A2PPublicSubmission, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    beginA2PApplicationSoleProprietor(a2PSoleProprietorSubmission: A2PSoleProprietorSubmission, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    beginA2PApplicationStandard(a2PStandardSubmission: A2PStandardSubmission, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    fetchA2PApplication(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchA2PRegistration(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    updateA2PApplication(applicationID: string, wTA2PApplicationUpdateParams: WTA2PApplicationUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
}
