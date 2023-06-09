import styled, { css } from 'styled-components';

export const StyledWordCloudWr = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  position: relative;
  > div {
    width: 100%;
  }
  h2 {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 3.9rem;
    line-height: 1.8;
    width: 100%;
    text-align: center;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .singleWord {
    position: absolute;
    font-size: 0.6rem;
    font-weight: 600;
    line-height: 1.3333;
    user-select: none;
    animation: bounceIn 350ms ease-in-out;
    &-green {
      color: #25e85f;
    }
    &-blue {
      color: #3772ff;
    }
    &-red {
      color: #e71d36;
    }
    &-yellow {
      color: #ffa630;
    }
    &-darkviolet {
      color: #7b4173;
    }
    &-pink {
      color: #de9ed6;
    }
    &-brown {
      color: #843c39;
    }
    &-violet {
      color: #9c9ede;
    }
    &-darkblue {
      color: #6b6ecf;
    }
    &-orange {
      color: #f46036;
    }
    &0 {
      bottom: 30%;
      right: -2%;
      transform: rotateZ(35deg);
    }
    &1 {
      top: 33%;
      transform: rotateZ(35deg);
      right: 25%;
    }
    &2 {
      bottom: 32%;
      left: 22%;
      transform: rotateZ(60deg);
    }
    &3 {
      top: 30%;
      left: 25%;
    }
    &4 {
      top: 33%;
      right: 35%;
      transform: rotateZ(-25deg);
    }
    &5 {
      bottom: 26%;
      left: 8%;
      transform: rotateZ(-65deg);
    }
    &6 {
      top: 15%;
      left: 45%;
      transform: rotateZ(-60deg);
    }
    &7 {
      top: 38%;
      left: 27%;
    }
    &8 {
      top: 25%;
      left: 22%;
      transform: rotateZ(20deg);
    }
    &9 {
      top: 18%;
      right: 36%;
      transform: rotateZ(-50deg);
    }
    &10 {
      bottom: 35%;
      left: 46%;
      transform: rotateZ(-25deg);
    }
    &11 {
      top: 33%;
      left: 45%;
    }
    &12 {
      top: 5%;
      left: 25%;
      transform: rotateZ(70deg);
    }
    &13 {
      bottom: 13%;
      right: 0;
    }
    &14 {
      top: 30%;
      right: 18%;
      transform: rotateZ(70deg);
    }
    &15 {
      top: 30%;
      left: 8%;
      transform: rotateZ(65deg);
    }
    &16 {
      top: 35%;
      left: 8%;
      transform: rotateZ(55deg);
    }
    &17 {
      bottom: 13%;
      right: 21%;
      transform: rotateZ(40deg);
    }
    &18 {
      top: 10%;
      left: 40%;
      transform: rotateZ(-55deg);
    }
    &19 {
      top: 38%;
      right: 15%;
      transform: rotateZ(30deg);
    }
    &20 {
      top: 33%;
      left: 35%;
      transform: rotateZ(65deg);
    }
    &21 {
      bottom: 8%;
      left: 36%;
      transform: rotateZ(-10deg);
    }
    &22 {
      bottom: 28%;
      right: 25%;
      transform: rotateZ(-65deg);
    }
    &23 {
      top: 27%;
      left: 0%;
      transform: rotateZ(-65deg);
    }
    &24 {
      top: 30%;
      left: 38%;
      transform: rotateZ(-65deg);
    }
    &25 {
      bottom: 23%;
      left: 14%;
      transform: rotateZ(30deg);
    }
    &26 {
      bottom: 36%;
      left: 2%;
    }
    &27 {
      top: 37%;
      right: 3%;
      transform: rotateZ(-30deg);
    }
    &28 {
      top: 39%;
      right: -2%;
      transform: rotateZ(30deg);
    }
    &29 {
      top: 25%;
      left: 48%;
      transform: rotateZ(45deg);
    }
    &30 {
      top: 18%;
      right: 0;
      transform: rotateZ(60deg);
    }
    &31 {
      bottom: 15%;
      left: 3%;
      transform: rotateZ(-30deg);
    }
    &32 {
      bottom: 10%;
      left: 15%;
      transform: rotateZ(15deg);
    }
    &33 {
      top: 7%;
      right: 28%;
      transform: rotateZ(-70deg);
    }
    &34 {
      bottom: 3%;
      right: 25%;
      transform: rotateZ(70deg);
    }
    &35 {
      bottom: 24%;
      right: 42%;
      transform: rotateZ(-65deg);
    }
    &36 {
      bottom: 36%;
      right: 10%;
      transform: rotateZ(45deg);
    }
    &37 {
      top: 25%;
      right: 32%;
      transform: rotateZ(-70deg);
    }
    &38 {
      bottom: 36%;
      right: 13%;
      transform: rotateZ(60deg);
    }
    &39 {
      top: 20%;
      right: 25%;
      transform: rotateZ(-70deg);
    }
    &40 {
      top: 10%;
      left: 19%;
      transform: rotateZ(30deg);
    }
    &41 {
      bottom: 30%;
      left: 4%;
      transform: rotateZ(-30deg);
    }
    &42 {
      bottom: 18%;
      right: 20%;
      transform: rotateZ(40deg);
    }
    &43 {
      top: 23%;
      right: 12%;
      transform: rotateZ(30deg);
    }
    &44 {
      bottom: 31%;
      left: 36%;
      transform: rotateZ(-60deg);
    }
    &45 {
      bottom: 28%;
      left: 44%;
      transform: rotateZ(30deg);
    }
    &46 {
      bottom: 14%;
      right: 32%;
      transform: rotateZ(40deg);
    }
    &47 {
      bottom: 20%;
      right: -2%;
      transform: rotateZ(30deg);
    }
    &48 {
      bottom: 24%;
      right: 35%;
    }
    &49 {
      bottom: 33%;
      right: 0%;
      transform: rotateZ(-60deg);
    }
    &50 {
      top: 15%;
      left: 10%;
      transform: rotateZ(25deg);
    }
    &51 {
      bottom: 22%;
      left: 1%;
      transform: rotateZ(30deg);
    }
    &52 {
      top: 15%;
      left: 0;
      transform: rotateZ(55deg);
    }
    &53 {
      bottom: 36%;
      right: 24%;
    }
    &54 {
      bottom: 17%;
      right: 40%;
      transform: rotateZ(40deg);
    }
    &55 {
      bottom: 28%;
      right: 13%;
      transform: rotateZ(40deg);
    }
    &56 {
      top: 20%;
      left: 28%;
      transform: rotateZ(30deg);
    }
    &57 {
      bottom: 35%;
      left: 16%;
      transform: rotateZ(-30deg);
    }
    &58 {
      bottom: 35%;
      left: 31%;
      transform: rotateZ(-30deg);
    }
    &59 {
      bottom: 13%;
      right: 8%;
      transform: rotateZ(-60deg);
    }
    &60 {
      bottom: 25%;
      left: 28%;
      transform: rotateZ(-60deg);
    }
    &61 {
      top: 20%;
      right: 31%;
      transform: rotateZ(-50deg);
    }
    &62 {
      top: 18%;
      right: 12%;
      transform: rotateZ(30deg);
    }
    &63 {
      top: 27%;
      right: -2%;
      transform: rotateZ(30deg);
    }
    &64 {
      bottom: 22%;
      left: 16%;
      transform: rotateZ(50deg);
    }
    &65 {
      bottom: 17%;
      left: 32%;
      transform: rotateZ(-30deg);
    }
    &66 {
      bottom: 5%;
      right: 36%;
      transform: rotateZ(-60deg);
    }
    &67 {
      top: 32%;
      right: 12%;
    }
    &68 {
      top: 10%;
      left: 31%;
      transform: rotateZ(-30deg);
    }
    &69 {
      bottom: 30%;
      right: 33%;
      transform: rotateZ(55deg);
    }
    &70 {
      bottom: 22%;
      right: 15%;
      transform: rotateZ(40deg);
    }
    &71 {
      top: 35%;
      right: 40%;
    }
    &72 {
      bottom: 30%;
      right: 36%;
      transform: rotateZ(55deg);
    }
    &73 {
      top: 15%;
      left: 19%;
    }
    &74 {
      top: 15%;
      right: 40%;
      transform: rotateZ(-50deg);
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      .singleWord {
        font-size: 1.2rem;
        &52 {
          top: 5%;
        }
        &50 {
          top: 0;
        }
        &15 {
          top: 10%;
          left: 3%;
        }
        &40 {
          top: 5%;
        }
        &73 {
          left: 15%;
        }
        &12 {
          left: 20%;
        }
        &3 {
          left: 17%;
        }
        &7 {
          left: 19%;
        }
        &68 {
          top: 0;
        }
        &20 {
          left: 33%;
        }
        &18 {
          left: 36%;
        }
        &24 {
          top: 20%;
          left: 40%;
        }
        &74 {
          right: 44%;
          top: 10%;
        }
        &9 {
          right: 40%;
        }
        &71 {
          top: 30%;
        }
        &61 {
          right: 33%;
          top: 15%;
        }
        &4 {
          right: 36%;
        }
        &Hotelscom {
          right: 26%;
        }
        &1 {
          right: 23%;
        }
        &14 {
          top: 15%;
        }
        &62 {
          top: 0;
        }
        &43 {
          top: 10%;
        }
        &67 {
          top: 26%;
        }
        &19 {
          top: 34%;
        }
        &30 {
          top: 2%;
        }
        &63 {
          top: 20%;
        }
        &27 {
          top: 30%;
          right: 5%;
        }
        &28 {
          right: 0;
        }
        &31 {
          bottom: 2%;
        }
        &51 {
          bottom: 10%;
        }
        &41 {
          bottom: 20%;
          left: 4%;
        }
        &57 {
          left: 12%;
        }
        &32 {
          bottom: 4%;
        }
        &2 {
          bottom: 25%;
          left: 20%;
        }
        &58 {
          left: 26%;
        }
        &65 {
          bottom: 3%;
          left: 26%;
        }
        &44 {
          left: 33%;
          bottom: 25%;
        }
        &21 {
          left: 36%;
          bottom: 0%;
        }
        &45 {
          left: 40%;
        }
        &10 {
          left: 45%;
          bottom: 30%;
        }
        &35 {
          right: 46%;
          bottom: 10%;
        }
        &54 {
          right: 42%;
          bottom: 10%;
        }
        &48 {
          right: 40%;
        }
        &66 {
          bottom: 0;
          right: 38%;
        }
        &46 {
          bottom: 3%;
        }
        &69 {
          bottom: 15%;
        }
        &22 {
          bottom: 15%;
          right: 26%;
        }
        &34 {
          bottom: 0;
        }
        &17 {
          bottom: 5%;
        }
        &42 {
          bottom: 12%;
        }
        &70 {
          bottom: 14%;
        }
        &55 {
          bottom: 16%;
        }
        &38 {
          bottom: 24%;
        }
        &36 {
          bottom: 30%;
        }
        &59 {
          bottom: 5%;
        }
        &49 {
          bottom: 20%;
          right: 2%;
        }
        &13 {
          bottom: 1%;
        }
        &47 {
          bottom: 9%;
        }
        &0 {
          bottom: 20%;
        }
      }
    `)};

  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      transform: scale(0.3, 0.3, 0.3);
    }

    20% {
      transform: scale(1.1, 1.1, 1.1);
    }

    40% {
      transform: scale(0.9, 0.9, 0.9);
    }

    60% {
      opacity: 1;
      transform: scale(1.03, 1.03, 1.03);
    }

    80% {
      transform: scale(0.97, 0.97, 0.97);
    }

    to {
      opacity: 1;
      transform: scale(1, 1, 1);
    }
  }
`;
