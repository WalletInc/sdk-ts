/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.533
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Merchant {
    'companyName': string;
    'address1': string;
    'address2': string;
    'city': string;
    'state': string;
    'country': string;
    'phoneNumber': string;
    'zip': string;
    'currencyAbbreviation': string;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'industry': string;
    'industryName': string;
    'infoGenesisPropertyID': string;
    'isFrozen': boolean;
    'billingContactEmployeeID': string;
    'marketingContactEmployeeID': string;
    'technicalContactEmployeeID': string;
    'customerServiceContactEmployeeID': string;
    'stripeCustomerID': string;
    'isPaymentMethodProvided': boolean;
    'planNickname': string;
    'maxSMSCount': number;
    'isSmsAgreement'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string"
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "string"
        },
        {
            "name": "currencyAbbreviation",
            "baseName": "currencyAbbreviation",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "industry",
            "baseName": "industry",
            "type": "string"
        },
        {
            "name": "industryName",
            "baseName": "industryName",
            "type": "string"
        },
        {
            "name": "infoGenesisPropertyID",
            "baseName": "infoGenesisPropertyID",
            "type": "string"
        },
        {
            "name": "isFrozen",
            "baseName": "isFrozen",
            "type": "boolean"
        },
        {
            "name": "billingContactEmployeeID",
            "baseName": "billingContactEmployeeID",
            "type": "string"
        },
        {
            "name": "marketingContactEmployeeID",
            "baseName": "marketingContactEmployeeID",
            "type": "string"
        },
        {
            "name": "technicalContactEmployeeID",
            "baseName": "technicalContactEmployeeID",
            "type": "string"
        },
        {
            "name": "customerServiceContactEmployeeID",
            "baseName": "customerServiceContactEmployeeID",
            "type": "string"
        },
        {
            "name": "stripeCustomerID",
            "baseName": "stripeCustomerID",
            "type": "string"
        },
        {
            "name": "isPaymentMethodProvided",
            "baseName": "isPaymentMethodProvided",
            "type": "boolean"
        },
        {
            "name": "planNickname",
            "baseName": "planNickname",
            "type": "string"
        },
        {
            "name": "maxSMSCount",
            "baseName": "maxSMSCount",
            "type": "number"
        },
        {
            "name": "isSmsAgreement",
            "baseName": "isSmsAgreement",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Merchant.attributeTypeMap;
    }
}
