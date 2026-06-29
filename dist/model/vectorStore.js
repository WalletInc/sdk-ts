"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorStore = void 0;
class VectorStore extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VectorStore.attributeTypeMap);
    }
}
exports.VectorStore = VectorStore;
VectorStore.discriminator = undefined;
VectorStore.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "vectorStoreID",
        "baseName": "vectorStoreID",
        "type": "any"
    }
];
//# sourceMappingURL=vectorStore.js.map