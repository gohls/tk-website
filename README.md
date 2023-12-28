# Tom Kuhn Poetry Website

<img width="1190" alt="website-screenshot" src="https://github.com/gohls/tk-website/assets/66274765/7b29e603-cc92-4212-8a08-497166a72485">

This website was built for a friend, who writes poems. Visit [Tom Kuhn Poetry](https://tk-website.vercel.app/) to see site.

_It, furthermore, serves as a showcase for my endeavors in the realm of software development. Below I outlined some `Dev Notes` to provide some insights around the development of the project._

## 👨🏼‍💻 Dev Notes

This website is built using [React](https://react.dev/), while [Notion](https://tom-kuhn-poetry.notion.site/tom-kuhn-poetry/579da44c286942dba67c8c8d5ca0390b?v=7cb5edff85794e2791b91a716187cba4) serves as the backend. (WIP)

React is one of my favorite frameworks to use on the frontend. Usally I use in combination with [MUI](https://mui.com/) for styling, but here I am using [Emotion](https://emotion.sh/), which I am finding pretty straight forward and very nice to use.

As for the backend, it's still currently work in progress, but I'm going to employ Notion, paired with [notion-api-worker](https://github.com/splitbee/notion-api-worker).

## 📁 Folder Structure

The folder structure draws inspiration from certain conventions employed in Next.js, exemplified by the presence of folders like `routes`, `layout`, and `pages`. These conventions enhance code readability, maintainability, and overall organization, especially as the project grows.

Otherwise, the folder structure follows common/best practices, such as grouping `components`, `apis`, `utils`, etc.

## ☑️ TODO

### Features

- [ ] implement backend
- [ ] create `preview` environments
- [ ] implement comment section for poems
- [ ] create functionality for additional poem booklets
  - [ ] use custom theme for different poem booklets

### Tests

- [ ] add tests

#### Bugs

- [ ] fidgety scroll spy
