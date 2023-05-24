"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse200 = void 0;
class InlineResponse200 {
    static getAttributeTypeMap() {
        return InlineResponse200.attributeTypeMap;
    }
}
InlineResponse200.discriminator = undefined;
InlineResponse200.attributeTypeMap = [
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
    }
];
exports.InlineResponse200 = InlineResponse200;
//# sourceMappingURL=inlineResponse200.js.map