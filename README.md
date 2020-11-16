# tailwind-fractal-vue-boilerplate

WIP - still needs to add VUE and JS into gulp process

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
gulp develop
```


## Step by step - How to make your own

### Git and Node

First of all you need git and node to start anything. Follow their installation instructions here: 

- [git](https://git-scm.com/downloads)
- [node](https://nodejs.org/en/download/)

### Fractal

[Fractal](https://fractal.build/guide/installation.html#installing-fractal-in-your-project) is a tool to help you build and document web component libraries, and then integrate them into your projects.

> npm install --save @frctl/fractal

Follow the steps on the link bellow to install it quickly. The default values are good to go.

> [TL;DR Fractal Installation](https://fractal.build/guide/getting-started.html#the-tl-dr-method)

### Atomic Design - folder organization

After installing fractal, we added a few folders inside components folder. Each one of those represents a level in the [Atomic Design](https://atomicdesign.bradfrost.com/) pattern.

### Gulp tasks

We also need a watcher for JS and CSS file changes, we followed the same approach as in this [repo joao-olivio/fractal-css](https://github.com/joao-olivio/fractal-css)


### Vue

[Vue](https://vuejs.org/v2/guide/installation.html) Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. 

> npm install vue


### Tailwind

First of all, add tailwindcss to your dependencies 

> npm install tailwindcss

Then create your custom config file, there is a task for it

> npx tailwindcss init

After that we proceed add [tailwind to gulp](https://tailwindcss.com/docs/installation#gulp), and as noted here, we need gulp-postcss, so we add 2 entries on tasks/style.js one for tailwind, another for autoprefixer.

> npm install --save gulp-postcss

### Layout References

https://codepen.io/Gthibaud/pen/MqpmXE

