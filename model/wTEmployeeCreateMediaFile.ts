/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.518
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTEmployeeCreateMediaFile {
    'fileName': string;
    'fileData': any | null;
    'folder'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "fileData",
            "baseName": "fileData",
            "type": "any"
        },
        {
            "name": "folder",
            "baseName": "folder",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTEmployeeCreateMediaFile.attributeTypeMap;
    }
}

