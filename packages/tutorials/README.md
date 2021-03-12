[![npm](https://img.shields.io/npm/v/@wpmudev/react-tutorials?color=green&label=SUI%20Tutorials)](https://www.npmjs.com/package/@wpmudev/react-tutorials)
![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-tutorials/@wpmudev/react-tutorials-list)
![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/@wpmudev/react-tutorials/@wpmudev/react-tutorials-slider)

# Tutorials

Tutorials allows you to showcase [WPMU DEV](https://wpmudev.com/blog/) posts tagged as `tutorials` in [Lists Mode](https://wpmudev.github.io/shared-ui-react/?path=/story/tutorials-list--primary) or [Slider Mode](https://wpmudev.github.io/shared-ui-react/?path=/story/tutorials-slider--primary).

## Installation

```
npm i @wpmudev/react-tutorials --save-dev
```

## Usage

### Javascript Instantiation
```js
import React from 'react';
import {
  TutorialsList,
  TutorialsSlider
} from '@wpmudev/react-tutorials';

const MyApp = () => {
  return (
    <>

      <TutorialsList
        title="Tutorials"
        category={ category_id }
      />

      <TutorialsSlider
        title="Tutorials"
        category={ category_id }
        viewAll="https://wpmudev.com/blog/"
      />

    </>
  );
}
```

## Components

The following are **Tutorials** components. Other components outside of this package cannot be used with these components.

### List

[Tutorials List](https://wpmudev.github.io/shared-ui-react/?path=/story/tutorials-list--primary) allows you to list [WPMU DEV](https://wpmudev.com/blog/) posts categorized by plugin name and tagged as tutorials.

```js
import React from 'react';
import {
  TutorialsList
} from '@wpmudev/react-tutorials';

const MyApp = () => {
  return (
    <TutorialsList
      title="Tutorials"
      category={ category_id }
    />
  );
}
```

#### Props

Grab your plugin category unique ID from [demo site](https://wpmudev.github.io/shared-ui-react/). Go to **Controls** that is located in Add-ons section, at the bottom of the screen, and select your plugin from the dropdown list.

> Note: If you are not able to see **Controls** section, click on "A" letter and some options will show up at the bottom of the screen.

Prop Name | Type | Required | Description
--- | --- | --- | ---
title | string | No | Includes a title in the box that contains the list of posts.
category | string | Yes | Retrieve posts tagged as "tutorial" from plugin category ID.

### Slider

[Tutorials Slider](https://wpmudev.github.io/shared-ui-react/?path=/story/tutorials-slider--primary) allows you to list [WPMU DEV](https://wpmudev.com/blog/) posts categorized by plugin name and tagged as tutorials. These posts will appear as a slideshow and the block can be dismissed.

```js
import React from 'react';
import {
  TutorialsSlider
} from '@wpmudev/react-tutorials';

const MyApp = () => {
  return (
    <TutorialsSlider
      title="Tutorials"
      category={ category_id }
      viewAll="https://wpmudev.com/blog/"
    />
  );
}
```

#### Props

Grab your plugin category unique ID from [demo site](https://wpmudev.github.io/shared-ui-react/). Go to **Controls** that is located in Add-ons section, at the bottom of the screen, and select your plugin from the dropdown list.

> Note: If you are not able to see **Controls** section, click on "A" letter and some options will show up at the bottom of the screen.

Prop Name | Type | Required | Description
--- | --- | --- | ---
title | string | No | Includes a title in the slideshow box.
category | string | Yes | Retrieve posts tagged as "tutorial" from plugin category ID.
viewAll | string | No | When has content shows a "View All" text with link in it.
