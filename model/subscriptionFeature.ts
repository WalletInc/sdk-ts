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

export class SubscriptionFeature {
    'sortNum': number;
    'name': string;
    'maxVolume'?: string;
    'measurement': string;
    'description': string;
    'currentVolume'?: string;
    'isExceeded'?: boolean;
    'isInUse'?: boolean;
    'isEnabled'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sortNum",
            "baseName": "sortNum",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "maxVolume",
            "baseName": "maxVolume",
            "type": "string"
        },
        {
            "name": "measurement",
            "baseName": "measurement",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "currentVolume",
            "baseName": "currentVolume",
            "type": "string"
        },
        {
            "name": "isExceeded",
            "baseName": "isExceeded",
            "type": "boolean"
        },
        {
            "name": "isInUse",
            "baseName": "isInUse",
            "type": "boolean"
        },
        {
            "name": "isEnabled",
            "baseName": "isEnabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionFeature.attributeTypeMap;
    }
}

