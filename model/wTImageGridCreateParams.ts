/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.520
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTImageGridCreateParams {
    'title': string;
    'url': string;
    'mediaURL': string;
    'sequenceNumber': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "mediaURL",
            "baseName": "mediaURL",
            "type": "string"
        },
        {
            "name": "sequenceNumber",
            "baseName": "sequenceNumber",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return WTImageGridCreateParams.attributeTypeMap;
    }
}

