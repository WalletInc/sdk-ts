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
import { Feature } from './feature';

export class Plan {
    'name': string;
    'price': string;
    'features': Array<Feature>;
    'measurement'?: string;
    'isExceeded'?: boolean;
    'isCurrent'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<Feature>"
        },
        {
            "name": "measurement",
            "baseName": "measurement",
            "type": "string"
        },
        {
            "name": "isExceeded",
            "baseName": "isExceeded",
            "type": "boolean"
        },
        {
            "name": "isCurrent",
            "baseName": "isCurrent",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Plan.attributeTypeMap;
    }
}
