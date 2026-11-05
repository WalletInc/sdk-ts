"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTWalletOrdering = void 0;
class WTWalletOrdering extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTWalletOrdering.attributeTypeMap);
    }
}
exports.WTWalletOrdering = WTWalletOrdering;
WTWalletOrdering.discriminator = undefined;
WTWalletOrdering.attributeTypeMap = [
    {
        "name": "isOnlineCheckout",
        "baseName": "isOnlineCheckout",
        "type": "any"
    },
    {
        "name": "isAcceptingOrders",
        "baseName": "isAcceptingOrders",
        "type": "any"
    },
    {
        "name": "pausedReason",
        "baseName": "pausedReason",
        "type": "any"
    },
    {
        "name": "opensAt",
        "baseName": "opensAt",
        "type": "any"
    },
    {
        "name": "opensDay",
        "baseName": "opensDay",
        "type": "any"
    },
    {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "any"
    },
    {
        "name": "prepMinutes",
        "baseName": "prepMinutes",
        "type": "any"
    },
    {
        "name": "scheduledPickup",
        "baseName": "scheduledPickup",
        "type": "any"
    }
];
//# sourceMappingURL=wTWalletOrdering.js.map