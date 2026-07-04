/// <reference types="node" />
import http from 'http';
import { CreateFile200Response } from '../model/createFile200Response';
import { Document } from '../model/document';
import { MediaFile } from '../model/mediaFile';
import { PresignedPost } from '../model/presignedPost';
import { WTEmployeeCreateDocument } from '../model/wTEmployeeCreateDocument';
import { WTEmployeeCreateMediaFile } from '../model/wTEmployeeCreateMediaFile';
import { WTEmployeeFileCreate } from '../model/wTEmployeeFileCreate';
import { WTEmployeeS3FilePresign } from '../model/wTEmployeeS3FilePresign';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum FilesDocumentsApiApiKeys {
    api_key = 0
}
export declare class FilesDocumentsApi {
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
    setApiKey(key: FilesDocumentsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createDocument(wTEmployeeCreateDocument: WTEmployeeCreateDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Document;
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
    fetchMediaFiles(folder?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<MediaFile>;
    }>;
    presignFile(wTEmployeeS3FilePresign: WTEmployeeS3FilePresign, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PresignedPost;
    }>;
}
