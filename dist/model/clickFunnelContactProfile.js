"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClickFunnelContactProfile {
    static getAttributeTypeMap() {
        return ClickFunnelContactProfile.attributeTypeMap;
    }
}
ClickFunnelContactProfile.discriminator = undefined;
ClickFunnelContactProfile.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "firstName",
        "baseName": "first_name",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "last_name",
        "type": "string"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "zip",
        "baseName": "zip",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "phone",
        "baseName": "phone",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "created_at",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updated_at",
        "type": "Date"
    },
    {
        "name": "unsubscribedAt",
        "baseName": "unsubscribed_at",
        "type": "any"
    },
    {
        "name": "cfUvid",
        "baseName": "cf_uvid",
        "type": "string"
    },
    {
        "name": "shippingAddress",
        "baseName": "shipping_address",
        "type": "string"
    },
    {
        "name": "shippingCountry",
        "baseName": "shipping_country",
        "type": "any"
    },
    {
        "name": "shippingCity",
        "baseName": "shipping_city",
        "type": "any"
    },
    {
        "name": "shippingState",
        "baseName": "shipping_state",
        "type": "any"
    },
    {
        "name": "shippingZip",
        "baseName": "shipping_zip",
        "type": "any"
    },
    {
        "name": "vatNumber",
        "baseName": "vat_number",
        "type": "any"
    },
    {
        "name": "middleName",
        "baseName": "middle_name",
        "type": "any"
    },
    {
        "name": "websites",
        "baseName": "websites",
        "type": "any"
    },
    {
        "name": "locationGeneral",
        "baseName": "location_general",
        "type": "any"
    },
    {
        "name": "normalizedLocation",
        "baseName": "normalized_location",
        "type": "any"
    },
    {
        "name": "deducedLocation",
        "baseName": "deduced_location",
        "type": "any"
    },
    {
        "name": "age",
        "baseName": "age",
        "type": "any"
    },
    {
        "name": "gender",
        "baseName": "gender",
        "type": "any"
    },
    {
        "name": "ageRangeLower",
        "baseName": "age_range_lower",
        "type": "any"
    },
    {
        "name": "ageRangeUpper",
        "baseName": "age_range_upper",
        "type": "any"
    },
    {
        "name": "actionScore",
        "baseName": "action_score",
        "type": "any"
    },
    {
        "name": "knownLtv",
        "baseName": "known_ltv",
        "type": "string"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<any>"
    },
    {
        "name": "timeZone",
        "baseName": "time_zone",
        "type": "string"
    },
    {
        "name": "listsNames",
        "baseName": "lists_names",
        "type": "string"
    },
    {
        "name": "globallyUnsubscribed",
        "baseName": "globally_unsubscribed",
        "type": "boolean"
    }
];
exports.ClickFunnelContactProfile = ClickFunnelContactProfile;
//# sourceMappingURL=clickFunnelContactProfile.js.map