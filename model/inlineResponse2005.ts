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
import { LedgerEntry } from './ledgerEntry';

export class InlineResponse2005 {
    'entries': Array<LedgerEntry>;
    'pageCount': number;
    'totalRecords': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entries",
            "baseName": "entries",
            "type": "Array<LedgerEntry>"
        },
        {
            "name": "pageCount",
            "baseName": "pageCount",
            "type": "number"
        },
        {
            "name": "totalRecords",
            "baseName": "totalRecords",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2005.attributeTypeMap;
    }
}

