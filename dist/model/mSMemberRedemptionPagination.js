"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMemberRedemptionPagination = void 0;
class MSMemberRedemptionPagination extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MSMemberRedemptionPagination.attributeTypeMap);
    }
}
exports.MSMemberRedemptionPagination = MSMemberRedemptionPagination;
MSMemberRedemptionPagination.discriminator = undefined;
MSMemberRedemptionPagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "any"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "any"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "any"
    }
];
//# sourceMappingURL=mSMemberRedemptionPagination.js.map