"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
            this.capacity++;
        }
    }
    removeCloth(color) {
        const clothIndex = this.clothes.findIndex(x => x.color === color);
        if (clothIndex === -1) {
            return false;
        }
        this.clothes.splice(clothIndex, 1);
        return true;
    }
    getSmallestCloth() {
        const sortedBySize = this.clothes.sort((a, b) => a.size - b.size);
        const result = sortedBySize[0];
        return result;
    }
    getCloth(color) {
        const result = this.clothes.find(x => x.color === color);
        return result;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const sortedBySize = this.clothes.sort((a, b) => a.size - b.size);
        const result = [`${this.type} magazine contains:`];
        sortedBySize.map(x => result.push(`Product: ${x.type} with size ${x.size}, color ${x.color}`));
        return result.join('\n');
    }
}
exports.Magazine = Magazine;
