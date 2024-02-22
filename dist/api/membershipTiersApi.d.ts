/// <reference types="node" />
import http from 'http';
import { MSMembershipTierHistoryPagination } from '../model/mSMembershipTierHistoryPagination';
import { MSMembershipTierRedemptionPagination } from '../model/mSMembershipTierRedemptionPagination';
import { PaginationRequestWithIDAndWithoutSortOptions } from '../model/paginationRequestWithIDAndWithoutSortOptions';
import { WTMembershipTier } from '../model/wTMembershipTier';
import { WTMembershipTierCreationParams } from '../model/wTMembershipTierCreationParams';
import { WTMembershipTierUpdateParams } from '../model/wTMembershipTierUpdateParams';
import { WTMembershipTierWithMemberCount } from '../model/wTMembershipTierWithMemberCount';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum MembershipTiersApiApiKeys {
    api_key = 0
}
export declare class MembershipTiersApi {
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
    setApiKey(key: MembershipTiersApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveMembershipTier(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMembershipTier;
    }>;
    createMembershipTier(wTMembershipTierCreationParams: WTMembershipTierCreationParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMembershipTier;
    }>;
    fetchAllMembershipTiers(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTMembershipTier>;
    }>;
    fetchAllMembershipTiersWithMemberCount(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTMembershipTierWithMemberCount>;
    }>;
    fetchMembershipTierById(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMembershipTier;
    }>;
    fetchMembershipTierHistoryLog(paginationRequestWithIDAndWithoutSortOptions: PaginationRequestWithIDAndWithoutSortOptions, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MSMembershipTierHistoryPagination;
    }>;
    fetchMembershipTierRedemptionLog(paginationRequestWithIDAndWithoutSortOptions: PaginationRequestWithIDAndWithoutSortOptions, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MSMembershipTierRedemptionPagination;
    }>;
    restoreMembershipTier(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMembershipTier;
    }>;
    updateMembershipTier(id: any, wTMembershipTierUpdateParams: WTMembershipTierUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMembershipTier;
    }>;
}
