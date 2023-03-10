import { useState } from "react";
import { Application, BingyanLogo, BingyanLogoLeft, BingyanLogoRight, LoginContent, LoginNav, LoginTable, LoginTitle, OAuthLoginPanel } from "./styled";
import { PasswordLoginPanel, SMSLoginPanel } from "./LoginPanel";

import logoPng from '/src/assets/bingyan.png';
import googleSVG from '/src/assets/google.svg';
import appleSVG from '/src/assets/apple.svg';
import githubSVG from '/src/assets/github.svg';

const thirdOAuth = [
  googleSVG, githubSVG
]

function Login() {
  const [loginPanel, setLoginPanel] = useState(1);  //0: Message, 1: Password;

  return (
    <Application>
      <BingyanLogoLeft src={ logoPng } />
      <BingyanLogoRight src={ logoPng } />
      <LoginTable>
        <LoginTitle>
          <img src={logoPng} />
          <header>冰岩作坊单点登录</header>
        </LoginTitle>
        <LoginContent>
          <LoginNav>
            <a className={ loginPanel === 0 ? 'selected' : '' }
              onClick={() => setLoginPanel(0)}>验证码登录</a>
            <a className={ loginPanel === 1 ? 'selected' : '' }
              onClick={() => setLoginPanel(1)}>密码登录</a>
          </LoginNav>
          {
            loginPanel === 0 ? <SMSLoginPanel /> : <PasswordLoginPanel />
          }
          <OAuthLoginPanel>
            <div>第三方账号登录</div>
            <section>
              { thirdOAuth.map(svg => <img src={ svg } />)}
            </section>
          </OAuthLoginPanel>
        </LoginContent>
      </LoginTable>
    </Application>
  );
}

export default Login;