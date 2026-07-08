"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTConnectMoney = void 0;
class WTConnectMoney extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTConnectMoney.attributeTypeMap);
    }
}
exports.WTConnectMoney = WTConnectMoney;
WTConnectMoney.discriminator = undefined;
WTConnectMoney.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "any"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "any"
    }
];
//# sourceMappingURL=wTConnectMoney.js.map