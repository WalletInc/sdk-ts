"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse20010 = void 0;
class InlineResponse20010 {
    static getAttributeTypeMap() {
        return InlineResponse20010.attributeTypeMap;
    }
}
exports.InlineResponse20010 = InlineResponse20010;
InlineResponse20010.discriminator = undefined;
InlineResponse20010.attributeTypeMap = [
    {
        "name": "paymentDesign",
        "baseName": "PaymentDesign",
        "type": "PaymentDesign"
    },
    {
        "name": "valueType",
        "baseName": "ValueType",
        "type": "string"
    },
    {
        "name": "voucherType",
        "baseName": "VoucherType",
        "type": "number"
    },
    {
        "name": "expirationDate",
        "baseName": "ExpirationDate",
        "type": "Date"
    },
    {
        "name": "startDate",
        "baseName": "StartDate",
        "type": "Date"
    },
    {
        "name": "title",
        "baseName": "Title",
        "type": "string"
    },
    {
        "name": "isRedeemed",
        "baseName": "IsRedeemed",
        "type": "boolean"
    },
    {
        "name": "displayValue",
        "baseName": "DisplayValue",
        "type": "string"
    },
    {
        "name": "offerAmountCentsDecimal",
        "baseName": "OfferAmountCents_decimal",
        "type": "string"
    },
    {
        "name": "offerAmountCents",
        "baseName": "OfferAmountCents",
        "type": "number"
    },
    {
        "name": "memberID",
        "baseName": "MemberID",
        "type": "string"
    },
    {
        "name": "cellPhoneNumber",
        "baseName": "CellPhoneNumber",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
//# sourceMappingURL=inlineResponse20010.js.map