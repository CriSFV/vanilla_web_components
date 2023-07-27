import { css } from "lit";

export const commonStyles = css`
  .container {
    min-height: 200px;
    border: 1px solid black;
    padding: 10px;
  }
  button {
    background-color: grey;
    border-radius: 2px;
    min-width: 80px;
    min-height: 30px;
    color: white;
  }
  .buttons_container {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
  .container form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
  label {
    display: grid;
    grid-template-columns: 1fr 4fr;
    width: 60%;
  }
`;
