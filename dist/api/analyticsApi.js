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
exports.AnalyticsApi = exports.AnalyticsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://api.wall.et';
var AnalyticsApiApiKeys;
(function (AnalyticsApiApiKeys) {
    AnalyticsApiApiKeys[AnalyticsApiApiKeys["api_key"] = 0] = "api_key";
})(AnalyticsApiApiKeys = exports.AnalyticsApiApiKeys || (exports.AnalyticsApiApiKeys = {}));
class AnalyticsApi {
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
        this.authentications[AnalyticsApiApiKeys[key]].apiKey = value;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    countVerifiedWalletPageViews(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/walletPageViews/sessions/verified/distinct/walletObjectsCount';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling countVerifiedWalletPageViews.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling countVerifiedWalletPageViews.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<WTWalletObjectPrefixCounts>");
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
    countWalletPageViews(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/walletPageViews/sessions/distinct/walletObjectsCount';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling countWalletPageViews.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling countWalletPageViews.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<WTWalletObjectPrefixCounts>");
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
    fetchAnalyticsAdCreditsCountPartitionedByEmployee(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/count/employee';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsCountPartitionedByEmployee.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsCountPartitionedByEmployee.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsAdCreditsCountPartitionedByPaymentDesign(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/count/paymentDesign';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsCountPartitionedByPaymentDesign.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsCountPartitionedByPaymentDesign.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsAdCreditsCountPartitionedByValueType(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/count/valueType';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsCountPartitionedByValueType.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsCountPartitionedByValueType.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByAdCreditID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/redemptions/amount/adCredit';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByAdCreditID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByAdCreditID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/redemptions/amount/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsAdCreditsRedemptionsCountPartitionedByAdCreditID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/redemptions/count/adCredit';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsCountPartitionedByAdCreditID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsCountPartitionedByAdCreditID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsAdCreditsRedemptionsCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/redemptions/count/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsAdCreditsRedemptionsCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsAdCreditsRefundsAmountPartitionedByAdCreditID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/refunds/amount/adCredit';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsRefundsAmountPartitionedByAdCreditID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsRefundsAmountPartitionedByAdCreditID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsAdCreditsRefundsAmountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/refunds/amount/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsRefundsAmountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsRefundsAmountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsAdCreditsRefundsAmountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsAdCreditsRefundsAmountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsAdCreditsRefundsCountPartitionedByAdCreditID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/refunds/count/adCredit';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsRefundsCountPartitionedByAdCreditID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsRefundsCountPartitionedByAdCreditID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsAdCreditsRefundsCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/refunds/count/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsRefundsCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsRefundsCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsAdCreditsRefundsCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsAdCreditsRefundsCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsAdCreditsScansCountPartitionedByAdCreditID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/scans/count/adCredit';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsScansCountPartitionedByAdCreditID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsScansCountPartitionedByAdCreditID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsAdCreditsScansCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/advertisementCredits/scans/count/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsAdCreditsScansCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsAdCreditsScansCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsAdCreditsScansCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsAdCreditsScansCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsCampaignWalletPageViews(campaignID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/walletPageViews/campaign/{campaignID}'
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
                throw new Error('Required parameter campaignID was null or undefined when calling fetchAnalyticsCampaignWalletPageViews.');
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
    fetchAnalyticsCampaignsCountPartitionedByCampaignID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/count/campaign/created';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsCountPartitionedByCampaignID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsCountPartitionedByCampaignID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsCampaignsCountPartitionedByEmployee(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/count/employee';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsCountPartitionedByEmployee.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsCountPartitionedByEmployee.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsCampaignsCountPartitionedByPaymentDesign(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/count/paymentDesign';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsCountPartitionedByPaymentDesign.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsCountPartitionedByPaymentDesign.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsCampaignsCountPartitionedByValueType(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/count/valueType';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsCountPartitionedByValueType.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsCountPartitionedByValueType.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsCampaignsRedemptionsAmountPartitionedByCampaignID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/redemptions/amount/campaign';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsRedemptionsAmountPartitionedByCampaignID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsRedemptionsAmountPartitionedByCampaignID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsCampaignsRedemptionsAmountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/redemptions/amount/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsRedemptionsAmountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsRedemptionsAmountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsCampaignsRedemptionsAmountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsCampaignsRedemptionsAmountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsCampaignsRedemptionsCountPartitionedByCampaignID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/redemptions/count/campaign';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsRedemptionsCountPartitionedByCampaignID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsRedemptionsCountPartitionedByCampaignID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsCampaignsRedemptionsCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/redemptions/count/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsRedemptionsCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsRedemptionsCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsCampaignsRedemptionsCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsCampaignsRedemptionsCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsCampaignsRefundsAmountPartitionedByCampaignID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/refunds/amount/campaign';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsRefundsAmountPartitionedByCampaignID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsRefundsAmountPartitionedByCampaignID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsCampaignsRefundsAmountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/refunds/amount/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsRefundsAmountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsRefundsAmountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsCampaignsRefundsAmountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsCampaignsRefundsAmountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsCampaignsRefundsCountPartitionedByCampaignID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/refunds/count/campaign';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsRefundsCountPartitionedByCampaignID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsRefundsCountPartitionedByCampaignID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsCampaignsRefundsCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/refunds/count/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsCampaignsRefundsCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsCampaignsRefundsCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsCampaignsRefundsCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsCampaignsRefundsCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/outboundSMS/count/date/delivered';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByPhoneNumber(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/outboundSMS/count/phoneNumber/delivered';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByPhoneNumber.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByPhoneNumber.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsDistinctWalletSessions(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/walletPageViews/sessions/distinct';
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
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsDynamicVouchersCountPartitionedByEmployee(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/count/employee';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersCountPartitionedByEmployee.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersCountPartitionedByEmployee.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsDynamicVouchersCountPartitionedByPaymentDesign(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/count/paymentDesign';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersCountPartitionedByPaymentDesign.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersCountPartitionedByPaymentDesign.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/redemptions/amount/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDynamicVoucherID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/redemptions/amount/dynamicVoucher';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDynamicVoucherID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDynamicVoucherID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/redemptions/count/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDynamicVoucherID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/redemptions/count/dynamicVoucher';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDynamicVoucherID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDynamicVoucherID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/refunds/amount/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDynamicVoucherID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/refunds/amount/dynamicVoucher';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDynamicVoucherID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDynamicVoucherID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/refunds/count/date';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDynamicVoucherID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/dynamicVouchers/refunds/count/dynamicVoucher';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDynamicVoucherID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDynamicVoucherID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsHelpDeskRequestsCreatedCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/helpdeskrequests/count/date/created';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsHelpDeskRequestsCreatedCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsHelpDeskRequestsCreatedCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsHelpDeskRequestsCreatedCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsHelpDeskRequestsCreatedCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/helpdeskrequests/count/date/resolved';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByEmployee(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/helpdeskrequests/count/employee/resolved';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByEmployee.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByEmployee.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsHelpDeskRequestsUnresolvedCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/helpdeskrequests/count/date/unresolved';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsHelpDeskRequestsUnresolvedCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsHelpDeskRequestsUnresolvedCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsHelpDeskRequestsUnresolvedCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsHelpDeskRequestsUnresolvedCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsItemWalletPageViews(itemID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/walletPageViews/item/{itemID}'
                .replace('{' + 'itemID' + '}', encodeURIComponent(String(itemID)));
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
            if (itemID === null || itemID === undefined) {
                throw new Error('Required parameter itemID was null or undefined when calling fetchAnalyticsItemWalletPageViews.');
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsMemberCount(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/membership/member/count';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsMemberCount.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsMemberCount.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsMemberCount.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsMemberCount.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<MSAnalyticsMemberCountPartitionedByDate>");
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
    fetchAnalyticsMerchantCreditCount(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/membership/merchantCredit/count';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsMerchantCreditCount.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsMerchantCreditCount.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsMerchantCreditCount.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsMerchantCreditCount.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsOfferVsRedeemedAmountPartitionedByCampaignID(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/campaigns/amount/campaign/offerVsRedeemed';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsOfferVsRedeemedAmountPartitionedByCampaignID.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsOfferVsRedeemedAmountPartitionedByCampaignID.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsPaymentObjectBroadcastsCreatedCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/paymentObjectBroadcasts/count/date/created';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsCreatedCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsCreatedCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsCreatedCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsCreatedCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsPaymentObjectBroadcastsIndividualExecutionTimeOfCompletedBroadcasts(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/paymentObjectBroadcasts/executionTime/completed';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsIndividualExecutionTimeOfCompletedBroadcasts.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsIndividualExecutionTimeOfCompletedBroadcasts.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/paymentObjectBroadcasts/count/date/scheduled';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByEmployee(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/paymentObjectBroadcasts/count/employee/scheduled';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByEmployee.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByEmployee.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByPhoneNumber(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/paymentObjectBroadcasts/count/phoneNumber/scheduled';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByPhoneNumber.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByPhoneNumber.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsPaymentObjectBroadcastsScheduledSMSCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/paymentObjectBroadcasts/sms/count/date/scheduled';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledSMSCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledSMSCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledSMSCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsPaymentObjectBroadcastsScheduledSMSCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsSentOutboundMessagesCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/outboundSMS/count/date/sent';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsSentOutboundMessagesCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsSentOutboundMessagesCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsSentOutboundMessagesCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsSentOutboundMessagesCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsSentOutboundMessagesCountPartitionedByPhoneNumber(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/outboundSMS/count/phoneNumber/sent';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsSentOutboundMessagesCountPartitionedByPhoneNumber.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsSentOutboundMessagesCountPartitionedByPhoneNumber.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsStaticVoucherWalletPageViews(voucherID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/walletPageViews/staticVoucher/{voucherID}'
                .replace('{' + 'voucherID' + '}', encodeURIComponent(String(voucherID)));
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
            if (voucherID === null || voucherID === undefined) {
                throw new Error('Required parameter voucherID was null or undefined when calling fetchAnalyticsStaticVoucherWalletPageViews.');
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
    fetchAnalyticsTCPAStopCountPartitionedByDate(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/tcpa/count/date/stop';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsTCPAStopCountPartitionedByDate.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsTCPAStopCountPartitionedByDate.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsTCPAStopCountPartitionedByDate.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsTCPAStopCountPartitionedByDate.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsTCPAStopCountPartitionedByPhoneNumber(startDate, endDate, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/tcpa/count/phoneNumber/stop';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsTCPAStopCountPartitionedByPhoneNumber.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsTCPAStopCountPartitionedByPhoneNumber.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<any>");
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
    fetchAnalyticsTotalAmountRedeemedPerMerchantCredit(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/membership/merchantCredit/amount/redeemed';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsTotalAmountRedeemedPerMerchantCredit.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsTotalAmountRedeemedPerMerchantCredit.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsTotalAmountRedeemedPerMerchantCredit.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsTotalAmountRedeemedPerMerchantCredit.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsTotalAmountRedeemedPerTier(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/membership/tier/amount/redeemed';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsTotalAmountRedeemedPerTier.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsTotalAmountRedeemedPerTier.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsTotalAmountRedeemedPerTier.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsTotalAmountRedeemedPerTier.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate>");
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
    fetchAnalyticsTotalAmountRefundedPerMerchantCredit(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/membership/merchantCredit/amount/refunded';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsTotalAmountRefundedPerMerchantCredit.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsTotalAmountRefundedPerMerchantCredit.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsTotalAmountRefundedPerMerchantCredit.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsTotalAmountRefundedPerMerchantCredit.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "any");
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
    fetchAnalyticsTotalAmountRefundedPerTier(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/membership/tier/amount/refunded';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsTotalAmountRefundedPerTier.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsTotalAmountRefundedPerTier.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsTotalAmountRefundedPerTier.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsTotalAmountRefundedPerTier.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<MSAnalyticsMembershipTierAmountRefundedPartitionedByDate>");
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
    fetchAnalyticsTotalPointsRedeemed(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/membership/member/points/redeemed';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsTotalPointsRedeemed.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsTotalPointsRedeemed.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsTotalPointsRedeemed.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsTotalPointsRedeemed.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<MSAnalyticsMemberPointsRedeemedPartitionedByDate>");
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
    fetchAnalyticsTotalPointsRefunded(startDate, endDate, locale, timezone, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/membership/member/points/refunded';
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
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling fetchAnalyticsTotalPointsRefunded.');
            }
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling fetchAnalyticsTotalPointsRefunded.');
            }
            if (locale === null || locale === undefined) {
                throw new Error('Required parameter locale was null or undefined when calling fetchAnalyticsTotalPointsRefunded.');
            }
            if (timezone === null || timezone === undefined) {
                throw new Error('Required parameter timezone was null or undefined when calling fetchAnalyticsTotalPointsRefunded.');
            }
            if (startDate !== undefined) {
                localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "Date");
            }
            if (endDate !== undefined) {
                localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "Date");
            }
            if (locale !== undefined) {
                localVarQueryParameters['locale'] = models_1.ObjectSerializer.serialize(locale, "string");
            }
            if (timezone !== undefined) {
                localVarQueryParameters['timezone'] = models_1.ObjectSerializer.serialize(timezone, "string");
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
                                body = models_1.ObjectSerializer.deserialize(body, "Array<MSAnalyticsMemberPointsRefundedPartitionedByDate>");
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
    fetchAnalyticsWalletSessionActivity(sessionID, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/walletPageViews/session/activity/{sessionID}'
                .replace('{' + 'sessionID' + '}', encodeURIComponent(String(sessionID)));
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
            if (sessionID === null || sessionID === undefined) {
                throw new Error('Required parameter sessionID was null or undefined when calling fetchAnalyticsWalletSessionActivity.');
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
    fetchWalletPageViewByID(id, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/v2/analytics/walletPageViews/activity/{id}'
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
                throw new Error('Required parameter id was null or undefined when calling fetchWalletPageViewByID.');
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
                                body = models_1.ObjectSerializer.deserialize(body, "WalletPageView");
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
exports.AnalyticsApi = AnalyticsApi;
//# sourceMappingURL=analyticsApi.js.map