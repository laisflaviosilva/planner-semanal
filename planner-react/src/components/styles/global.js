import  {createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #F3FFED;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
  }

  .App {
    display: flex;
  }

  .menu {
    width: 250px;
    height: 100vh;
    background: #8DA381;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    font-weight: bold;
    label {
      font-size: 14px;
      font-weight: 300;
      margin: 24px;
    }

    input {
      width: 200px;
      outline: 0;
      border: none;
      height: 32px;
      border-radius: 8px;
      padding: 8px;
      background: #FFF;

    }

    select {
      width: 200px;
      border: none;
      height: 32px;
      border-radius: 8px;
      padding: 8px;
      background: #F3FFED;
    }

    option {
      outline: 0;
      background: #FFF;

    }

    input {
      width: 200px;
      border-radius: 8px;
      resize: none;
      overflow: auto;
      background: #FFF;

    }

    h1 {
      position: fixed;
      bottom: 0;
      font-size: 16px;
      padding-bottom: 16px;
      font-family: Arial, Helvetica, sans-serif;
    }

    button {
      border: none;
      border-radius: 8px;
      width: 190px;
      height: 35px;
      background: #08313A;
      color: #FFF;
      margin-top: 25px;
      font-size: 16px;
      :hover {
        filter: brightness(1.2);
      }
    }
  }
  .div-tarefas {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    .box{
      width: 270px;
      height: 300px;
      text-align: center;
      margin: 25px auto;
      background: #8DA381;
      color: #FFF;
      border-radius: 8px;
    }

    h3{
      margin-top: 10px;
      font-size: 16px;
      color: #FFF;
      font-weight: 700;
    }
    .task-card {
      margin: 0 auto;
      width: 230px;
      height: 50px;
      margin: 16px;
      border-radius: 4px;
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      p {
        margin-top: 16px;
        margin-left: 4px;
      }

     .btn-imagens {
       display: flex;
       justify-content: space-between;
       align-items: flex-end;
     }

      img {
        border: none;
        border-radius: 4px;
        margin: 12px 8px;
        padding: 4px;
        width: 50px;
        height: 28px;
        :hover{
          border: 1px solid;
          background: #08313A;
        }
      }
    }
  }
`

export default GlobalStyle