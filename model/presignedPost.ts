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
import { PresignedPostFields } from './presignedPostFields';

export class PresignedPost {
    /**
    * The URL that should be used as the action of the form.
    */
    'url': string;
    'fields': PresignedPostFields;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "PresignedPostFields"
        }    ];

    static getAttributeTypeMap() {
        return PresignedPost.attributeTypeMap;
    }
}

