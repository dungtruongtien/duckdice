import { Button } from 'antd';
import styled from 'styled-components';

export const RegisterButton = styled(Button)`
    border: 1px solid #f6a623;
    border-radius: 8px;
    line-height: 30px;
    min-width: 30px;
    height: 44px;
    padding: 0 7px;
    background: #f6a623;
    color: #fff;
    margin-right: 1rem;
    min-width: 157px;
`;

export const Board = styled.div`
  max-width: 968px;
  width: 100%;
  padding: 20px;
  background: #3a434b;
  .board-header {
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
    .mode-wrapper {
      display: flex;
      .btn {
        color: #f6a623;
        background: #323a42;
        border-radius: 6px 0 0 6px;
        font-size: 12px;
        text-align: center;
        border-color: #3a434b;
        padding: 0 6px;
        &:hover {
          color: #f6a623;
        }
      }
      .auto-btn {
        color: #8a99a5;
        background: #323a41;
        border-radius: 0;
      }
      .flash-btn {
        color: #8a99a5;
        background: #323a41;
        border-radius: 0 6px 6px 0;
      }
    }
    .setting-wrapper {
      display: flex;
      .btn-wrapper {
        display: flex;
        background: #465059;
        height: 26px;
        padding: 0 0.15rem 0 0.15rem;
        border-radius: 6px;
        margin-right: 0.25rem;
        .btn {
          display: flex;
          cursor: pointer;
          justify-content: center;
          align-items: center;
          color: #8a99a5;
          font-size: 10px;
          border-radius: 6px;
          width: 26px;
          /* height: 22px; */
          padding: 0px;
          padding: 0.25rem;
          &:hover {
            color: #f6a623;
            background: #323a42;
          }
        }
        .egg-btn {
          background: transparent;
        }
      }
      .setting-btn {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 26px;
        height: 26px;
        font-size: 10px;
        background: #465059;
        color: #8a99a5;
        border-radius: 6px;
        &:hover {
          color: #f6a623;
        }
      }
    }
  }

  .board-info {
    background: #353e46;
    padding: 8px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
    .btc-wrapper {
      margin-right: 0.25rem;
      width: 10px;
      height: 10px;
      background: #8a99a5;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      .fa-btc {
        font-size: 8px;
      }
    }
    .game-number {
      display: flex;
      align-items: center;
      .title {
        margin-right: 0.5rem;
        font-size: 12px;
        color: #8a99a5;
      }
      .content {
        color: #fff;
        font-size: 12px;
      }
    }
    .redo-btn {
      color: #8a99a5;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
    }
  }

  .board-game-main {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    .egg-number-wrapper {
      display: flex;
      width: 100%;
      justify-content: center;
      position: relative;
      .egg-number {
        position: relative;
        text-align: center;
        margin-right: 2rem;
        color: #fff;
        font-size: 5rem;
        .number {
          position: absolute;
          color: #000;
          width: 100%;
          top: 10px;
          font-weight: 300;
          font-size: 4rem;
          line-height: 6rem;
        }
      }
      .egg-number:last-child {
        margin-right: 0;
      }
      .high-number {
        position: absolute;
        right: 10rem;
        top: 2rem;
        color: #6b7b88;
        font-size: 25px;
        line-height: 25px;
        margin-top: 1rem;
        text-align: center;
      }
    }
  }

  .board-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    .register-btn-wrapper {
      min-width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn {
      color: #f6a623;
      background: #323a42;
      border-radius: 6px;
      font-size: 12px;
      text-align: center;
      border-color: #3a434b;
      padding: 0 6px;
      height: 27px;
      min-width: 65px;
      &:hover {
        color: #f6a623;
      }
    }
  }

  .board-input {
    .manual-mode {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
      .input-wrapper {
        width: 216px;
        display: flex;
        height: 45px;
        border: 1px solid #5c6b78;
        border-radius: 3px;
        input {
          background: transparent;
          border: 0; 
          padding-left: 0.25rem;
          color: #8a99a5;
          font-size: 14px;
        }
        .btc-icon-wrapper {
          background: #465059;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 34px;
          .btc-wrapper {
            width: 20px;
            height: 20px;
            background: #8a99a5;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            .fa-btc {
              font-size: 10px;
            }
          }
        }
      }
      .title {
        color: #6b7b88;
        font-size: 12px;
        font-weight: 400;
      }
      .win-chance {
        input {
          padding-left: 1rem;
        }
      }
      .payout {
        input {
          padding-left: 1rem;
        }
      }
      .bet-amount {
        .formula-wrapper {
          margin-top: 0.5rem;
          display: grid;
          grid-template-columns: auto auto auto;
          column-gap: 4px;
          .formula-btn {
            border-radius: 6px;
            border: 0;
            background: #465059;
            color: #8a99a5;
            min-height: 27px;
          }
          .formula-btn {
            &:hover {
              color: #f6a623;
            }
          }
        }
      }
      .win-chance {
        .formula-wrapper {
          margin-top: 0.5rem;
          display: grid;
          grid-template-columns: auto auto auto auto;
          column-gap: 4px;
          .formula-btn {
            border-radius: 6px;
            border: 0;
            background: #465059;
            color: #8a99a5;
            min-height: 27px;
          }
          .formula-btn {
            &:hover {
              color: #f6a623;
            }
          }
        }
      }
    }
  }
`;