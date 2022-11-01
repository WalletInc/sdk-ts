/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.519
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTEmployeeSendHelpDeskResponse {
    'helpDeskRequestID': string;
    'message': string;
    'mediaURLs'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "helpDeskRequestID",
            "baseName": "helpDeskRequestID",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "mediaURLs",
            "baseName": "mediaURLs",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return WTEmployeeSendHelpDeskResponse.attributeTypeMap;
    }
}

