import styled from "styled-components";

export const Application = styled.main`
  /* background-color: #FFE4B1; */
  position: absolute;
  width: 100vw;
  top: 0;
  bottom: 0;
  font-family: "PingFang SC";
  overflow: hidden;

  @media (max-width: 450px) {
    background-color: #f4f4f4;
  }
`;

export const BingyanGrayLogo = styled.img`
  display: none;
  position: absolute;
  width: 640px;
  left: calc(50vw - 320px);
  top: auto;
  bottom: -234.58px;
  filter: grayscale(1) brightness(1.35);

  @media (max-width: 450px) {
    display: block;
  }
`;

export const BingyanLineLogo = styled.img`
  position: absolute;
  width: 885.47px;
  left: calc(50vw - 1100.8px + clamp(0px, 100vw - 650px, 862px) * 0.4);
  top: 0;
  bottom: 0;
  margin: auto 0;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const Copyright = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  width: fit-content;
  margin: 0 auto;
  bottom: 30.65px;

  font-size: 20px;
  color: #8c8c8c;

  @media (max-width: 450px) {
    font-size: 12px;
    color: #c5c5c5;
  }
`;

export const AppPanel = styled.section`
  position: absolute;
  left: calc(50vw - 165px + clamp(0px, 100vw - 650px, 862px) * 0.4);
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 330px;
  height: 520px;
  border-radius: 10px;
  background-color: white;

  @media (max-width: 450px) {
    width: 314px;
    left: calc(50vw - 157px);
    height: 473.5px;

    box-shadow: 1px 1px 5px #d0d0d0;
  }
`;

export const BingyanTitle = styled.title`
  /* background-color: #6ee5d7; */
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;

  img {
    width: 54.5px;
    height: 54.5px;
    margin: 0 6px 0 20px;
  }

  header {
    font-size: 32px;
    color: #75654e;
  }

  @media (max-width: 450px) {
    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }

    header {
      font-size: 21px;
    }
  }
`;
