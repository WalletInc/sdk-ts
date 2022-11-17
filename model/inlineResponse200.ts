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
import { SubscriptionPlan } from './subscriptionPlan';

export class InlineResponse200 {
    'plans': Array<SubscriptionPlan>;
    'title': string;
    'icon': string;
    'sortNumber': string;
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "plans",
            "baseName": "plans",
            "type": "Array<SubscriptionPlan>"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
        },
        {
            "name": "sortNumber",
            "baseName": "sortNumber",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse200.attributeTypeMap;
    }
}

