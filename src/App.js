import React from "react";
import { Stage, Sprite } from "@inlet/react-pixi";

function App() {

  () => {
    const reducer = (_, { data }) => data
    const Bunny = () => {
      const [motion, update] = useReducer(reducer)
      const iter = useRef(0)
      useTick(delta => {
        const i = (iter.current += 0.05 * delta)
        update({
          type: 'update',
          data: {
            x: Math.sin(i) * 100,
            y: Math.sin(i / 1.5) * 100,
            rotation: Math.sin(i) * Math.PI,
            anchor: Math.sin(i / 2),
          },
        })
      })
      return (
        <Sprite
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          {...motion}
        />
      )
    }
    return (
      <Stage width={300} height={300} options={{ backgroundAlpha: 0 }}>
        <Container x={150} y={150}>
          <Bunny />
        </Container>
      </Stage>
    )
  }
  
  return (
    <div className="App">
      <h1>Pixi Example</h1>
      <Stage>
        <Sprite image="./bunny.png" x={100} y={100} />
      </Stage>
    </div>
  );
}

export default App;
