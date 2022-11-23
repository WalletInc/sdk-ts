/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.524
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class UpdateStaticVoucherCampaignWithVoucher {
    'title': string;
    'notes': string;
    'valueType': string | null;
    'displayValue'?: string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'startDateTime': Date;
    'expirationDateTime': Date;
    'memberID'?: string;
    'offerAmountCents': number;
    'isActive': boolean;
    'cellPhone'?: string;
    'voucherID': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "string"
        },
        {
            "name": "displayValue",
            "baseName": "displayValue",
            "type": "string"
        },
        {
            "name": "merchantsReferenceID",
            "baseName": "merchantsReferenceID",
            "type": "string"
        },
        {
            "name": "validOnlyAtPOSRegisterIDs",
            "baseName": "validOnlyAtPOSRegisterIDs",
            "type": "Array<string>"
        },
        {
            "name": "paymentDesignID",
            "baseName": "paymentDesignID",
            "type": "string"
        },
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "Date"
        },
        {
            "name": "expirationDateTime",
            "baseName": "expirationDateTime",
            "type": "Date"
        },
        {
            "name": "memberID",
            "baseName": "memberID",
            "type": "string"
        },
        {
            "name": "offerAmountCents",
            "baseName": "offerAmountCents",
            "type": "number"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        },
        {
            "name": "cellPhone",
            "baseName": "cellPhone",
            "type": "string"
        },
        {
            "name": "voucherID",
            "baseName": "voucherID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateStaticVoucherCampaignWithVoucher.attributeTypeMap;
    }
}

