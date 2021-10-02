# 김민정 202030302

[09월 29일]

<details markdown="1">
<summary>0929</summary>

>##### 상대경로 이미지 삽입 방법
- 이미지가 적을 경우 import를 사용한다.
1. public 폴더에 images폴더를 생성한다.
2. 필요한 곳에 <img src="image/[이미지 이름]">형태로 태그를 작성한다.

##### 음식 앱에 prop-types 도입하기

>##### 음식 데이터에 rating 추가하기
- foodLike 배열의 각 요소에 rating을 추가한다.
- 값의 자료형은 number로 한다.
Rating props를 Food 컴포넌트에 전달하면서 값을 검사한다.
- prop-types도구를 사용하여 자료형을 검사한다.
```
명령 프롬포트
> npm install prop-types
```

>##### prop-types 정상 설치 여부 확인
- Package.json 파일을 열어 dependencies 키에 있는 값을 살펴본다.
- Prop-types가 등록되어 있으면 정상 설치 됨.

>##### prop-types 적용하기
- import PropTypes from 'prop-types';를 App.js파일 맨 위에 추가
- ration props를 Food 컴포넌트에 전달한다.

>##### Food.propTypes 작성
- Food.propType에 객체 적어 주기
- 모든 props는 문자열이고 반드시 있어야 한다는 조건 추가
- 콘솔 탭을 확인하면 경고 메세지가 보인다.

>##### Food.propTypes의 rating 키 값 확인하기
- isRequired는 필요하다.
- 'rating에는 string이라는 자료형이 반드시 필요하다'

>##### prop-types 경고 해결하기
- rating: PropTypes.string.isRequired 대신 rating: PropTypes.number.isRequired 로 교체

>##### 다른 종류의 prop-types 경고 해결하기
- picture props의 이름을 image로 바꾸기
- Food 컴포넌트에 picture라는 이름의 props가 필요한데, 그 값이 undefined다.

>##### render() 함수
- render( ) 함수 내에서 return문을 사용한다
- 함수형 컴포넌트는 return문이 JSX를 반환하지만, 클래스형 컴포넌트는 render()함수가 JSX를 반환한
다.
```
import React, {Component} from 'react'

class App extends Component {
    render() {
        return (
            <h1> I am a class component </h1>
        )
    }
}

export default App
```
</details>



<details markdown="1">
<summary>0915</summary>

[09월 15일]

### JSX 
___

- 컴포넌트는 자바스크립트와 html을 조합한 jsx라는 문법을 사용해서 만든다.
- jsx의 문법은 js와html 문법의 조합한 것이다.
>##### Potato 컴포넌트 만들기
- import 구문을 입력해야 리액트가 jsx를 이해할 수 있어 반드시 입력
```
import React from 'react';
```
>##### Potato()함수를 작성한다.
- 컴포넌트를 작성할 때 이름은 대문자로 시작해야 한다.
```
import React from 'react';
function Potato() {

}
```
>##### Potato 컴포넌트가 JSX를 반환하도록 만든다.
```
import React from 'react';

function Potato() {
    return <h3>I love potato</h3>;
}
```
>##### 마지막 줄에 export 구문을 다음과 같이 추가한다.
```
import React from 'react';

function Potato() {
    return <h3>I love potato</h3>;
}
```
>##### Photo 컴포넌트 사용하기
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App;

ReactDOM.render(<App /><Potato/>, document.getElementById('root'));
```
</details>
<details markdown="1">
<summary>0908</summary>

[09월 08일]
>#### 수업 준비
1. create-react-app(별다른 개발환경 구축없이 개발을 바로 시작할 수 있도록 프로젝트 구조, 설정 작업 등을 자동으로 진행해 주는 도구)
2. create-react-app으로 리액트 앱 만들기(작업 디렉토리를 미리 만들고 실행하면 편함, 수업에서는 movie_app_2021로 통일, 명령은> npx create-react-app movie_app_2021)
3. 프로젝트 폴더 선택하기
4. README.md 파일 수정하기(매주 학습내용을 작성한다.)
5. package.json 파일 수정하기(test,eject 명령어 삭제하고 파일 저장)
6. 리액트 앱 실행하기(명령 프롬프트에서 npm start로 앱을 실행)
7. 리액트 앱 종료하기(종료하려면 프롬포트에서 Ctrl + c를 누른다.)
8. 깃허브에 리액트 앱 업로드하기
9. 리액트 앱 살펴보고 수정하기
10. index.js파일 수정하기
11. App.js 파일 수정하기
12. index.html 수정해 보기
>#### 리액트 앱
1. 리액트 앱 실행, 터미널 종료하고 브라우저 새로 고침
2. 리액트 앱 다시 실행하고 코드 수정하기
```
import React from 'react';

function App() {
    return (
        <div>
        <h1>Hello!!!!</h1>
        </div>
    );
}

export default App;
```
>#### 리액트 기초 개념 
1. 컴포넌트
- function으로 정의 내린 곳을 컴포넌트라고 한다.
- App()함수가 정의되어 있고, 함수는 html문서를 return해 주고 있는것을 App컴포넌트를 정의했다고 한다.
- index.js 파일로 컴포넌트의 사용 알아보기
2. JSX
- js와 html 문법의 조합한 것으로 사용하다 보면 자연스럽게 익힐 수 있다.
>#### Potato 컴포넌트 만들기
1. src폴더 안에 Potato.js 파일 만들기
2. 첫 글자는 대문자로
3. import 구문을 입력해야 리액트 jsx를 이해할 수 있다.
```
import React from 'react';
```
4. Potato()함수 작성
```
import React from 'react';
function Potato() {

}
```
5. Potato 컴포넌트가 jsx를 반환
```
import React from 'react';
function Potato() {
    return <h3>I love potato</h3>;
}
```
6. 마지막 줄에 export 구문 추가
```
import React from 'react';
function Potato() {
    return <h3>I love potato</h3>;
}

export default Potato;
```
</details>

<details markdown="1">
<summary>0901</summary>
[09월 01일]
>#### 교재는 Do it! 클론 코딩 영화 평점 웹서비스
>#### 클론 코딩
- 실제로 존재하는 사이트나 앱의 코드를 보며 그래도 따라 만들거나 습득하는 학습 방법
- 이론의 양이 많음
- 실습의 완성도가 떨어지고, 실제 프로젝트에서의 활용도가 떨어짐
- 완성된 프로젝트를 클론해서 하나씩 완성해 가는 실습위주의 학습
- 자기주도 학습으로 코딩을 하는데 도움을 줌
>#### 클론 코딩 수업 준비하기
- node.js 설치
- npx 설치
- vscode 설치
- git 설치
</details>