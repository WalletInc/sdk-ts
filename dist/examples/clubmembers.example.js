"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const wallet_1 = require("wallet");
const constants = __importStar(require("./constants"));
clubMembers();
function clubMembers() {
    return __awaiter(this, void 0, void 0, function* () {
        let membersClient = new api.ClubMembersPointsApi(constants.domain);
        let member = yield membersClient.createMember({
            firstName: "John",
            lastName: "Doe",
            membershipTierID: "HDywI893LQ",
            mobileNumber: "+1807654543",
            pointsAccrued: 2000,
            memberID: "MEM001"
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(member);
        member = (yield membersClient.fetchMemberById(member.id, constants.headers)).body;
        console.log(member);
        member = yield membersClient.updateMember(member.id, Object.assign(Object.assign({}, member), { mobileNumber: "+1809863542" }), constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        member = yield membersClient.archiveMember(member.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(member.isActive);
        member = yield membersClient.restoreMember(member.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(member.isActive);
        let members = (yield membersClient.fetchMembersByPage({
            pageSize: 10, pageNum: 1, sortKey: wallet_1.PaginationRequestWithSortOptions.SortKeyEnum.CreatedAt
        })).body;
        console.log(members);
        let historyLogs = (yield membersClient.fetchMemberHistoryLog({
            pageSize: 10,
            pageNum: 1,
            id: member.id
        }, constants.headers)).body;
        console.log(historyLogs);
        let redemptionLogs = (yield membersClient.fetchMemberRedemptionLog({
            pageSize: 10,
            pageNum: 1,
            id: member.id
        }, constants.headers)).body;
        console.log(redemptionLogs);
        let membersCount = ((yield (membersClient.fetchMembersCount(constants.headers))).body).count;
        console.log(membersCount);
    });
}
//# sourceMappingURL=clubmembers.example.js.map