# 김민정 202030302

// "homepage": "https://s9one1.github.io/movie_app_2021" 

  "homepage" : "c://DeveloperN/movie21/"

[11월10일]
>#### detail.js
```
render() {
        const { location } = this.props
        if (location.state) {
            return (
                <span>{ location.state.title }</span>
            )    
        } else {
            return null
        }
        
    }
```
>#### localhost:3000/#/에서 #없애기
- #이 있으면 크롤링이 안된다.
    - 만들어 배포했을때 검색이 되지 않는다.
-import { HashRouter, Route} from 'react-router-dom'를  
import { BrowserRouter, Route} from  
   'react-router-dom'로 바꾸면 #이 안뜸
```
import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './components/Navigation'
import Detail from './routes/Detail'
```
>#### git.io
- 깃허브에서 호스팅을 해줌

- 깃허브에서 https 주소를 가져온 다음 (https://github.com/s9one1/movie_app_2021.git) package.json에서 github.io로 바꾼다.
(https://s9one1.github.io/movie_app_2021)
```
  "homepage": "https://s9one1.github.io/movie_app_2021"
```
>#### package.json
- scripts에 predeploy,deploy 추가
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```
>#### react 캡슐화된 컴포넌트
- 메인 어플리케이션으로 부터 독립되어있는 컴포넌트를 말한다.
- 컴포넌트 내부에서 발생하는 업데이트, 테스트 케이스, 재사용에 용이하게 컴포넌트를 설계해야한다.
- 내부에 있는게 무엇인지 모르게 한다.
>#### react
- 상호작용이 많은 ui개발에 적합하다.
- 컴포넌트 로직은 javascript로 작성한다.
- 캡슐화된 컴포넌트로 개발되어 재사용이 용이하다.(중요)
- dom과는 별개로 상태를 관리할 수 있다. 
- 기술 스택의 나머지 부분에는 관여하지 않는다.
- 기존 코드와 별개로 개발이 가능하다.
- react native를 이용하면 모바일 앱도 만들 수 있다.
>#### cdn
- https://ko.reactjs.org/docs/cdn-links.html
- access-control-allow-origin: * 허가를 했다. 정상적으로 배포된걸 사용했다.

>#### 바벨
- 커파일러를 상대방의 버전에 맞게 구식으로 바꿔주는것
- jsx바벨이 있어야 해석이 가능에서 링크를 해줘야함
>#### 간단한 컴포넌트
- react component 에서 render()메소드를 사용하는 예제이다.
- render() 메소드는 데이터를 입력받아 화면에 반환하는 역할을 한다.
- 컴포넌트로 전달된 데이터는 render() 안에서 this.props를 통해 접근 가능핟.
- react를 개발하는데 반드시 jsx를 
>#### state가 포함된 component
- 동적인 데이터를 this.state로 접근할 수 있다
- state가 변하면 render()메소드가 다시 호출되어 화면이 갱신된다.
- 예제는 화면이 켜져있는 동안 초를 카운트하는 timer앱이다.
- 초기의state를 0으로 출력한다. 
- 이후 componentdidmount()메소르도 1초에 한번씩 tick()메소드를 호출한다.
- 호출된 tick()메소드는 setstate()를 통해 state를 1씩 증가시킨다.
# [11월 03일]
### 1.ABOUT
![initial](about.png)
### 2.HOME
![initial](home.png)
### 3.영화링크
![initial](hello.png)
>#### 링크를 누른 후 http://localhost:3000/#/movie-detail주소를 다시 입력하면 home화면으로 다시 돌아간다.

>#### 컴포넌트 설치 오류
```
npm WARN read-shrinkwrap This version of npm is compatible with lockfileVersion@1, but
package-lock.json was generated for lockfileVersion@2. I'll try to do my best with it!
npm ERR! Maximum call stack size exceeded
npm ERR! A complete log of this run can be found in:
npm ERR! C:\Users\82102\AppData\Roaming\npm-cache\_logs\2021-10-
27T07_07_17_243Z-debug.log
```
>#### 원인 규명이 되지 않은 오류가 있을 경우
 npm cache clean --force  
 npm rebuild  
 rm -rf node_modules  
 npm install  
  
* 만일 rm명령이 실행되지 않으면 shell을 관리자 권한으로 실행한 후 다시 시도해 본다.
* 그래도 안될 경우는 탐색기에서 삭제하면 되는데 시간이 조금 걸릴 수는 있다.
* 원인 모를 문제가 발생했을 때 cache clean과 rebuild를 통해 많은 부분 해결되기도 한다.
>#### package.json과 package-lock.json 차이
- package.json은 패기지 의존성 관리 파일이다.
- 협업을 할 때는 팀원들 각자의 컴퓨터에 같은 패키지들을 설치해서 동일한 개발환경을 구성해야 하는
게 이때 사용하는 것이 package.json이다. 
-  개인의 프로젝트를 재 생성하거나, 오류가 있을 때 유용하게 사용된다.
- 팀원의 버전이 다를 경우
    - 팀원끼리 npm버전이 일치하는지 확인. $ npm –version
    - node_modules 폴더를 전부 삭제
    - npm cache 삭제.
    - node_modules 재설치. $ npm install
- package.json의 경우는 version range를 사용한다. "express": "~4.16.1“
<details markdown="1">
<summary>1027</summary>

# [10월 27일]
>#### 라우터
- 메뉴를 클릭하면 화면이 이동하게 하는것이 라우터이다.
- 라우터는 react-router-dom패키지를 이용한다.
>npm install react-router-dom
- 라우터는 사용자가 입력한 url을 통해 특정 컴포넌트를 불러준다.(loclahost:3000/about)

>#### HashRouter, Router컴포넌트
- Router에는 2가지 props를 전달할 수 있다.
    - URL을 이용한 path props
    - URL에 맞는 컴포넌트를 불러 주기 위한 component props

>#### About.js 수정하기
- 내용 채우기

>#### Home 컴포넌트를 위한 Route 컴포넌트 추가하기
- localhost:3000에 접속하면 기본으로 보여줄 컴포넌트를 Home 컴포넌트로 하기위해 path props를 "/"로 입력한다.
```
function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Router path = '/' exact={true} component={Home} />
      <Router path='/about' component={About}/>
    </HashRouter>
  )
}
```

>#### Home 링크
- 링크를 클릭할 때마다 리액트가 죽고, 새 페이지가 열리는 문제 발생
    - a 태그의 href속성이 페이지 전체를 다시 그리는 성질을 갖고 있기 때문이다.
    - reac-router-dom의 Link컴포넌트를 사용하면 해결된다.
>#### Navigation 컴포넌트 위치 다시 확인하기
- Link, Router 컴포넌트는 반드시 HashRouter안에 포함되어야 한다.
- HashRouter바깥에 위치한 Nacigation 컴포넌트를 안쪽으로 이동해야한다.

>#### router props
- route props를 이용해 영화 카드를 누르면 상세 정보를 보여주는 기능을 만든다.
- route props는 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props를 말한다.
- Route 컴포넌트가 그려줄 컴포넌트에는 항상 이 props가 전달되며, 이 props는 원하는 데이터를 담아 보낼 수 있다.
- 데이터를 담아 보내려면 Navigation 컴포넌트에 있는 Link컴포넌트의 to props의 구조를 바꿔야 한다.
- pathname은 URL을 의미하며, state는 우리가 route props에 보내줄 데이터를 의미한다.

</details>

<details markdown="1">
<summary>1013</summary>

# [10월 13일]
>#### Movie 컴포넌트 만들기
- src폴더에 Movie.js 파일을 새로 만든다.
- 컴포넌트의 기본 골격을 작성한다.
- 함수형 컴포넌트로 작성하기로 한다.
- Movie에 넘어와야 하는 영화 데이터를 정의하고,관리하기 위해 prop-types를 사용한다. 
```
import PropTypes from 'prop-types';

function Movie() {
    return <h1></h1>;
}

Movie.propTypes = {};

export default Movie;
``` 
>#### Movie.propTypes 작성하기
-  id를 Movie.propTypes를 추가 한다. 
    - PropType.number.isRequired로 작성한다.
- year, title, summary, poster를 각각 Movie.propTypes에 추가 한다.
    - poster props는 영화 포스터 이미지 주소를 저장하기 위한 것이다
```
Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
};
```
>#### axios.get() 수정하기
- axios.get()에 yts-proxy.now.sh/list_movies.json?sort_by=rating을 전달한다
```
getMovie = async () => {
  const {
    data: {
      data: {movies}
    }
  }=await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
```
>#### Movie 컴포넌트에서 props를 추가하고 출력해보기
- Movie 컴포넌트에서 id, title, year, summary, poster props를 받아 출력할 수 있도록 수정한다.
- map() 함수로 출력
```
function Movie({ year, title, summary, poster }) {
    return <h4>{title}</h4>;
}
```
>####  App 컴포넌트에서 Movie컴포넌트 그리기
- 로딩이 완료 되면 실행되는 자리에 movies.map()을 사용한다.
- map() 함수의 첫 번째 인자로 컴포넌트를 반환하는 함수를 전달하면 된다
```
render(){
      const { isLoading, movies } = this.state;
      return <div>{isLoading ? 'Loading...' : movies.map()}</div>;
}
```
>####  map() 함수에 컴포넌트를 반환하는 함수 전달하기
- console탭에 영화 데이터를 출력한 다음, 아무것도 반환하지 않는 함수를 전달해 본다.

>#### Movie 컴포넌트를 반환하도록 movies.map() 수정하기
- App.js에 Movie 컴포넌트를 import한 다음, movies.map()에 전달한 함수가 <Movie />를 반환하도록 한다.
```
import Movie from './Movie'
```
>#### Movie컴포넌트에 props 전달하기
- props를 모두 전달해야 한다.
- poster props의 경우 키 이름이 medium_cover_image이므로 movies.medium_cover_image라고 작성한다.
```
    id = {movie.id} 
    year = {movie.year}
    title = {movie.title}
    summary = {movie.summary}
    poster = {movie.medium_cover_image}
```
>#### App.css 파일 작성하기
- 배경색을 어두운 색으르 바꾼다.
```
body {
    background-color:#2f2f2f;
}
```
</details>

<details markdown="1">
<summary>1006</summary>

[10월 6일]

>##### axios 설치하기
-  javascript에서는 영화 데이터를 로딩 할 때 fetch()함수를 사용한다. 
```
> npm install axios
```
>##### YTS영화 데이터 API 살펴보기
- 브라우저 주소창에 yts.it/api 라고 입력하고, YTS영화 데이터 API 사이트에 접속
- ListMoviesApi를 사용한다.
- API는 특정 주소를 입력하면 그 주소에 맞는 결과를 보내 준다.
>##### 영화 목록 데이터 확인해 보기
- 브라우저에서 Endpoint의 주소 중 json으로 끝나는 주소를 입력한다.
```
https://yts.mx/api/v2/list_movies.json
```
>##### JSON Viewer 확장 도구 설치하기
- JSON Viewer라는 확장 도구를 설치하면 정상적으로 볼 수 있다.

>##### https://yts.mx/api/v2/list_movies.json
- status: 응답상태 메시지
- data: 영화 데이터
- movie_count: API가 보내준 영화 데이터의 개수
- limit: 보내준 데이터의개수
- movies키의 서브키로 id, url, imdb_code, title 등을 제공한다.

>##### 노마드 코더 영화 API를 사용하자
- YTS의 endpoint /list_movies.json을 사용하려면 yts-proxy.now.sh에 /list_movies.json을 붙이
면 된다.
- 만일 YTS의 다른 endpoint와 함께 노마드 코더 영화 API를 사용하려면,
yts-proxy.now.sh에 endpoint를 붙이면 된다.
```
https://github.com/serranoarevalo/yts-proxy
```

| endpoint | YTS API | 노마드 코더 영화 API |
|:---:|:---:|:---:|
| list_movies | yts.mx/api/v2/list_movies.json | yts-proxy.now.sh/list_movies.json |
| movie_details | yts.mx/api/v2/movies_details.json | yts-proxy.now.sh/movies_details.json |


>##### 영화 정보를 더 자세히 보기 위한 조건 추가
- yts-proxy.now.sh/list_movies.json에 movie_id를
추가

>##### 노마드 코더 영화 API를 영화 앱에서 호출하기
- API를 사용하려면 axios를 import한 다음, componentDidMount()함수에서 axios로 API를 호출
- axios.get()함수의 인자에 URL을 전달하여 API를 호출
- setTimeout은 이제 사용할 필요가 없으니 삭제

>##### getMovies()함수 기다린 다음, axios.get() 함수가 반환한 데잍터 잡기
- getMovies()함수를 만들고, 이 함수 안에서 axios.get()이 실행하도록 한다.
- axios.get()의 return값은 movies에 저장한다.
-  componentDidMount()함수가 실행되면 this.getMovie()가 실행된다.

>##### getMovies() async 붙이고, axios.get()에 await붙이기
- 시간이 필요하다는 것을 알리기 위해서는 async, await 키워드가 필요하다.
-  시간이 필요하다는 것을 알리려면 async를 ()앞에 붙이고, 실제 시간이 필요한 대상인 axios.get()함수 에는 await을 붙인다.

>##### movies state에 영화 데이터 저장하기
- this.setState({ movies: movies })와 같이 작성해서 movies state에 영화 데이터를 저장
- this.setState({ movies: movies })를 this.setState({ movies })로 수정한다.
>##### isLoading state를 true에서 false로 업데이트 하기
- 서 “영화 데이터의 출력”를 출력하려면 isLoading state의 값을 true에서 false로 업데이트한다.
- 앱이 실행되면 처음에는 Loading...이 화면에 나타나다가 조금 시간이 지나면 We are ready로 변한다.
-  movies state를 출력한다.

</details>




<details markdown="1">
<summary>0929</summary>

[09월 29일]

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