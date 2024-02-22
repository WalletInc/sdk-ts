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
membershipTiers();
function membershipTiers() {
    return __awaiter(this, void 0, void 0, function* () {
        let tiersClient = new api.MembershipTiersApi(constants.domain);
        let tier = yield tiersClient.createMembershipTier({
            tierNumber: "1",
            tierName: "GOLD",
            tierDiscount: 20,
            tierDesignID: "JSUilOPE98",
            pointsDesignID: "L918AJ7356"
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(tier);
        tier = (yield tiersClient.fetchMembershipTierById(tier.id, constants.headers)).body;
        console.log(tier);
        tier = yield tiersClient.updateMembershipTier(tier.id, Object.assign({}, tier, { tierName: "SILVER" }), constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        tier = yield tiersClient.archiveMembershipTier(tier.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(tier.isActive);
        tier = yield tiersClient.restoreMembershipTier(tier.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(tier.isActive);
        let historyLogs = (yield tiersClient.fetchMembershipTierHistoryLog({
            pageSize: 10,
            pageNum: 1,
            id: tier.id
        }, constants.headers)).body;
        console.log(historyLogs);
        let redemptionLogs = (yield tiersClient.fetchMembershipTierRedemptionLog({
            pageSize: 10,
            pageNum: 1,
            id: tier.id
        }, constants.headers)).body;
        console.log(redemptionLogs);
        let tiersList = ((yield (tiersClient.fetchAllMembershipTiersWithMemberCount(false, constants.headers))).body);
        console.log(tiersList);
    });
}
//# sourceMappingURL=membershiptiers.example.js.map