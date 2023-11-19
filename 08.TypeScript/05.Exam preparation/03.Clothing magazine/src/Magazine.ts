import { Cloth } from "./Cloth"

export class Magazine {
  type: string
  capacity: number
  clothes: Cloth[]

  constructor(type: string, capacity: number) {
    this.type = type
    this.capacity = capacity
    this.clothes = []
  }

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth)
      this.capacity++
    }
  }

  removeCloth(color: string): boolean {
    const clothIndex = this.clothes.findIndex(x => x.color === color)

    if (clothIndex === -1) {
      return false
    }

    this.clothes.splice(clothIndex, 1)
    return true
  }

  getSmallestCloth(): Cloth {
    const sortedBySize: Cloth[] = this.clothes.sort((a, b) => a.size - b.size)

    const result = sortedBySize[0];
    return result
  }

  getCloth(color: string): Cloth {
    const result: Cloth = this.clothes.find(x => x.color === color)
    return result
  }

  getClothCount(): number {
    return this.clothes.length
  }

  report(): string {
    const sortedBySize = this.clothes.sort((a, b) => a.size - b.size)
    const result = [`${this.type} magazine contains:`]
    sortedBySize.map(x => result.push(`Product: ${x.type} with size ${x.size}, color ${x.color}`))

    return result.join('\n')
  }
}