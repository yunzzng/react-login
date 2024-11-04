import './App.css'
import Signup from './components/Signup';
// import Layout from './components/Layout'
import Login from './components/Login'


function App() {
  return (
    <>
      {/* <Layout title={"Layout Title"} desc={"Layout Desc"} /> */}
      <Signup />
      <Login />
    </>
  )
}

export default App;

/**

  브라우저에서 데이터를 저장하는 방법
    1) Cookie
      ===> key-value 구조의 저장 형식(그렇다고 객체 형식은 아님!)
      ===> ex) "key=value; ke2=value2;"
      ===> 보안적인 특성 때문에 httpOnly, Secure, Expire(유효기간) 등의 옵션을 가질 수 있다.
      ===> 영구적으로 저장이 가능(단, ExpireDate 없는 경우)
      ===> 영구적으로 저징이 가능한 이유는?
      ===> 브라우저 쿠키 저장 ---> PC(하드디스크, ROM) Chrome > Cookie 저장소에 저장

    2) Session Storage
      ===> 휘발성 데이터(탭, 사이트 닫으면 날아감)
      ===> 날아가는 이유는? ---> 브라우저 메모리(RAM)에 저장되기 때문에
      ===> key-value 
      ===> ex) ession Storage.setItem("token", "thisistokenvalue");

    3) Local Storage
      ===> 데이터 영구적인 저장이 가능
      ===> key-value
      ===> value는 무조건 string만 저장 가능 (객체 X, Array X, number -> string)
      ===> 가능한 이유 ---> 

**/