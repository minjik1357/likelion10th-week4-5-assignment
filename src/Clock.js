import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
  state = {
    date: new Date()
  }
  render() {
    const { date } = this.state;
    return (
      <Container>
        <CurDate>
          {date.getFullYear()}&nbsp;/&nbsp;
          {date.getMonth() + 1}&nbsp;/&nbsp;
          {date.getDate()}
        </CurDate>
        <CurTime>
          {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
          &nbsp;:&nbsp;
          {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
        </CurTime>
      </Container>
    );
  }
  getDate = () => {
    this.setState({
      date: new Date()
    });
  };

  componentDidMount() {
    this.oneMinuteCall = setInterval(() => this.getDate(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.oneMinuteCall);
  }
}




const Container = styled.div`
  margin-top: 40px;
  font-size: 25px;
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  `;

const CurDate = styled.div``;

const CurTime = styled.div`
  font-weight: 600;
  `;

export default Clock;