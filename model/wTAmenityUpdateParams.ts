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

export class WTAmenityUpdateParams {
    'title': string;
    'description': string;
    'displayedPrice'?: string;
    'orderNumber': number;
    'mediaURL'?: string;
    'additionalInfoURL'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "displayedPrice",
            "baseName": "displayedPrice",
            "type": "string"
        },
        {
            "name": "orderNumber",
            "baseName": "orderNumber",
            "type": "number"
        },
        {
            "name": "mediaURL",
            "baseName": "mediaURL",
            "type": "string"
        },
        {
            "name": "additionalInfoURL",
            "baseName": "additionalInfoURL",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTAmenityUpdateParams.attributeTypeMap;
    }
}

