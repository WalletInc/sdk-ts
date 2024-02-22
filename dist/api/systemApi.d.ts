/// <reference types="node" />
import http from 'http';
import { Employee } from '../model/employee';
import { Role } from '../model/role';
import { RoleAuditLog } from '../model/roleAuditLog';
import { WTRole } from '../model/wTRole';
import { WTSystemRoleCreate } from '../model/wTSystemRoleCreate';
import { Webpage } from '../model/webpage';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum SystemApiApiKeys {
    api_key = 0
}
export declare class SystemApi {
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
    setApiKey(key: SystemApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createRole(wTSystemRoleCreate: WTSystemRoleCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Role;
    }>;
    deleteRole(roleID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    fetchAuditLogOfRoles(startDateTime: Date, endDateTime: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<RoleAuditLog>;
    }>;
    fetchEmployeesWithRole(roleID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Employee>;
    }>;
    fetchWebpagesForRole(roleID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Webpage>;
    }>;
    getPaymentPrefixes(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    loadRole(roleID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTRole;
    }>;
    saveRole(roleID: string, wTSystemRoleCreate: WTSystemRoleCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Role;
    }>;
}
