/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.528
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SSOptInSource } from './sSOptInSource';

export class OptInListSubscriber {
    'optInListID': string;
    'optInSourceID': string | null;
    'isSubscribed': boolean;
    'isPendingAge21Verification': boolean;
    'mobilePhoneNumber': string;
    'referringURL': string;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'optedStatus'?: boolean;
    'source'?: SSOptInSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "optInListID",
            "baseName": "optInListID",
            "type": "string"
        },
        {
            "name": "optInSourceID",
            "baseName": "optInSourceID",
            "type": "string"
        },
        {
            "name": "isSubscribed",
            "baseName": "isSubscribed",
            "type": "boolean"
        },
        {
            "name": "isPendingAge21Verification",
            "baseName": "isPendingAge21Verification",
            "type": "boolean"
        },
        {
            "name": "mobilePhoneNumber",
            "baseName": "mobilePhoneNumber",
            "type": "string"
        },
        {
            "name": "referringURL",
            "baseName": "referringURL",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
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
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        },
        {
            "name": "optedStatus",
            "baseName": "optedStatus",
            "type": "boolean"
        },
        {
            "name": "source",
            "baseName": "Source",
            "type": "SSOptInSource"
        }    ];

    static getAttributeTypeMap() {
        return OptInListSubscriber.attributeTypeMap;
    }
}

