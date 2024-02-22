/// <reference types="node" />
import http from 'http';
import { FetchMembersCount200Response } from '../model/fetchMembersCount200Response';
import { MSMemberHistoryPagination } from '../model/mSMemberHistoryPagination';
import { MSMemberRedemptionPagination } from '../model/mSMemberRedemptionPagination';
import { MemberSearch } from '../model/memberSearch';
import { PaginatedWTMembers } from '../model/paginatedWTMembers';
import { PaginationRequestWithIDAndWithoutSortOptions } from '../model/paginationRequestWithIDAndWithoutSortOptions';
import { PaginationRequestWithSortOptions } from '../model/paginationRequestWithSortOptions';
import { PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumberOrEmailOrBirthday } from '../model/pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumberOrEmailOrBirthday';
import { WTMember } from '../model/wTMember';
import { WTMemberCreationParams } from '../model/wTMemberCreationParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ClubMembersPointsApiApiKeys {
    api_key = 0
}
export declare class ClubMembersPointsApi {
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
    setApiKey(key: ClubMembersPointsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveMember(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMember;
    }>;
    createMember(wTMemberCreationParams: WTMemberCreationParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMember;
    }>;
    fetchMemberById(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMember;
    }>;
    fetchMemberHistoryLog(paginationRequestWithIDAndWithoutSortOptions: PaginationRequestWithIDAndWithoutSortOptions, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MSMemberHistoryPagination;
    }>;
    fetchMemberRedemptionLog(paginationRequestWithIDAndWithoutSortOptions: PaginationRequestWithIDAndWithoutSortOptions, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MSMemberRedemptionPagination;
    }>;
    fetchMembersByPage(paginationRequestWithSortOptions: PaginationRequestWithSortOptions, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTMember>;
    }>;
    fetchMembersCount(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FetchMembersCount200Response;
    }>;
    restoreMember(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMember;
    }>;
    searchMembers(memberSearch: MemberSearch, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedWTMembers;
    }>;
    updateMember(id: any, pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumberOrEmailOrBirthday: PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumberOrEmailOrBirthday, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMember;
    }>;
}
