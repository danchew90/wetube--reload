//Login component
class Login extends React.Component {
  //  1.변수선언
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    };
  }

  //매서드
  LoginClick = () => {
    // console.log("111")
    this.setState({
      isLogged: true,
    });
  };
  LogOutClick = () => {
    this.setState({
      isLogged: false,
    });
  };
  //render
  render() {
    let btn;
    const isLog = this.state.isLogged;
    if (isLog) {
      btn = <LogoutButton onChild={this.LogOutClick} />;
    } else {
      btn = <LoginButton onChild={this.LoginClick} />;
    }
    return <div>{btn}</div>;
  }
}

//로그인 버튼 component

function LoginButton(props) {
  return (
    <div>
      <h1>로그인 해주세요!</h1>
      <button onClick={props.onChild}>Login</button>
    </div>
  );
}
//로그아웃버튼 component
function LogOutButton(props) {
  return (
    <div>
      <h1>로그인 되었습니다.</h1>
      <button onClick={props.onChild}>Logout</button>
    </div>
  );
}
//랜더링
ReactDOM.render(<Login />, document.querySelector("#root"));
