/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.521
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ImportedListRecipient } from './importedListRecipient';

export class InlineResponse2008 {
    'total': number;
    'length': number;
    'results': Array<ImportedListRecipient>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<ImportedListRecipient>"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2008.attributeTypeMap;
    }
}

