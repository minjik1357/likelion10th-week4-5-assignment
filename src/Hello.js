import React, { useEffect, useState } from "react";
function Hello(props) {

  let [ 좋아요, 좋아요변경 ] = useState(0); 
  function 함수() {
    console.log(1);
  }

  return <div>[빠른요약] <span onClick={()=>{ 좋아요변경(좋아요+1) } } >👍</span> {좋아요}
  <br></br>제 이름은 {props.name}, {props.age}살 입니다.
  <br></br>제 MBTI는 {props.mbti} 입니다.
  <br></br>저는 {props.part}파트를 맡고있고, 제 취미는 {props.hobby}입니다. </div>
}

export default Hello;