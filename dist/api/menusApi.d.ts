/// <reference types="node" />
import http from 'http';
import { WTMenu } from '../model/wTMenu';
import { WTMenuCreateParams } from '../model/wTMenuCreateParams';
import { WTMenuItem } from '../model/wTMenuItem';
import { WTMenuItemCreateParams } from '../model/wTMenuItemCreateParams';
import { WTMenuItemUpdateParams } from '../model/wTMenuItemUpdateParams';
import { WTMenuOptionGroup } from '../model/wTMenuOptionGroup';
import { WTMenuOptionGroupCreateParams } from '../model/wTMenuOptionGroupCreateParams';
import { WTMenuOptionGroupUpdateParams } from '../model/wTMenuOptionGroupUpdateParams';
import { WTMenuUpdateParams } from '../model/wTMenuUpdateParams';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum MenusApiApiKeys {
    api_key = 0
}
export declare class MenusApi {
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
    setApiKey(key: MenusApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveMenu(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenu;
    }>;
    archiveMenuItem(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuItem;
    }>;
    archiveMenuOptionGroup(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuOptionGroup;
    }>;
    createMenu(wTMenuCreateParams: WTMenuCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenu;
    }>;
    createMenuItem(wTMenuItemCreateParams: WTMenuItemCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuItem;
    }>;
    createMenuOptionGroup(wTMenuOptionGroupCreateParams: WTMenuOptionGroupCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuOptionGroup;
    }>;
    fetchMenu(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenu;
    }>;
    fetchMenuItem(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuItem;
    }>;
    fetchMenuItems(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTMenuItem>;
    }>;
    fetchMenuOptionGroup(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuOptionGroup;
    }>;
    fetchMenuOptionGroups(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTMenuOptionGroup>;
    }>;
    fetchMenus(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTMenu>;
    }>;
    restoreMenu(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenu;
    }>;
    restoreMenuItem(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuItem;
    }>;
    restoreMenuOptionGroup(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuOptionGroup;
    }>;
    updateMenu(id: string, wTMenuUpdateParams: WTMenuUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenu;
    }>;
    updateMenuItem(id: string, wTMenuItemUpdateParams: WTMenuItemUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuItem;
    }>;
    updateMenuOptionGroup(id: string, wTMenuOptionGroupUpdateParams: WTMenuOptionGroupUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTMenuOptionGroup;
    }>;
}
