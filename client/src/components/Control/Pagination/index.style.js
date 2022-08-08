import styled from "styled-components";

const WrapPagination = styled.div`
    .pagination{
      margin: 0 auto;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      list-style-type: none;
      li{
        cursor: pointer;
      }
      .selected{
        width: 50px;
        height: 50px;
        background: #136dbe;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 600;
      }
    }
`;

export { WrapPagination };
