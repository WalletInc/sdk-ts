/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.535
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PaymentDesign } from './paymentDesign';

export class InlineResponse2009 {
    'paymentDesign': PaymentDesign;
    'valueType': string | null;
    'voucherType': number;
    'expirationDate': Date;
    'startDate': Date;
    'title': string;
    'isRedeemed': boolean;
    'displayValue': string;
    'offerAmountCentsDecimal': string;
    'offerAmountCents': number;
    'memberID': string;
    'cellPhoneNumber': string;
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2009.attributeTypeMap;
    }
}

