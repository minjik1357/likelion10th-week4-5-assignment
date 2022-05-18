import React from "react";
import styled from "styled-components";
import Content from "./Content";


class App extends React.Component {
  render() {
    return <Container>
      <Content />
    </Container>;
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ), url(https://mblogthumb-phinf.pstatic.net/MjAyMDExMzBfMTM0/MDAxNjA2NzAxNzMxODQ5.g8stg7WKd1olIIxJZAheCtLXumzCJ3SSxH6lDAQWhMIg.PmnXUgpk9vsaWjg0pDAy7gW6uSIrTjR0UAYDY-bBnQwg.JPEG.marxela/IMG_0532.JPG?type=w800);
  background-size: cover;
`;

export default App;
