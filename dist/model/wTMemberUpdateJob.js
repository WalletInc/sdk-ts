"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMemberUpdateJob = void 0;
class WTMemberUpdateJob extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMemberUpdateJob.attributeTypeMap);
    }
}
exports.WTMemberUpdateJob = WTMemberUpdateJob;
WTMemberUpdateJob.discriminator = undefined;
WTMemberUpdateJob.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "WTMemberUpdateJobStatus"
    },
    {
        "name": "fileName",
        "baseName": "fileName",
        "type": "any"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "summary",
        "baseName": "summary",
        "type": "any"
    },
    {
        "name": "diffFileURL",
        "baseName": "diffFileURL",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string"
    },
    {
        "name": "revert",
        "baseName": "revert",
        "type": "WTMemberUpdateRevertResult"
    }
];
//# sourceMappingURL=wTMemberUpdateJob.js.map