import React, { useEffect, useState } from "react";
function Hello(props) {

  const [ ThumbsUp, ThumbsUpCount ] = useState(0); 
  function ThumbsUpBtn() {
    console.log(1);
  }

  return <div>[빠른요약] <span onClick={()=>{ ThumbsUpCount(ThumbsUp+1) } } >👍</span> {ThumbsUp}
  <br/>제 이름은 {props.name}, {props.age}살 입니다.
  <br/>제 MBTI는 {props.mbti} 입니다.
  <br/>저는 {props.part}파트를 맡고있고, 제 취미는 {props.hobby}입니다. </div>
}

export default Hello;