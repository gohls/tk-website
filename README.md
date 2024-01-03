# Tom Kuhn Poetry Website

<img width="1190" alt="website-screenshot" src="https://github.com/gohls/tk-website/assets/66274765/7b29e603-cc92-4212-8a08-497166a72485">

This website was built for a friend, who writes poems. Visit [Tom Kuhn Poetry](https://tk-website.vercel.app/) to see site.

_It, furthermore, serves as a showcase for my endeavors in the realm of software development. Below I outlined some `Dev Notes` to provide some insights around the development of the project._

## 👨🏼‍💻 Dev Notes

Some parts of the project may not adhere strictly to best practices or may seem over-engineered. These deviations are intentional, either for the sake of simplicity or as part of a deliberate learning practice.

## 📁 Folder Structure

The project is organized into two main parent folders: `client` and `server`.

### Client

The frontent was built using [React](https://react.dev/). React is one of my favorite frameworks to use on the frontend. Usally I use it in combination with [MUI](https://mui.com/) for styling, but here I am using [Emotion](https://emotion.sh/), which I am finding pretty straight forward and very nice to use.

This folder structure draws inspiration from certain conventions employed in [Next.js](https://nextjs.org/), exemplified by the presence of folders like `routes`, `layout`, and `pages`. These conventions enhance code readability, maintainability, and overall organization, especially as the project grows.

Otherwise, the folder structure follows common/best practices, such as grouping `components`, `apis`, `utils`, etc.

### Server

The backend is still work in progress, but I'm going to use [Flask](https://flask.palletsprojects.com/en/3.0.x/) together with [Ariadne](https://ariadnegraphql.org/).

## ☑️ TODO

### Features

- [ ] implement backend
- [ ] create `preview` environment
- [ ] implement comment section for poems
- [ ] create functionality for additional poem booklets
  - [ ] use custom theme for different poem booklets

### Test

- [ ] add tests

#### Bugs

- [ ] fidgety scroll spy
- [ ] remove all `any` types
