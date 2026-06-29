/// <reference types="node" />
import http from 'http';
import { Assistant } from '../model/assistant';
import { CreateRunOnThreadRequest } from '../model/createRunOnThreadRequest';
import { Message } from '../model/message';
import { OAIAssistantUpdateParams } from '../model/oAIAssistantUpdateParams';
import { OAIAssistantUpdateParamsCreateParams } from '../model/oAIAssistantUpdateParamsCreateParams';
import { Thread } from '../model/thread';
import { VectorStore } from '../model/vectorStore';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum OpenAIApiApiKeys {
    api_key = 0
}
export declare class OpenAIApi {
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
    setApiKey(key: OpenAIApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    archiveAssistant(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Assistant;
    }>;
    archiveThread(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Thread;
    }>;
    archiveVectorStore(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VectorStore;
    }>;
    createAssistant(oAIAssistantUpdateParamsCreateParams: OAIAssistantUpdateParamsCreateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Assistant;
    }>;
    createRunOnThread(id: string, createRunOnThreadRequest: CreateRunOnThreadRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createThread(requestBody: {
        [key: string]: any;
    }, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Thread;
    }>;
    createThreadMessage(id: string, createRunOnThreadRequest: CreateRunOnThreadRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createVectorStore(requestBody: {
        [key: string]: any;
    }, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VectorStore;
    }>;
    fetchAllAssistants(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAllThreads(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAllVectorStores(isArchiveIncluded?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAssistant(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Assistant;
    }>;
    fetchThreadMessages(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Message>;
    }>;
    restoreAssistant(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Assistant;
    }>;
    restoreThread(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Thread;
    }>;
    restoreVectorStore(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VectorStore;
    }>;
    updateAssistant(id: string, oAIAssistantUpdateParams: OAIAssistantUpdateParams, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Assistant;
    }>;
    updateThread(id: string, requestBody: {
        [key: string]: any;
    }, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Thread;
    }>;
    updateVectorStore(id: string, requestBody: {
        [key: string]: any;
    }, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VectorStore;
    }>;
}
