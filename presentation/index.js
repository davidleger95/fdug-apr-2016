import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import Counter from "../assets/Counter";
import Input from "../assets/Input";
import LoadingExample from "../assets/LoadingExample";
import TickTock from "../assets/TickTock";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  noProps: require("../assets/dont_touch_props.jpg"),
  flux: require("../assets/flux.jpg"),
  fluxReact: require("../assets/flux-diagram.png"),
  madprops: require("../assets/madprops.jpg"),
  me: require("../assets/me.jpg"),
  mixins: require("../assets/mixins.jpg"),
  reactLogo: require("../assets/react-logo.png"),
  reactionBG: require("../assets/reaction-bg.jpg"),
  reactBG1: require("../assets/react-logo-bg.png"),
  reactBG2: require("../assets/reactjs.jpg"),
  reactBG3: require("../assets/react_cool_bg.jpg"),
  reactcomponents: require("../assets/thinking-in-react-components.png"),
  reactmock: require("../assets/thinking-in-react-mock.png"),
  virtualDOM: require("../assets/virtualdom.jpg"),
  virtualDOMExample: require("../assets/virtualdom-example.jpg"),
  airbnb: require("../assets/logos/airbnb.png"),
  cvent: require("../assets/logos/cvent.png"),
  dropbox: require("../assets/logos/dropbox.png"),
  facebook: require("../assets/logos/facebook.png"),
  imdb: require("../assets/logos/imdb.png"),
  instagram: require("../assets/logos/instagram.png"),
  netflix: require("../assets/logos/netflix.png"),
  plex: require("../assets/logos/plex.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#30a7c8"
});

/*
  <Link href="https://github.com/johncotter/fdug-apr-2016">
    <Text bold caps textColor="tertiary">View on Github</Text>
  </Link>
*/

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="none" controls={false}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              An Introduction To
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              React.JS
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="darkgray">
            <Heading caps fit margin="0 0 70px 0">Is anyone actually using React?</Heading>
            <Layout>
              <Fill>
                <Image src={images.facebook.replace("/", "")} height="100px" />
                <Image src={images.airbnb.replace("/", "")} height="80px" />
                <Image src={images.dropbox.replace("/", "")} height="80px" />
              </Fill>
              <Fill>
                <Image src={images.instagram.replace("/", "")} height="90px" />
                <Image src={images.netflix.replace("/", "")} height="90px" />
                <Image src={images.plex.replace("/", "")} height="90px" />
              </Fill>
              <Fill>
                <Appear><Text margin="30px 0 0 0">and...</Text></Appear>
                <Appear><Image src={images.cvent.replace("/", "")} height="120px" /></Appear>
                <Appear><Text>and...</Text></Appear>
                <Appear><Text><em>this presentation</em></Text></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.reactionBG.replace("/", "")} bgDarken={0.75}>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What is React?
            </Heading>
            <Image src={images.reactLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["zoom", "spin"]} bgColor="primary">
            <Heading caps fit>React is <b>not</b> MVC</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10} padding={20}>
                  Modal
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10} padding={20}>
                  View
                </Heading>
                <Appear>
                  <Fill>
                    <Text>
                      <hr />
                      <Heading size={4} textColor="secondary" bgColor="white" margin={10} padding={20}>REACT</Heading>
                    </Text>
                  </Fill>
                </Appear>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10} padding={20}>
                  Controller
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps textColor="primary" textFont="primary">
              Think in components
            </Heading>
            <Image src={images.reactmock.replace("/", "")} margin="10px" height="400px"/>
            <Appear><Image src={images.reactcomponents.replace("/", "")} margin="10px" height="400px"/></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="modular & reusable">
            <Heading caps fit>What is a component?</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="can also use ES6 syntax">
            <Heading caps fit>Component example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hello.example")}
              margin="20px auto"
              textSize="18px"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={6} textColor="white">
              JSX
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx.example")}
              margin="20px auto"
              textSize="18px"
            />
            <Heading size={6} textColor="white">
              Converted to JS
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx2js.example")}
              margin="20px auto"
              textSize="18px"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>Props</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>Props example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hello.prop.example")}
              margin="20px auto"
              textSize="18px"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>State</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>State example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hello.state.example")}
              margin="20px auto"
              textSize="18px"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>Props & State Example</Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/hello.state2.example")}
                  margin="20px auto"
                  textSize="18px"
                />
              </Fill>
              <Appear>
                <Fill>
                  <Input />
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>setState Example</Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/Counter.example")}
                  margin="20px auto"
                  textSize="18px"
                />
              </Fill>
              <Appear>
                <Fill>
                  <Counter />
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.virtualDOM.replace("/", "")} bgDarken={0.50}>
            <Heading caps fit>Virtual DOM</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit>Virtual DOM example</Heading>
            <Image src={images.virtualDOMExample.replace("/", "")} margin="10px" height="400px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="componentWillMount - before the initial render occurs, if you call setState within this method, render() will see the updated state and will be executed only once">
            <Heading caps>Lifecycle (mounting)</Heading>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}>
                    <strong>constructor()</strong>
                  </Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>
                    Used to set initial <strong>state</strong>.
                  </Text>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}>
                    <strong>componentWillMount()</strong>
                  </Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>
                    Probably shouldn't use it.
                  </Text>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}>
                    <strong>render()</strong>
                  </Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>
                    Cannot use <strong>this.setState()</strong>
                  </Text>
                </Fill>
              </Appear>
            </Layout>
            <Appear>
              <hr />
            </Appear>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}>
                    <strong>componentDidMount()</strong>
                  </Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>
                    Cannot use <strong>this.setState()</strong>.
                    Useful for network calls, animations, element resizing...
                  </Text>
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>Lifecycle (update)</Heading>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}>
                    <strong>componentWillReceiveProps(nextProps)</strong>
                  </Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>
                    Skipped if no props are changed, can use <strong>this.setState</strong><br />
                    Useful for making network calls based on new props.
                  </Text>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}>
                    <strong>shouldComponentUpdate(nextProps, nextState)</strong>
                  </Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>
                    Skipped if forced update, cannot use <strong>this.setState</strong><br />
                    Useful for preventing unnecessary re-renders.
                  </Text>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}>
                    <strong>componentWillUpdate(props, state)</strong>
                  </Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>
                    Cannot use <strong>this.setState()</strong><br />
                    Useful almost only in conjunction with <strong>shouldComponentUpdate</strong>.
                    Otherwise, use <strong>componentWillReceiveProps</strong>.
                  </Text>
                </Fill>
              </Appear>
            </Layout>
            <Appear>
              <hr />
            </Appear>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}>
                    <strong>componentDidUpdate(prevProps, prevState)</strong>
                  </Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>
                    Updating component in response to prop or state changes.
                  </Text>
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps margin="0 0 100px 0">Lifecycle (unmount)</Heading>
            <Layout>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="secondary" bgColor="white" margin={10} padding={20}>
                    <strong>componentWillUnmount()</strong></Text>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Text textSize="20pt" textColor="white" margin={10} padding={20}>
                    Cannot use <strong>this.setState()</strong><br />
                    Useful for component cleanup: removing event listeners.
                  </Text>
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>Lifecycle Example</Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/LoadingExample.example")}
                  margin="20px auto"
                  textSize="18px"
                />
              </Fill>
              <Appear>
                <Fill>
                  <LoadingExample />
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgDarken={0.25}>
            <Heading caps>Beyond The Basics</Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps>Architectures</Heading>
            <Layout>
              <Fill>
                <List size={4} textColor="white">
                  <ListItem>Flux</ListItem>
                  <ListItem>Redux</ListItem>
                  <ListItem>MobX</ListItem>
                  <ListItem>Nothing?</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps>flux structure</Heading>
            <Image src={images.fluxReact.replace("/", "")} margin="0px auto 40px" height="  293px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps>Other Things...</Heading>
            <Layout>
              <Fill>
                <List size={4} textColor="white">
                  <ListItem>Create React App</ListItem>
                  <ListItem>PropTypes/Flow</ListItem>
                  <ListItem>Jest</ListItem>
                  <ListItem>React Native</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps>Questions</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
