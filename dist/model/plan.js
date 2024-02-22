"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
class Plan {
    static getAttributeTypeMap() {
        return Plan.attributeTypeMap;
    }
}
exports.Plan = Plan;
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
//# sourceMappingURL=plan.js.map