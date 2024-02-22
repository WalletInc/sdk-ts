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
        member = yield membersClient.updateMember(member.id, Object.assign({}, member, { mobileNumber: "+1809863542" }), constants.headers).catch(err => {
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