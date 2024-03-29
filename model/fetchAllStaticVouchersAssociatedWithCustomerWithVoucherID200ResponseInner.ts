/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.600
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType } from './fetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType';
import { PaymentDesign } from './paymentDesign';

export class FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner {
    'paymentDesign': PaymentDesign;
    'valueType': FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType;
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
            "type": "FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType"
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
        return FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner.attributeTypeMap;
    }
}

