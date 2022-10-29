"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticVoucherCampaignsApi = exports.StaticVoucherCampaignsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://api.wall.et';
var StaticVoucherCampaignsApiApiKeys;
(function (StaticVoucherCampaignsApiApiKeys) {
    StaticVoucherCampaignsApiApiKeys[StaticVoucherCampaignsApiApiKeys["api_key"] = 0] = "api_key";
})(StaticVoucherCampaignsApiApiKeys = exports.StaticVoucherCampaignsApiApiKeys || (exports.StaticVoucherCampaignsApiApiKeys = {}));
class StaticVoucherCampaignsApi {
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
        this.authentications[StaticVoucherCampaignsApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    countVouchersLoaded(campaignID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/count/vouchers/loaded/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling countVouchersLoaded.');
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2002");
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
    countVouchersRedeemed(campaignID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/count/vouchers/redeemed/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling countVouchersRedeemed.');
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2002");
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
    createStaticVoucherCampaign(createStaticVoucherCampaign, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign';
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
            if (createStaticVoucherCampaign === null || createStaticVoucherCampaign === undefined) {
                throw new Error('Required parameter createStaticVoucherCampaign was null or undefined when calling createStaticVoucherCampaign.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(createStaticVoucherCampaign, "CreateStaticVoucherCampaign")
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "WTStaticVoucherCampaign");
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
    createStaticVoucherCampaignFromCSV(createStaticVoucherCampaignWithVoucherWithCSV, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/csv';
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
            if (createStaticVoucherCampaignWithVoucherWithCSV === null || createStaticVoucherCampaignWithVoucherWithCSV === undefined) {
                throw new Error('Required parameter createStaticVoucherCampaignWithVoucherWithCSV was null or undefined when calling createStaticVoucherCampaignFromCSV.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(createStaticVoucherCampaignWithVoucherWithCSV, "CreateStaticVoucherCampaignWithVoucherWithCSV")
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "WTStaticVoucherCampaign");
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
    createStaticVoucherCampaignWithVoucher(createStaticVoucherCampaignWithVoucher, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/voucher';
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
            if (createStaticVoucherCampaignWithVoucher === null || createStaticVoucherCampaignWithVoucher === undefined) {
                throw new Error('Required parameter createStaticVoucherCampaignWithVoucher was null or undefined when calling createStaticVoucherCampaignWithVoucher.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(createStaticVoucherCampaignWithVoucher, "CreateStaticVoucherCampaignWithVoucher")
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "WTStaticVoucherCampaign");
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
    duplicateStaticVoucherCampaignById(campaignID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/duplicate/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling duplicateStaticVoucherCampaignById.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "WTStaticVoucherCampaign");
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
    fetchPerformanceOverview(campaignID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/overview/performance/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling fetchPerformanceOverview.');
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "object");
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
    fetchReachStatsOfAllStaticVoucherCampaigns(broadcastScheduledStartAt, broadcastScheduledEndAt, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/reach/all';
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
            if (broadcastScheduledStartAt !== undefined) {
                localVarQueryParameters['broadcastScheduledStartAt'] = models_1.ObjectSerializer.serialize(broadcastScheduledStartAt, "Date");
            }
            if (broadcastScheduledEndAt !== undefined) {
                localVarQueryParameters['broadcastScheduledEndAt'] = models_1.ObjectSerializer.serialize(broadcastScheduledEndAt, "Date");
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "ReachPerformanceStats");
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
    fetchReachStatsOfIndividualStaticVoucherCampaign(staticVoucherCampaignID, broadcastScheduledStartAt, broadcastScheduledEndAt, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/reach/{staticVoucherCampaignID}'
                .replace('{' + 'staticVoucherCampaignID' + '}', encodeURIComponent(String(staticVoucherCampaignID)));
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
            if (staticVoucherCampaignID === null || staticVoucherCampaignID === undefined) {
                throw new Error('Required parameter staticVoucherCampaignID was null or undefined when calling fetchReachStatsOfIndividualStaticVoucherCampaign.');
            }
            if (broadcastScheduledStartAt !== undefined) {
                localVarQueryParameters['broadcastScheduledStartAt'] = models_1.ObjectSerializer.serialize(broadcastScheduledStartAt, "Date");
            }
            if (broadcastScheduledEndAt !== undefined) {
                localVarQueryParameters['broadcastScheduledEndAt'] = models_1.ObjectSerializer.serialize(broadcastScheduledEndAt, "Date");
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "ReachPerformanceStats");
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
    fetchStaticVoucherCampaignById(id, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
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
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling fetchStaticVoucherCampaignById.');
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "WTStaticVoucherCampaign");
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
    fetchStaticVoucherCampaigns(isArchiveIncluded, sourceID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/all';
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
            if (isArchiveIncluded !== undefined) {
                localVarQueryParameters['isArchiveIncluded'] = models_1.ObjectSerializer.serialize(isArchiveIncluded, "boolean");
            }
            if (sourceID !== undefined) {
                localVarQueryParameters['sourceID'] = models_1.ObjectSerializer.serialize(sourceID, "number");
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "Array<WTStaticVoucherCampaign>");
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
    fetchStaticVouchers(campaignID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/staticVouchers/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling fetchStaticVouchers.');
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "Array<WTStaticVoucher>");
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
    fetchStaticVouchersPage(campaignID, pagenum, pagesize, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/staticVouchers/page/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling fetchStaticVouchersPage.');
            }
            if (pagenum === null || pagenum === undefined) {
                throw new Error('Required parameter pagenum was null or undefined when calling fetchStaticVouchersPage.');
            }
            if (pagesize === null || pagesize === undefined) {
                throw new Error('Required parameter pagesize was null or undefined when calling fetchStaticVouchersPage.');
            }
            if (pagenum !== undefined) {
                localVarQueryParameters['pagenum'] = models_1.ObjectSerializer.serialize(pagenum, "number");
            }
            if (pagesize !== undefined) {
                localVarQueryParameters['pagesize'] = models_1.ObjectSerializer.serialize(pagesize, "number");
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "InlineResponse2004");
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
    fetchViews(campaignID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/views/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling fetchViews.');
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "Array<WTWalletPageView>");
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
    fetchVouchersRedeemed(campaignID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/vouchers/redeemed/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling fetchVouchersRedeemed.');
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "Array<WTStaticVoucher>");
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
    previewMessages(campaignID, wTStaticVoucherCampaignPreviewMessages, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/preview/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling previewMessages.');
            }
            if (wTStaticVoucherCampaignPreviewMessages === null || wTStaticVoucherCampaignPreviewMessages === undefined) {
                throw new Error('Required parameter wTStaticVoucherCampaignPreviewMessages was null or undefined when calling previewMessages.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(wTStaticVoucherCampaignPreviewMessages, "WTStaticVoucherCampaignPreviewMessages")
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "Array<VSCampaignGeneratedMessage>");
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
    previewMessagesByPage(campaignID, wTStaticVoucherCampaignPreviewMessagesByPage, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/preview/page/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling previewMessagesByPage.');
            }
            if (wTStaticVoucherCampaignPreviewMessagesByPage === null || wTStaticVoucherCampaignPreviewMessagesByPage === undefined) {
                throw new Error('Required parameter wTStaticVoucherCampaignPreviewMessagesByPage was null or undefined when calling previewMessagesByPage.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(wTStaticVoucherCampaignPreviewMessagesByPage, "WTStaticVoucherCampaignPreviewMessagesByPage")
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "VSCampaignGeneratedMessagePagination");
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
    updateStaticVoucherCampaign(campaignID, staticVoucherCampaignUpdate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling updateStaticVoucherCampaign.');
            }
            if (staticVoucherCampaignUpdate === null || staticVoucherCampaignUpdate === undefined) {
                throw new Error('Required parameter staticVoucherCampaignUpdate was null or undefined when calling updateStaticVoucherCampaign.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(staticVoucherCampaignUpdate, "StaticVoucherCampaignUpdate")
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "WTStaticVoucherCampaign");
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
    updateStaticVoucherCampaignWithVoucher(campaignID, updateStaticVoucherCampaignWithVoucher, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/payment/staticVoucherCampaign/voucher/{campaignID}'
                .replace('{' + 'campaignID' + '}', encodeURIComponent(String(campaignID)));
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
            if (campaignID === null || campaignID === undefined) {
                throw new Error('Required parameter campaignID was null or undefined when calling updateStaticVoucherCampaignWithVoucher.');
            }
            if (updateStaticVoucherCampaignWithVoucher === null || updateStaticVoucherCampaignWithVoucher === undefined) {
                throw new Error('Required parameter updateStaticVoucherCampaignWithVoucher was null or undefined when calling updateStaticVoucherCampaignWithVoucher.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(updateStaticVoucherCampaignWithVoucher, "UpdateStaticVoucherCampaignWithVoucher")
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
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "WTStaticVoucherCampaign");
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
exports.StaticVoucherCampaignsApi = StaticVoucherCampaignsApi;
//# sourceMappingURL=staticVoucherCampaignsApi.js.map