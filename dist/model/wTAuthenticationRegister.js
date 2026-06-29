"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationRegister = void 0;
class WTAuthenticationRegister extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAuthenticationRegister.attributeTypeMap);
    }
}
exports.WTAuthenticationRegister = WTAuthenticationRegister;
WTAuthenticationRegister.discriminator = undefined;
WTAuthenticationRegister.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "any"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "any"
    },
    {
        "name": "hearAboutUs",
        "baseName": "hearAboutUs",
        "type": "any"
    },
    {
        "name": "hearAboutUsDetails",
        "baseName": "hearAboutUsDetails",
        "type": "any"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "any"
    },
    {
        "name": "merchantType",
        "baseName": "merchantType",
        "type": "any"
    },
    {
        "name": "streetAddress1",
        "baseName": "streetAddress1",
        "type": "any"
    },
    {
        "name": "streetAddress2",
        "baseName": "streetAddress2",
        "type": "any"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "any"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "any"
    },
    {
        "name": "zip",
        "baseName": "zip",
        "type": "any"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "any"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    },
    {
        "name": "ein",
        "baseName": "ein",
        "type": "any"
    },
    {
        "name": "gaClientId",
        "baseName": "ga_client_id",
        "type": "any"
    },
    {
        "name": "gaMeasurementId",
        "baseName": "ga_measurement_id",
        "type": "any"
    },
    {
        "name": "recaptchaToken",
        "baseName": "recaptcha_token",
        "type": "any"
    },
    {
        "name": "affiliateID",
        "baseName": "affiliateID",
        "type": "any"
    },
    {
        "name": "firstPromoterTrackingID",
        "baseName": "firstPromoterTrackingID",
        "type": "any"
    },
    {
        "name": "firstPromoterAffiliateID",
        "baseName": "firstPromoterAffiliateID",
        "type": "any"
    }
];
//# sourceMappingURL=wTAuthenticationRegister.js.map