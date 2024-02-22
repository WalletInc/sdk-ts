"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Plan {
    static getAttributeTypeMap() {
        return Plan.attributeTypeMap;
    }
}
Plan.discriminator = undefined;
Plan.attributeTypeMap = [
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
    }
];
exports.Plan = Plan;
//# sourceMappingURL=plan.js.map