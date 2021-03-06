```js
const SOUND_TYPING_URL = '/assets/sounds/typing.mp3';

const audio = { common: { volume: 0.1 } };
const players = { typing: { src: [SOUND_TYPING_URL], loop: true } };

function Sandbox () {
  const [activate, setActivate] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 1000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
    <div style={{ color: 'cyan' }}>
      <BleepsProvider audio={audio} players={players}>
        <AnimatorGeneralProvider animator={{
          duration: { enter: 200, exit: 200 }
        }}>
          <Animator animator={{
            activate,
            manager: 'stagger',
            duration: { enter: 0, exit: 0, stagger: 50 }
          }}>
            <Text as='h1'>
              Lorem ipsum dolor
            </Text>
            <Text as='p'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam, qui
              nostrum exercitationem ullam corporis suscipit.
            </Text>
            <Text as='p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </Text>
            <Text as='p'>
              Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit.
            </Text>
          </Animator>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </div>
  );
}

render(<Sandbox />);
```
