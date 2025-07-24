# custom-utility-functions

A reusable, type-safe utility library for arrays, objects, strings, dates, and more.

---

## ✨ Features

- 🔢 Array and number utilities
- 📅 Date helpers (`isBefore`, `getDay`, `setYear`, etc.)
- 🔤 String utilities
- ✅ Type-safe, modular, tree-shakable
- 📦 Lightweight and dependency-free

---

## 📦 Installation

```bash
npm install codetrix

```

## 🔧 Usage

```
import { clamp } from 'codetrix/numbers';

const result = clamp(5, 0, 10); // 5

```

```
import { isWeekend } from 'codetrix/date/is';

isWeekend(new Date()); // true or false

```

## 🧰 Available Methods

| Category        | Methods                                           |
| --------------- | ------------------------------------------------- |
| **Array**       | `chunk`, `flatten`, `shuffle`, `unique`           |
| **Date → is/**  | `isWeekend`, `isLeapYear`, `isSameDay`, `isToday` |
| **Date → get/** | `getDay`, `getMonth`, `getYear`, `getWeekNumber`  |
| **Date → set/** | `setYear`, `setMonth`, `setDay`, `setTime`        |
| **String**      | `capitalize`, `camelCase`, `kebabCase`, `trimAll` |
| **Number**      | `clamp`, `random`, `isEven`, `isOdd`              |

## 🧪 Running Tests

```bash
npm npm test

```

## 💖 Sponsor This Project

If you find this library helpful, please consider [![Sponsor](https://img.shields.io/badge/sponsor-%E2%9D%A4-lightgrey?logo=github)](https://github.com/sponsors/shivanshuJags)

Your support helps me continue maintaining and improving this project.
