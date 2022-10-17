"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api = __importStar(require("wallet"));
const constants = __importStar(require("./constants"));
merchantURLs();
function merchantURLs() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.MerchantURLsApi(constants.domain);
        let url = yield client.createMerchantURL({
            nickname: "Instagram",
            destinationURL: "https://instagram.com/merchant"
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(url);
        url = (yield client.fetchMerchantURL(url.id, constants.headers)).body;
        console.log(url);
        url = yield client.updateMerchantURL(url.id, Object.assign(Object.assign({}, url), { destinationURL: "https://instagram.com/redirect/merchant" }), constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        url = yield client.archiveMerchantURL(url.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(url.isActive);
        url = yield client.restoreMerchantURL(url.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(url.isActive);
        let urls = (yield client.fetchAllMerchantURLs(false, constants.headers)).body;
        console.log(urls);
        let pageViews = (yield (client.fetchMerchantURLRequests(url.id, constants.headers))).body;
        console.log(pageViews);
    });
}
//# sourceMappingURL=merchanturls.example.js.map