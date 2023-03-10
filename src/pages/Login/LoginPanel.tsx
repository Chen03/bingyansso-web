import styled from "styled-components";
import { InputBox } from "../../components/InputBox";
import userSVG from '/src/assets/user.svg';
import lockSVG from '/src/assets/lock.svg'
import { useState } from "react";

export function PasswordLoginPanel() {
  return (
    <Panel>
      <InputBox logoSrc={ userSVG } placeholder="请输入用户名/手机号/邮箱" autoComplete="username" />
      <InputBox logoSrc={ lockSVG } placeholder="请输入密码" type="password" />
      <LoginButton>登 录</LoginButton>
      <SignupWrapper>
        <a>忘记密码？</a>
        <span>还没有账号，<a>立刻注册</a></span>
      </SignupWrapper>
    </Panel>
  )
}

export function SMSLoginPanel() {
  const SMSWrapper = styled.div`
    display: flex;
    align-items: center;
  `

  return (
  <Panel>
    <InputBox logoSrc={ userSVG } placeholder="请输入手机号" autoComplete="username" />
    <SMSWrapper>
      <InputBox logoSrc={ lockSVG } placeholder="请输入短信验证码" />
      <RequestSMSButton />
    </SMSWrapper>
    <LoginButton>登 录</LoginButton>
    <SignupWrapper>
      <span></span>
      <span>还没有账号，<a>立刻注册</a></span>
    </SignupWrapper>
  </Panel>
  )
}

const Panel = styled.section`
  width: 261px;
  margin: 0 auto;

  > * {
    margin: 30px auto;
  }
`

const LoginButton = styled.button`
  width: 261px;
  height: 38px;
  display: block;
  margin: 0;

  color: white;

  background: #FFB448;
  border-radius: 2px;
  border: none;

  font-size: 15px;
  
  cursor: pointer;
`;

const SignupWrapper = styled.div`
  font-size: 11px;
  color: #BDBDBD;
  margin-top: 15.5px;

  display: flex;
  justify-content: space-between;

  a {
    color: #C78527;
    cursor: pointer;
  }
`

function RequestSMSButton() {
  const SMSButton = styled.a`
    color: #C78527;
    font-size: 13px;
    cursor: pointer;
  `

  const [requesting, setRequesting] = useState(false);

  return (
    <SMSButton style={{opacity: requesting ? 0.3 : 1}} onClick={() => setRequesting(true)}>
      {
        requesting ? '已发送' : '发送验证码'
      }
    </SMSButton>
  )
}