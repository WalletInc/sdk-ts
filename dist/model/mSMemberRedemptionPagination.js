"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMemberRedemptionPagination = void 0;
class MSMemberRedemptionPagination {
    static getAttributeTypeMap() {
        return MSMemberRedemptionPagination.attributeTypeMap;
    }
}
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
exports.MSMemberRedemptionPagination = MSMemberRedemptionPagination;
//# sourceMappingURL=mSMemberRedemptionPagination.js.map