/// <reference types="node" />
import http from 'http';
import { AdvertisementCreditBroadcast } from '../model/advertisementCreditBroadcast';
import { Alert } from '../model/alert';
import { Document } from '../model/document';
import { DynamicVoucher } from '../model/dynamicVoucher';
import { DynamicVoucherBroadcast } from '../model/dynamicVoucherBroadcast';
import { Employee } from '../model/employee';
import { EmployeeActivityLog } from '../model/employeeActivityLog';
import { HelpDeskRequest } from '../model/helpDeskRequest';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { MediaFile } from '../model/mediaFile';
import { Message } from '../model/message';
import { OptInListSource } from '../model/optInListSource';
import { OutboundSMS } from '../model/outboundSMS';
import { PresignedPost } from '../model/presignedPost';
import { SimpleSMSBroadcast } from '../model/simpleSMSBroadcast';
import { StaticVoucherCampaign } from '../model/staticVoucherCampaign';
import { StaticVoucherCampaignBroadcast } from '../model/staticVoucherCampaignBroadcast';
import { StaticVoucherCampaignGroup } from '../model/staticVoucherCampaignGroup';
import { WTEmployeeCreate } from '../model/wTEmployeeCreate';
import { WTEmployeeCreateAlert } from '../model/wTEmployeeCreateAlert';
import { WTEmployeeCreateDocument } from '../model/wTEmployeeCreateDocument';
import { WTEmployeeCreateMediaFile } from '../model/wTEmployeeCreateMediaFile';
import { WTEmployeeCreateStaticVoucherCampaignGroup } from '../model/wTEmployeeCreateStaticVoucherCampaignGroup';
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
    addPeerToRoles(userID: any, wTEmployeePeerRoles: WTEmployeePeerRoles, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    createAlert(wTEmployeeCreateAlert: WTEmployeeCreateAlert, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Alert;
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
        body: InlineResponse2001;
    }>;
    createMediaFile(wTEmployeeCreateMediaFile: WTEmployeeCreateMediaFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MediaFile;
    }>;
    createStaticVoucherCampaignsGroup(wTEmployeeCreateStaticVoucherCampaignGroup: WTEmployeeCreateStaticVoucherCampaignGroup, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StaticVoucherCampaignGroup;
    }>;
    deleteDocument(documentID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Document;
    }>;
    deleteMediaFile(mediaFileID: any, options?: {
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
    exportStaticVoucherCampaign(campaignID: any, options?: {
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
    fetchEmployeeStaticVoucherCampaignGroups(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucherCampaignGroup>;
    }>;
    fetchEmployeeStaticVoucherCampaigns(isArchiveIncluded?: boolean, sourceID?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<StaticVoucherCampaign>;
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
    fetchOptInListSource(sourceID: any, options?: {
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
    fetchPeerActivity(employeeID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<EmployeeActivityLog>;
    }>;
    fetchPeersPermissions(userID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
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
    modifyPeersRoles(userID: any, wTEmployeePeerRoles: WTEmployeePeerRoles, options?: {
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
    removePeerFromAllRoles(userID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: boolean;
    }>;
    scheduleAdvertisementCredit(advertisementCreditID: any, wTEmployeeScheduleSimpleSMS: WTEmployeeScheduleSimpleSMS, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AdvertisementCreditBroadcast;
    }>;
    scheduleDynamicVoucher(dynamicVoucherID: any, wTEmployeeScheduleSimpleSMS: WTEmployeeScheduleSimpleSMS, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DynamicVoucherBroadcast;
    }>;
    scheduleDynamicVoucherToRecipient(dynamicVoucherID: any, wTEmployeeScheduleSimpleSMSToRecipient: WTEmployeeScheduleSimpleSMSToRecipient, options?: {
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
        body: SimpleSMSBroadcast;
    }>;
    scheduleSimpleSMSToRecipient(wTEmployeeScheduleSimpleSMSToRecipient: WTEmployeeScheduleSimpleSMSToRecipient, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SimpleSMSBroadcast;
    }>;
    sendHelpDeskResponse(wTEmployeeSendHelpDeskResponse: WTEmployeeSendHelpDeskResponse, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OutboundSMS;
    }>;
    sendSmsCampaignBroadcast(staticVoucherCampaignID: any, wTEmployeeScheduleSMSCampaignBroadcast: WTEmployeeScheduleSMSCampaignBroadcast, options?: {
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
    setHelpDeskRequestResolved(helpDeskRequestID: any, options?: {
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
    updateEmployeePeer(userID: string, wTEmployeeUpdate: WTEmployeeUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employee;
    }>;
}
