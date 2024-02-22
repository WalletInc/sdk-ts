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
import { WTMembershipTierId } from './wTMembershipTierId';

export class WTMembershipTierWithMemberCount {
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
    'id': WTMembershipTierId;
    'merchantID': string;
    /**
    * The timestamp of when this resource was created
    */
    'createdAt': Date;
    /**
    * The timestamp of when this resource was updated
    */
    'updatedAt': Date;
    /**
    * Denotes if this resource is active
    */
    'isActive': boolean;
    /**
    * Describes the count of members associated with this membership tier
    */
    'memberCount': number;

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
            "type": "WTMembershipTierId"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        },
        {
            "name": "memberCount",
            "baseName": "memberCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return WTMembershipTierWithMemberCount.attributeTypeMap;
    }
}

