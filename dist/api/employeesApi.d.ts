/// <reference types="node" />
import http from 'http';
import { AdvertisementCreditBroadcast } from '../model/advertisementCreditBroadcast';
import { CreateFile200Response } from '../model/createFile200Response';
import { Document } from '../model/document';
import { DynamicVoucher } from '../model/dynamicVoucher';
import { DynamicVoucherBroadcast } from '../model/dynamicVoucherBroadcast';
import { Employee } from '../model/employee';
import { EmployeeActivityLog } from '../model/employeeActivityLog';
import { HelpDeskRequest } from '../model/helpDeskRequest';
import { MediaFile } from '../model/mediaFile';
import { Message } from '../model/message';
import { OptInListSource } from '../model/optInListSource';
import { OutboundSMS } from '../model/outboundSMS';
import { PresignedPost } from '../model/presignedPost';
import { StaticVoucherCampaignBroadcast } from '../model/staticVoucherCampaignBroadcast';
import { UpdateEmailNotificationPreferenceRequest } from '../model/updateEmailNotificationPreferenceRequest';
import { WTEmployeeCreate } from '../model/wTEmployeeCreate';
import { WTEmployeeCreateDocument } from '../model/wTEmployeeCreateDocument';
import { WTEmployeeCreateMediaFile } from '../model/wTEmployeeCreateMediaFile';
import { WTEmployeeFileCreate } from '../model/wTEmployeeFileCreate';
import { WTEmployeeImportRecords } from '../model/wTEmployeeImportRecords';
import { WTEmployeePeerRoles } from '../model/wTEmployeePeerRoles';
import { WTEmployeeS3FilePresign } from '../model/wTEmployeeS3FilePresign';
import { WTEmployeeScheduleSMSCampaignBroadcast } from '../model/wTEmployeeScheduleSMSCampaignBroadcast';
import { WTEmployeeScheduleSimpleSMS } from '../model/wTEmployeeScheduleSimpleSMS';
import { WTEmployeeScheduleSimpleSMSToRecipient } from '../model/wTEmployeeScheduleSimpleSMSToRecipient';
import { WTEmployeeSendHelpDeskResponse } from '../model/wTEmployeeSendHelpDeskResponse';
import { WTEmployeeUpdate } from '../model/wTEmployeeUpdate';
import { WTEmployeeUpdateRecords } from '../model/wTEmployeeUpdateRecords';
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
    createDocument(wTEmployeeCreateDocument: WTEmployeeCreateDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Document;
    }>;
    createEmployeePeer(wTEmployeeCreate: WTEmployeeCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employee;
    }>;
    createFile(wTEmployeeFileCreate: WTEmployeeFileCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFile200Response;
    }>;
    createMediaFile(wTEmployeeCreateMediaFile: WTEmployeeCreateMediaFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MediaFile;
    }>;
    deleteDocument(documentID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Document;
    }>;
    deleteMediaFile(mediaFileID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MediaFile;
    }>;
    downloadFile(fileID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
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
    failedImport(fileID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    fetchDocuments(folder?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Document>;
    }>;
    fetchDynamicVouchers(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<DynamicVoucher>;
    }>;
    fetchMediaFiles(folder?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<MediaFile>;
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
    fetchOptInListSource(sourceID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OptInListSource;
    }>;
    fetchOptInListSourcesCreatedByEmployee(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<OptInListSource>;
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
    presignFile(wTEmployeeS3FilePresign: WTEmployeeS3FilePresign, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PresignedPost;
    }>;
    removePeerFromAllRoles(userID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    scheduleAdvertisementCredit(advertisementCreditID: string, wTEmployeeScheduleSimpleSMS: WTEmployeeScheduleSimpleSMS, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AdvertisementCreditBroadcast;
    }>;
    scheduleDynamicVoucher(dynamicVoucherID: string, wTEmployeeScheduleSimpleSMS: WTEmployeeScheduleSimpleSMS, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DynamicVoucherBroadcast;
    }>;
    scheduleDynamicVoucherToRecipient(dynamicVoucherID: string, wTEmployeeScheduleSimpleSMSToRecipient: WTEmployeeScheduleSimpleSMSToRecipient, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DynamicVoucherBroadcast;
    }>;
    scheduleSimpleSMS(wTEmployeeScheduleSimpleSMS: WTEmployeeScheduleSimpleSMS, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    scheduleSimpleSMSToRecipient(wTEmployeeScheduleSimpleSMSToRecipient: WTEmployeeScheduleSimpleSMSToRecipient, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    sendHelpDeskResponse(wTEmployeeSendHelpDeskResponse: WTEmployeeSendHelpDeskResponse, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OutboundSMS;
    }>;
    sendSmsCampaignBroadcast(staticVoucherCampaignID: string, wTEmployeeScheduleSMSCampaignBroadcast: WTEmployeeScheduleSMSCampaignBroadcast, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StaticVoucherCampaignBroadcast;
    }>;
    setAlertsRead(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    setExportDataFilesRead(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    setHelpDeskRequestResolved(helpDeskRequestID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HelpDeskRequest;
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
    updateClubMembers(wTEmployeeUpdateRecords: WTEmployeeUpdateRecords, options?: {
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
