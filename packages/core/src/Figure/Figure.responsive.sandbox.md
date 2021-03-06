```jsx
// RESIZE THE BROWSER TO SEE THE FIGURE RESPONSIVE IMAGES.

const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif';
const IMAGE_XS_URL = '/assets/images/wallpaper.jpg';
const IMAGE_MD_URL = '/assets/images/wallpaper-medium.jpg';
const IMAGE_LG_URL = '/assets/images/wallpaper-large.jpg';
const SOUND_TYPING_URL = '/assets/sounds/typing.mp3';
const SOUND_FIGURE_URL = '/assets/sounds/figure.mp3';

const audio = { common: { volume: 0.4 } };
const players = {
  typing: { src: [SOUND_TYPING_URL], loop: true },
  figure: { src: [SOUND_FIGURE_URL] }
};

const Sandbox = () => {
  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={{ body: { fontFamily: ROOT_FONT_FAMILY } }} />
      <BleepsProvider audio={audio} players={players}>
        <Figure
          src={[
            IMAGE_XS_URL,
            undefined, // SM is ignored
            IMAGE_MD_URL,
            IMAGE_LG_URL
            // XL is ignored
          ]}
          alt='A nebula'
        >
          A nebula is an interstellar cloud of dust, hydrogen, helium and
          other ionized gases. Originally, the term was used to describe
          any diffused astronomical object, including galaxies beyond
          the Milky Way.
        </Figure>
      </BleepsProvider>
    </ArwesThemeProvider>
  );
};

render(<Sandbox />);
```
