# custom-utility-functions

A lightweight utility library similar to Lodash with hand-crafted TypeScript functions.

## 📦 Installation

```bash
npm install codetrix

```

## 🔧 Usage

```
import { isEmpty, chunk, debounce } from 'custom-lodash';

console.log(isEmpty({})); // true
console.log(chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]

```

## 🧩 Available Functions

```
isEmpty(value: any): boolean
Returns true if the value is null, undefined, empty string, empty array, or empty object.

chunk<T>(array: T[], size: number): T[][]
Splits the array into chunks of a specific size.

```
