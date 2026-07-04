/// <reference types="node" />
import http from 'http';
import { Employee } from '../model/employee';
import { EmployeeActivityLog } from '../model/employeeActivityLog';
import { Message } from '../model/message';
import { UpdateEmailNotificationPreferenceRequest } from '../model/updateEmailNotificationPreferenceRequest';
import { WTEmployeeCreate } from '../model/wTEmployeeCreate';
import { WTEmployeeCreateMediaFile } from '../model/wTEmployeeCreateMediaFile';
import { WTEmployeePeerRoles } from '../model/wTEmployeePeerRoles';
import { WTEmployeeUpdate } from '../model/wTEmployeeUpdate';
import { Webpage } from '../model/webpage';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EmployeesApiApiKeys {
    api_key = 0
}
export declare class EmployeesApi {
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
    setApiKey(key: EmployeesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    addPeerToRoles(userID: string, wTEmployeePeerRoles: WTEmployeePeerRoles, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    createEmployeePeer(wTEmployeeCreate: WTEmployeeCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employee;
    }>;
    fetchMerchant(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchMessages(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Message>;
    }>;
    fetchPeerActivity(employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<EmployeeActivityLog>;
    }>;
    fetchPeersPermissions(userID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchProfileInfo(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employee;
    }>;
    loadWebpagesOfEmployee(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Webpage>;
    }>;
    modifyPeersRoles(userID: string, wTEmployeePeerRoles: WTEmployeePeerRoles, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    removePeerFromAllRoles(userID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    setAlertsRead(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    setMessagesRead(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    setProfilePicture(wTEmployeeCreateMediaFile: WTEmployeeCreateMediaFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    updateEmailNotificationPreference(updateEmailNotificationPreferenceRequest: UpdateEmailNotificationPreferenceRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employee;
    }>;
    updateEmployeePeer(userID: string, wTEmployeeUpdate: WTEmployeeUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employee;
    }>;
}
