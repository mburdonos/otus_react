import { faker } from '@faker-js/faker';


const enum TypeOperation {
  Cost = 'cost',
  Profit = 'profit'
};

type Operation = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: string 
}
type Category = {
    id: string;
    name: string;
    photo: string;
}
type Product =  {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category
};


export function creatingRandomProduct(createdAt: string): Product {
    let fake_category: Category = {
        id: faker.string.uuid() as string,
        name: faker.commerce.department() as string,
        photo: faker.image.url({ width: 200, height: 200 }) as string,
    }
    let fake_product: Product = {
        id: faker.string.uuid() as string,
        name: faker.commerce.productName() as string,
        photo: faker.image.url({ width: 400, height: 400 }) as string,
        createdAt: createdAt,
        oldPrice: faker.finance.amount(10, 1000, 2) as number, 
        price: faker.finance.amount(10, 1000, 2) as number,
        category: fake_category
    };
    return fake_product;
};


function getRandomType(): string {
    const random = Math.random();
    const one_or_two = random < 0.5 ? 1 : 2;
    if (one_or_two == 1){
        return TypeOperation.Cost
    }
    else{
        return TypeOperation.Profit
    }
}

export function creatingRandomOperation(createdAt: string): Operation {
    let fake_category: Category = {
        id: faker.string.uuid() as string,
        name: faker.commerce.department() as string,
        photo: faker.image.url({ width: 200, height: 200 }) as string,
    };
    let fake_operation: Operation = {
        id: faker.string.uuid() as string,
        name: faker.commerce.productMaterial() as string,
        createdAt: createdAt,
        amount: faker.finance.amount(1, 10, 0) as number,
        type: getRandomType(),
        category: fake_category
    };
    return fake_operation;

};


const now = new Date();
const dateString = now.toISOString();

export const createRandomProduct = creatingRandomProduct(dateString);
export const createRandomOperation = creatingRandomOperation(dateString);
console.log(createRandomProduct);
console.log(createRandomOperation);
