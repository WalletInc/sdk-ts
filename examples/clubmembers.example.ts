import * as api from "wallet";
import { PaginationRequestWithSortOptions } from "wallet";
import * as constants from "./constants";

clubMembers();

async function clubMembers() {
    let membersClient = new api.ClubMembersPointsApi(constants.domain);

    // Create new club member
    let member = await membersClient.createMember({
        firstName: "John",
        lastName: "Doe",
        membershipTierID: "HDywI893LQ",
        mobileNumber: "+1807654543",
        pointsAccrued: 2000,
        memberID: "MEM001"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The club member that has just been created
    console.log(member);

    // Fetch the created member
    member = (await membersClient.fetchMemberById(member.id, constants.headers)).body;
    console.log(member);

    member = await membersClient.updateMember(member.id, {
        ...member,
        mobileNumber: "+1809863542"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the club member
    member = await membersClient.archiveMember(member.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(member.isActive); // This will be false, since the member has just been archived

    // Restore the club member
    member = await membersClient.restoreMember(member.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(member.isActive); // This will be true, since the member has just been restored

    // Fetch members by page
    let members = (await membersClient.fetchMembersByPage({
        pageSize: 10, pageNum: 1, sortKey: PaginationRequestWithSortOptions.SortKeyEnum.CreatedAt
    })).body;

    console.log(members);

    // Fetch paginated member history logs
    let historyLogs = (await membersClient.fetchMemberHistoryLog({
        pageSize: 10,
        pageNum: 1,
        id: member.id
    }, constants.headers)).body;

    console.log(historyLogs);

    let redemptionLogs = (await membersClient.fetchMemberRedemptionLog({
        pageSize: 10,
        pageNum: 1,
        id: member.id
    }, constants.headers)).body;

    console.log(redemptionLogs);

    // Fetch the count of members
    let membersCount = ((await (membersClient.fetchMembersCount(constants.headers))).body).count;
    console.log(membersCount);
}