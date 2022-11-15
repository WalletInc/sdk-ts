/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.522
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class MSMembershipTierHistory {
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
    /**
    * The UUID of this record
    */
    'id': string;
    'merchantID': string;
    /**
    * The id of the membership tier - autopopulated by the service
    */
    'tierID': string;
    /**
    * The timestamp of when this resource was created
    */
    'createdAt': Date;
    /**
    * Denotes if this resource is active
    */
    'isActive': boolean;

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
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "tierID",
            "baseName": "tierID",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return MSMembershipTierHistory.attributeTypeMap;
    }
}

