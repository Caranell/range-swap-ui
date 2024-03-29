import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as RangeSwapSvg } from "../assets/RangeSwap.svg";
import ConnectWalletButton from "./components/ConnectWalletButton";

const HeaderContainer = styled.div``;

const HeaderLine = styled.div`
  height: 2px;
  width: 148px;
  top: 38px;
  left: 46.5%;
  position: absolute;
  background-image: linear-gradient(90deg, #785fda 0%, #ff6d41 100%);
`;

const RangeSwapText = styled(RangeSwapSvg)`
  margin: 30px auto;
  display: block;
`;

export const Header = () => (
  <HeaderContainer>
    <RangeSwapText />
    <HeaderLine />
    <div style={{ position: "absolute", top: "0", right: "0", margin: "30px" }}>
      <ConnectWalletButton />
    </div>
  </HeaderContainer>
);
