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
import { PortalPage } from './portalPage';
import { SubscriptionProduct } from './subscriptionProduct';

export class SubscriptionPlan {
    'id': string;
    'name': string;
    'price': number;
    'nickname': string;
    'examples': string;
    'products': Array<SubscriptionProduct>;
    'allPages': Array<PortalPage>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "examples",
            "baseName": "examples",
            "type": "string"
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<SubscriptionProduct>"
        },
        {
            "name": "allPages",
            "baseName": "allPages",
            "type": "Array<PortalPage>"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPlan.attributeTypeMap;
    }
}

