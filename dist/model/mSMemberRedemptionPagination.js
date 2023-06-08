"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMemberRedemptionPagination = void 0;
class MSMemberRedemptionPagination {
    static getAttributeTypeMap() {
        return MSMemberRedemptionPagination.attributeTypeMap;
    }
}
exports.MSMemberRedemptionPagination = MSMemberRedemptionPagination;
MSMemberRedemptionPagination.discriminator = undefined;
MSMemberRedemptionPagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<MSMemberRedemption>"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "number"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
//# sourceMappingURL=mSMemberRedemptionPagination.js.map