import styled from "styled-components";

const WrapHeader = styled.div`
  background: rgba(18,24,41,0.8);
  .header-content {
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1260px;
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
        color: #a8aebf;
      }
    }
  }
`;

export { WrapHeader };
