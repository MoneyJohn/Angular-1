export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 11 Series',
    price: 'From 499',
    description: 'Bad screens, good price!'
  },
  {
    id: 2,
    name: 'iPhone 12 Series',
    price: 'From 599',
    description: '13 Series but cheaper!'
  },
  {
    id: 3,
    name: 'iPhone 13 Series',
    price: 'From 699',
    description: '12 Series but expensive!'
  },
  {
    id: 4,
    name: 'iPhone SE Series',
    price: 'From 429',
    description: 'We have no idea why we did it! Just get iPhone 11.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/