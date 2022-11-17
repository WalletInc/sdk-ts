/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.524
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PortalPage } from './portalPage';
import { SubscriptionFeature } from './subscriptionFeature';

export class SubscriptionProduct {
    'id': string;
    'title': string;
    'titleFull': string;
    'category': string;
    'features': Array<SubscriptionFeature>;
    'pages': Array<PortalPage>;
    'iconName': string;
    'description': string;
    'isHourly'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "titleFull",
            "baseName": "titleFull",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<SubscriptionFeature>"
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "Array<PortalPage>"
        },
        {
            "name": "iconName",
            "baseName": "iconName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isHourly",
            "baseName": "isHourly",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionProduct.attributeTypeMap;
    }
}

