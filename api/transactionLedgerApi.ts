/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.523
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ApplicableTerminals } from '../model/applicableTerminals';
import { AuthError } from '../model/authError';
import { FalsumError } from '../model/falsumError';
import { InlineResponse2005 } from '../model/inlineResponse2005';
import { InternalServerError } from '../model/internalServerError';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.wall.et';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TransactionLedgerApiApiKeys {
    api_key,
}

export class TransactionLedgerApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'api_key': new ApiKeyAuth('header', 'access-token'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: TransactionLedgerApiApiKeys, value: string) {
        (this.authentications as any)[TransactionLedgerApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Fetch ledger transactions by page
     * @param startDateTime 
     * @param endDateTime 
     * @param pageNum 
     * @param pageSize 
     * @param registerType 
     */
    public async fetchAllLedgerTransactions (startDateTime: Date, endDateTime: Date, pageNum: number, pageSize: number, registerType?: ApplicableTerminals, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InlineResponse2005;  }> {
        const localVarPath = this.basePath + '/v2/pos/ledger/transactions/all';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'startDateTime' is not null or undefined
        if (startDateTime === null || startDateTime === undefined) {
            throw new Error('Required parameter startDateTime was null or undefined when calling fetchAllLedgerTransactions.');
        }

        // verify required parameter 'endDateTime' is not null or undefined
        if (endDateTime === null || endDateTime === undefined) {
            throw new Error('Required parameter endDateTime was null or undefined when calling fetchAllLedgerTransactions.');
        }

        // verify required parameter 'pageNum' is not null or undefined
        if (pageNum === null || pageNum === undefined) {
            throw new Error('Required parameter pageNum was null or undefined when calling fetchAllLedgerTransactions.');
        }

        // verify required parameter 'pageSize' is not null or undefined
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling fetchAllLedgerTransactions.');
        }

        if (startDateTime !== undefined) {
            localVarQueryParameters['startDateTime'] = ObjectSerializer.serialize(startDateTime, "Date");
        }

        if (endDateTime !== undefined) {
            localVarQueryParameters['endDateTime'] = ObjectSerializer.serialize(endDateTime, "Date");
        }

        if (pageNum !== undefined) {
            localVarQueryParameters['pageNum'] = ObjectSerializer.serialize(pageNum, "number");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (registerType !== undefined) {
            localVarQueryParameters['registerType'] = ObjectSerializer.serialize(registerType, "ApplicableTerminals");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: InlineResponse2005;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "InlineResponse2005");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
