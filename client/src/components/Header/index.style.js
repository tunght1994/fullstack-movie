import styled from "styled-components";

const WrapHeader = styled.div`
  min-height: 64px;
  background: #FFFFFF;
  box-shadow: inset 0px -0.5px 0px rgb(0 0 0 / 15%);
  .header-container{

  }
  .header-content {
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1380px;
    margin: auto;
    .header-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 48px;
      .menu-item {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: #000;
      } 
    }
  }
  .header-active{
    width: 100%;
    min-height: 64px;
    position: fixed;
    z-index: 99;
    background: #fff;
    box-shadow: inset 0px -0.5px 0px rgb(0 0 0 / 15%);

  }
`;

export { WrapHeader };
