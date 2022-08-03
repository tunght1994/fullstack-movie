import styled from "styled-components";

const WrapPagination = styled.div`
  .flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .flex-container > div {
    padding-top: 10px;
  }
  .paginate-ctn {
    display: flex;
  }
  .round-effect {
    color: #dd4124;
    cursor: pointer;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 16px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-decoration: none;
  }

  .round-effect:hover {
    text-decoration: none;
    background: #dd4124;
    color: #fff;
  }
  .round-effect:hover a {
    text-decoration: none;
    color: #fff;
  }

  .active {
    background: #dd4124;
    color: #fff;
  }
  a:link {
    text-decoration: none;
    color: #dd4124;
  }
`;

export { WrapPagination };
