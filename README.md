# Tom Kuhn Poetry Website

<img width="1190" alt="website-screenshot" src="https://github.com/gohls/tk-website/assets/66274765/7b29e603-cc92-4212-8a08-497166a72485">

This website was create for a friend, who writes poems.

_It, furthermore, serves as a showcase for my endeavors in the realm of software development. I have outlined some of my thoughts and insights around the development of it._

## Folder Structure

The folder structure draws inspiration from certain conventions employed in Next.js, exemplified by the presence of folders like `routes`, `layout`, and `pages`. These conventions enhance code readability, maintainability, and overall organization, especially as the project grows.

Otherwise, the folder structure follow common/best practices, such as grouping `components`, `apis`, `utils`, etc.

## apis

## components

This folder consists of reusable UI components, such as cards, links,paper, errors, and more as needed.

## utils

This folder consists of some repeatedly used functions that are commonly used in the project like data formatting.

## TODO

### Features

- [ ] implement backend
- [ ] create deployment environments e.g. `dev`, `staging`, `production`
- [ ] implement comment section for poems
- [x] Take a second look at type TPoem
- [ ] minor tweaks to theme
- [ ] create functionality for additional poem booklets
  - [ ] use custom theme for different poem booklets

### Tests

- [ ] add tests

#### Bugs

- [ ] fidgety scroll spy
- [x] fix useScheme hook ==> implemented theme context provider
