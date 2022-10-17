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
        tier = yield tiersClient.updateMembershipTier(tier.id, Object.assign(Object.assign({}, tier), { tierName: "SILVER" }), constants.headers).catch(err => {
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