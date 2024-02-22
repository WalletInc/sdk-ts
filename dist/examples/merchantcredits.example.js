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
const wallet_1 = require("wallet");
const constants = __importStar(require("./constants"));
merchantCredits();
function merchantCredits() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.MerchantCreditsApi(constants.domain);
        let merchantcredit = yield client.createMerchantCredit({
            mobileNumber: "+1808978789",
            creditAmount: 2000,
            memberID: "MEM001"
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(merchantcredit);
        merchantcredit = (yield client.fetchMerchantCreditById(merchantcredit.id, constants.headers)).body;
        console.log(merchantcredit);
        merchantcredit = yield client.updateMerchantCredit(merchantcredit.id, Object.assign({}, merchantcredit, { creditAmount: 1000 }), constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        merchantcredit = yield client.archiveMerchantCredit(merchantcredit.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(merchantcredit.isActive);
        merchantcredit = yield client.restoreMerchantCredit(merchantcredit.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(merchantcredit.isActive);
        let merchantcredits = (yield client.fetchMerchantCreditsByPage({
            pageSize: 10, pageNum: 1, sortKey: wallet_1.PaginationRequestWithSortOptions.SortKeyEnum.CreatedAt
        })).body;
        console.log(merchantcredits);
        let historyLogs = (yield client.fetchMerchantCreditHistoryLog({
            pageSize: 10,
            pageNum: 1,
            id: merchantcredit.id
        }, constants.headers)).body;
        console.log(historyLogs);
        let redemptionLogs = (yield client.fetchMerchantCreditRedemptionLog({
            pageSize: 10,
            pageNum: 1,
            id: merchantcredit.id
        }, constants.headers)).body;
        console.log(redemptionLogs);
        let merchantcreditsCount = ((yield (client.fetchMerchantCreditCount(constants.headers))).body).count;
        console.log(merchantcreditsCount);
    });
}
//# sourceMappingURL=merchantcredits.example.js.map