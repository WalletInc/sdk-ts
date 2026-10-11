"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQuietHoursStatus = void 0;
class WTQuietHoursStatus extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTQuietHoursStatus.attributeTypeMap);
    }
}
exports.WTQuietHoursStatus = WTQuietHoursStatus;
WTQuietHoursStatus.discriminator = undefined;
WTQuietHoursStatus.attributeTypeMap = [
    {
        "name": "mode",
        "baseName": "mode",
        "type": "any"
    },
    {
        "name": "appliesTo",
        "baseName": "appliesTo",
        "type": "any"
    },
    {
        "name": "referenceZone",
        "baseName": "referenceZone",
        "type": "any"
    },
    {
        "name": "bandStartMin",
        "baseName": "bandStartMin",
        "type": "any"
    },
    {
        "name": "bandEndMin",
        "baseName": "bandEndMin",
        "type": "any"
    },
    {
        "name": "evaluatedAt",
        "baseName": "evaluatedAt",
        "type": "any"
    },
    {
        "name": "withinBand",
        "baseName": "withinBand",
        "type": "any"
    },
    {
        "name": "wouldReject",
        "baseName": "wouldReject",
        "type": "any"
    },
    {
        "name": "windowOpensAt",
        "baseName": "windowOpensAt",
        "type": "any"
    },
    {
        "name": "windowClosesAt",
        "baseName": "windowClosesAt",
        "type": "any"
    },
    {
        "name": "nextTransitionAt",
        "baseName": "nextTransitionAt",
        "type": "any"
    }
];
//# sourceMappingURL=wTQuietHoursStatus.js.map