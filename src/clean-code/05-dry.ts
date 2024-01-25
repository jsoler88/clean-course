type Size = '' | 'S' | 'L' | 'M' | 'XL';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size
    ) {
    }

    isProduct(): boolean {
        for (const key in this) {
            switch (typeof key) {
                case 'string': {
                    if ((<string><unknown>this[key]).length <= 0) {
                        throw Error(`${ key } is empty`)
                    }
                    break;
                }
                case 'number': {
                    if ((<number><unknown>this[key]) <= 0) {
                        throw Error(`${ key } is Zero`)
                    }
                    break;
                }
                default: {
                    throw Error(`${ typeof this[key] } is not valid`);
                    break;
                }
            }
        }
        return true;
    }

    toString(): string | undefined {
        if (!this.isProduct()) {
            return;
        }
        return `${this.name} $ ${this.price}, Talla ${this.size}`;
    }
}

(() => {
    const productPants = new Product('Blue pants', 10, 'S');
    console.log(productPants, productPants.toString());
})();
