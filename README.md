# React Loom Player

This package provides a hassle-free way to implement a Loom player in your React application. By utilizing this package, you can easily embed Loom videos with various configuration options.

## Installation

To install the package, you can use npm or yarn:

```bash
npm install react-loom-player
```

or

```bash
yarn add react-loom-player
```

## Usage

To use the `LoomPlayer` component, import it into your React component and provide the necessary props.

```jsx
import React from 'react';
import LoomPlayer from 'react-loom-player';

const App = () => {
  return (
    <div>
      <LoomPlayer
        src="https://www.loom.com/share/your-video-id"
        autoplay
        timestamps={30}
        muted
        hideEmbedTopBar
        hideTitle
        hideOwner
        hideShare
      />
    </div>
  );
};

export default App;
```

## Props

The `LoomPlayer` component accepts the following props:

- **src** (string): The URL of the Loom video. This is required.
- **timestamps** (number | string): The start time of the video. Can be in seconds or as a string (e.g., `1m30s`).
- **muted** (boolean): Whether the video should be muted. Default is `false`.
- **autoplay** (boolean): Whether the video should autoplay. Default is `false`.
- **hideEmbedTopBar** (boolean): Whether to hide the embed top bar. Default is `false`.
- **hideTitle** (boolean): Whether to hide the video title. Default is `false`.
- **hideOwner** (boolean): Whether to hide the video owner. Default is `false`.
- **hideShare** (boolean): Whether to hide the share button. Default is `false`.

Additionally, all standard `iframe` attributes can be passed to the `LoomPlayer` component.

## Example

Here is a full example demonstrating the usage of the `LoomPlayer` component with various configurations:

```jsx
import React from 'react';
import LoomPlayer from 'react-loom-player';

const App = () => {
  return (
    <div>
      <h1>Loom Video Player</h1>
      <LoomPlayer
        src="https://www.loom.com/share/your-video-id"
        autoplay
        timestamps="1m30s"
        muted
        hideEmbedTopBar
        hideTitle
        hideOwner
        hideShare
      />
    </div>
  );
};

export default App;
```

## Styling

To style the Loom player, you can use the following CSS classes:

- **react-loom-player-wrapper**: The wrapper around the Loom player iframe.
- **react-loom-player**: The Loom player iframe itself.

Here is an example of how you can style the player:

```css
.react-loom-player-wrapper {}
.react-loom-player {}
```

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
