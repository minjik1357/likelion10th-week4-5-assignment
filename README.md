[개념과제]

  클래스형 컴포넌트는 state와 lifeCycle 관련 기능들을 사용할 수 있으며, 메모리 자원을 함수형 컴포넌트보다 조금 더 사용한다. 그리고 임의 메서드를 정의할 수 있다.


  함수형 컴포넌트는 클래스형과는 반대로 state와 lifeCycle 관련 기능을 사용할 수 없지만 Hook을 통해 해결할 수 있으며, 메모리 자원을 함수형 컴포넌트보다 덜 사용한다. 또한 컴포넌트 선언이 편하다는 특징을 가지고 있다.


  함수형 컴포넌트를 사용하는 이유:
    1. immutable하다. 리랜더링 될 떄의 값을 유지한다.

    2. props에 따른 랜더링 결과를 보장받는다.

    3. 코드가 간결해지고 가독성이 좋다.


  렌더링(rendering)은 DOM생성을 위해 함수가 호출될 때 혹은 클래스 기반 메서드가 호출될 때이다.
    [DOM 생성 -> Render Tree 생성 -> Layout -> Paint]
      1. DOM 생성: HTML, CSS를 다운받아 Object Model로 만듦.

      2. Render Tree 생성: DOM Tree와 CSSOM Tree를 이용하여 Render Tree 생성. DOM Tree에는 요소들의 구조와 텍스트만 존재하지만 Render Tree에는 스타일 정보가 설정되어있으며, 실제 화면에 표현되는 노드들로만 구성됨.

      3. Layout: Render Tree 노드들이 가지고 있는 스타일과 속성에 따라서, 뷰포트(Viewport)내에서, 브라우저 화면의 어느 위치에 어느 크기로 출력될지 계산

      4. Paint: Layout 계산이 완료되면 요소들을 실제 화면에 그림. 이전 단계에서 이미 요소들의 위치와 크기, 스타일 계산이 완료된 Render Tree를 이용해 실제 픽셀 값을 채워넣음.


  마운트(mount)는 리액트가 처음으로 구성요소를 렌더링하고 실제로 초기 DOM을 빌드할 때이다.
    [constructor -> getDerivedStateFromProps -> render -> componentDidMount]
      1. constructor: 컴포넌트가 새로 만들어질 때마다 호출되는 클래스 생성자 메서드. 각 컴포넌트들의 state를 정의할 수 있음.

      2. getDerivedStateFromProps: 부모 컴포넌트로부터 받은 props를 state와 동기화하는 함수.

      3. render: 준비된 UI를 렌더링하는 메서드.

      4. componentDidMount: 컴포넌트가 웹브라우저에 나타난 뒤 호출되는 메서드.


  컴포넌트가 렌더링 될 때에는 마운트 과정을 거치는데, props나 state가 변경이 되어 렌더링 될 때는 마운트를 거치지 않는다. 

