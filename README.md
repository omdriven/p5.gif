# p5.gif.js

p5.gif.js is a library that let's you play animated gifs in p5.js sketches. You load a gif by calling `loadGif('something.gif')` and then can display it using p5's built in `image()` function. Like this:

```javascript
var gif;

function setup() {
  createCanvas(600,600);
  gif = loadGif('mygif.gif');
}

function draw() {
  background(0);
  
  if (gif.loaded()) {
    image(gif, 0, 0);
  }
}
```

## Reference
```gif = loadGif(image)``` loads up a gif and returns a gif object. Warning: this only works with locally hosted gifs.

```gif.play()``` plays the gif

```gif.pause()``` pauses the gif

```gif.playing()``` returns true or false depending on if the gif is currently playing

```gif.loading()``` returns true or false depending on if the gif has loaded

```gif.frames()``` returns the frames as an array of image data

```gif.frame([n])``` with no argument, returns the current frame. With an integer as an argument, skips to that frame.

```totalFrames()``` returns the total number of frames in the gif

## Examples

### Load and play an animated gif
```javascript
var gif;

function setup() {
  createCanvas(600, 300);
  gif = loadGif('test.gif');
}

function draw() {
  background(0);
  if (gif.loaded()) {
    image(gif, 0, 0);
  }
}
```

### Scrub through a gif with your mouse position
```javascript
var gif;

function setup() {
  createCanvas(600, 300);
  gif = loadGif('test.gif');
  gif.pause();
}

function draw() {
  background(0);
  if (gif.loaded()) {
    image(gif, 0, 0);
  }
}

function mouseMoved() {
  if (gif.loaded()) {
    var frame = int(map(mouseX, 0, width, 0, gif.totalFrames()));
    gif.frame(frame);
  }
}
```

## Credits
This library is a very slight modification of [Buzzfeed's SuperGif](https://github.com/buzzfeed/libgif-js), which is a fork of [shachaf's jsgif](https://github.com/shachaf/jsgif)