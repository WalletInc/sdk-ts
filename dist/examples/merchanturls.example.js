"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
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
        url = yield client.updateMerchantURL(url.id, Object.assign({}, url, { destinationURL: "https://instagram.com/redirect/merchant" }), constants.headers).catch(err => {
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