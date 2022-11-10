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

export class WTMembershipTierUpdateParams {
    /**
    * The tier number as defined by the merchant
    */
    'tierNumber': string;
    /**
    * The tier name as defined by the merchant
    */
    'tierName': string;
    /**
    * The provided discount as percentage
    */
    'tierDiscount': number;
    'tierDesignID': string;
    'pointsDesignID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tierNumber",
            "baseName": "tierNumber",
            "type": "string"
        },
        {
            "name": "tierName",
            "baseName": "tierName",
            "type": "string"
        },
        {
            "name": "tierDiscount",
            "baseName": "tierDiscount",
            "type": "number"
        },
        {
            "name": "tierDesignID",
            "baseName": "tierDesignID",
            "type": "string"
        },
        {
            "name": "pointsDesignID",
            "baseName": "pointsDesignID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTMembershipTierUpdateParams.attributeTypeMap;
    }
}

