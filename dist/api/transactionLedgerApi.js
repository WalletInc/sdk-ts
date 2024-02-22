"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://api.wall.et';
var TransactionLedgerApiApiKeys;
(function (TransactionLedgerApiApiKeys) {
    TransactionLedgerApiApiKeys[TransactionLedgerApiApiKeys["api_key"] = 0] = "api_key";
})(TransactionLedgerApiApiKeys = exports.TransactionLedgerApiApiKeys || (exports.TransactionLedgerApiApiKeys = {}));
class TransactionLedgerApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'api_key': new models_2.ApiKeyAuth('header', 'access-token'),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[TransactionLedgerApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    fetchAllLedgerTransactions(startDateTime, endDateTime, pageNum, pageSize, registerType, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/pos/ledger/transactions/all';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            if (startDateTime === null || startDateTime === undefined) {
                throw new Error('Required parameter startDateTime was null or undefined when calling fetchAllLedgerTransactions.');
            }
            if (endDateTime === null || endDateTime === undefined) {
                throw new Error('Required parameter endDateTime was null or undefined when calling fetchAllLedgerTransactions.');
            }
            if (pageNum === null || pageNum === undefined) {
                throw new Error('Required parameter pageNum was null or undefined when calling fetchAllLedgerTransactions.');
            }
            if (pageSize === null || pageSize === undefined) {
                throw new Error('Required parameter pageSize was null or undefined when calling fetchAllLedgerTransactions.');
            }
            if (startDateTime !== undefined) {
                localVarQueryParameters['startDateTime'] = models_1.ObjectSerializer.serialize(startDateTime, "Date");
            }
            if (endDateTime !== undefined) {
                localVarQueryParameters['endDateTime'] = models_1.ObjectSerializer.serialize(endDateTime, "Date");
            }
            if (pageNum !== undefined) {
                localVarQueryParameters['pageNum'] = models_1.ObjectSerializer.serialize(pageNum, "number");
            }
            if (pageSize !== undefined) {
                localVarQueryParameters['pageSize'] = models_1.ObjectSerializer.serialize(pageSize, "number");
            }
            if (registerType !== undefined) {
                localVarQueryParameters['registerType'] = models_1.ObjectSerializer.serialize(registerType, "ApplicableTerminals");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
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
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    request_1.default(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "FetchAllLedgerTransactions200Response");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
}
exports.TransactionLedgerApi = TransactionLedgerApi;
//# sourceMappingURL=transactionLedgerApi.js.map