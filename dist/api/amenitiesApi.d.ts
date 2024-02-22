/// <reference types="node" />
import http from 'http';
import { Amenity } from '../model/amenity';
import { WTAmenityCreateParams } from '../model/wTAmenityCreateParams';
import { WTAmenityUpdateParams } from '../model/wTAmenityUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AmenitiesApiApiKeys {
    api_key = 0
}
export declare class AmenitiesApi {
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
    setApiKey(key: AmenitiesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveAmenity(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Amenity;
    }>;
    createAmenity(wTAmenityCreateParams: WTAmenityCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Amenity;
    }>;
    fetchAllAmenities(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    restoreAmenity(id: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Amenity;
    }>;
    updateAmenity(id: any, wTAmenityUpdateParams: WTAmenityUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Amenity;
    }>;
}
