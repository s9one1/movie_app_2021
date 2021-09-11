# 김민정 202030302

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

[09월 01일]
학습내용