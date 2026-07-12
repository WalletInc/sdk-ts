"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCertificateDealCreateRequest = void 0;
class WTCertificateDealCreateRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCertificateDealCreateRequest.attributeTypeMap);
    }
}
exports.WTCertificateDealCreateRequest = WTCertificateDealCreateRequest;
WTCertificateDealCreateRequest.discriminator = undefined;
WTCertificateDealCreateRequest.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "any"
    },
    {
        "name": "entitlementType",
        "baseName": "entitlementType",
        "type": "WTCertificateDealCreateRequestEntitlementType"
    },
    {
        "name": "entitlementID",
        "baseName": "entitlementID",
        "type": "any"
    },
    {
        "name": "entitlementQuantity",
        "baseName": "entitlementQuantity",
        "type": "any"
    },
    {
        "name": "entitlementSnapshot",
        "baseName": "entitlementSnapshot",
        "type": "WTCertificateEntitlementSnapshot"
    },
    {
        "name": "retailValueCents",
        "baseName": "retailValueCents",
        "type": "any"
    },
    {
        "name": "salePriceCents",
        "baseName": "salePriceCents",
        "type": "any"
    },
    {
        "name": "quantityAvailable",
        "baseName": "quantityAvailable",
        "type": "any"
    },
    {
        "name": "requiresGiftRedemption",
        "baseName": "requiresGiftRedemption",
        "type": "any"
    },
    {
        "name": "validFrom",
        "baseName": "validFrom",
        "type": "any"
    },
    {
        "name": "validThrough",
        "baseName": "validThrough",
        "type": "any"
    }
];
//# sourceMappingURL=wTCertificateDealCreateRequest.js.map