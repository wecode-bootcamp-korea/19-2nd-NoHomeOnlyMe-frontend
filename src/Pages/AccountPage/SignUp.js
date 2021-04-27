import React from 'react';
import styled from 'styled-components';

export default function SignUp({ changeType, changeModalOpen }) {
  return (
    <Signup>
      <Header>
        <span>약관동의</span>
        <XIcon
          onClick={() => changeModalOpen(false)}
          className="fas fa-times"
        />
      </Header>
      <Main>
        <Dl>
          <dt>
            <span>
              만 14세 이상입니다.<strong>(필수)</strong>
            </span>
            <i className="far fa-check-circle" />
          </dt>
        </Dl>
        <Dl>
          <dt>
            <span>
              다방 서비스 이용약관 동의<strong>(필수)</strong>
            </span>
            <i className="far fa-check-circle" />
          </dt>
          <dd>
            <strong className="title">제1조 (약관의 적용목적)</strong>
            <p>
              이 약관은 스테이션3(이하 “회사”라 한다)가 운영하는 “다방”에서
              제공하는 인터넷과 모바일 서비스(이하 “서비스”라 한다)를 이용함에
              있어 “회사”와 “이용자”의 권리, 의무 및 책임 사항, 기타 필요한
              사항을 규정함을 목적으로 합니다. 유료 서비스 상품의 경우 “유료
              서비스 이용약관”을 따릅니다. 제2조 (용어의 정의) “서비스”라 함은
              “회사”가 “회원”이 등록한 “매물”을 “이용자”에게 제공하기 위하여
              컴퓨터 등 정보 통신 설비를 이용하여 설정한 가상의 중개장을
              말합니다. “이용자”라 함은 “다방”이 제공하는 서비스를 받는 “회원"
              또는 “비회원”을 말합니다. “회원”은 “개인 사용자 회원”과
              “공인중개사 회원”을 의미합니다. “개인 사용자 회원”이라 함은
              “회사”가 정한 소정의 절차를 거쳐서 회원 가입을 하고 “서비스”를
              이용하는 개인으로서, 매물 정보를 이용하는 자 뿐만 아니라 자신이
              소유하거나 임대할 수 있는 권한을 가진 “매물”을 등록하는 자를
              포함합니다. 아울러 “회사”는 서비스의 원활한 제공을 위해 회원의
              등급을 “회사” 내부 규정에 따라 나눌 수 있습니다. “공인중개사
              회원"이라 함은 “회사”가 정한 소정의 절차를 거쳐서 회원 가입을 한
              부동산 중개업자로서, 관련 법령에 따라 중개사무소 개설등록을 하고
              “다방”에 “매물”을 제공할 수 있는 권한을 가진 “회원”을 말합니다.
              “비회원”이라 함은 회원으로 가입하지 않고 “회사”가 제공하는
              서비스를 이용하는 자를 말합니다. “매물”이라 함은 다방의 개인
              사용자 회원 또는 부동산 소유주의 의뢰를 받은 공인중개사 회원이
              “다방”에 게시한 부동산 광고물을 의미합니다. “콘텐츠”라 함은
              “회원”이 제공한 각종 정보, 콘텐츠로서 서비스 상에 게시된 모든 글,
              사진, 동영상, 각종 파일, 링크, 회원소개 등(부호, 문자, 영상, 그림
              등 그 형태를 불문한다)을 말합니다. “분양정보”라 함은 “회사”가
              “이용자”에게 제공하는 공동주택(아파트, 오피스텔, 도시형생활주택
              등)의 분양에 관련된 모든 글, 사진, 동영상 등의 정보를 말합니다.
              “다방 매물관리규정”이라 함은 회사가 별도로 규정하여 공개한 부동산
              “매물” 등록 시 회원의 준수 사항 및 위반 시 제재 규정을 의미합니다.
              “허위 매물”이라 함은 “다방 매물관리규정”에 명시한 허위 매물 기준에
              부합하는 매물을 의미합니다. “유료 서비스”라 함은 다방, 다방프로
              서비스를 통해 유료로 이용 가능한 회사가 제공하는 각종 온라인
              디지털 콘텐츠 및 제반 서비스를 말합니다. 정보 및 광고 게시 서비스
              등이 포함됩니다. 위 항에서 정의되지 않은 이 약관상의 용어의 의미는
              일반적인 거래 관행에 의합니다.
            </p>
          </dd>
        </Dl>
        <AgreeAll>
          <span>
            모두 동의합니다.<strong>(필수)</strong>
          </span>
          <i className="far fa-check-circle" />
        </AgreeAll>
      </Main>
      <Submit onClick={() => changeType('signupform')}>확인</Submit>
    </Signup>
  );
}

const Signup = styled.article`
  width: 540px;
  margin: 0 auto;
  background-color: white;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 81px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(216, 216, 216);

  & > span {
    font-size: 22px;
    color: #222;
  }
  & > i {
    width: 16px;
    height: 16px;
    font-size: 20px;
  }
`;

const XIcon = styled.i`
  width: 10px;
  height: 10px;
  font-size: 21px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;

  & * {
    color: #222;
  }
`;

const Dl = styled.dl`
  margin-bottom: 20px;

  & > dt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 480px;
    margin-bottom: 10px;

    & > i {
      color: rgb(214, 214, 214);
      font-size: 25px;
    }

    & > span > strong {
      margin-left: 2px;
      color: #1564f9;
      font-size: 16px;
    }
  }

  & > dd {
    width: 480px;
    height: 130px;
    padding: 10px;
    background-color: rgba(233, 233, 233, 0.507);
    line-height: 20px;
    overflow-y: scroll;

    & > strong {
      font-size: 13px;
      font-weight: bold;
      color: #222;
    }

    & > p {
      font-size: 13px;
      color: #222;
    }

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #a3a3a3;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(233, 233, 233, 0.507);
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
  }
`;

const AgreeAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > i {
    color: rgb(214, 214, 214);
    font-size: 25px;
  }

  & > span {
    font-size: 16px;
    line-height: 25px;
    color: #222;
    margin-right: 10px;
  }
`;

const Submit = styled.button`
  width: 540px;
  height: 70px;
  color: white;
  outline: none;
  border: none;
  background-color: #1a5ae8;
  font-size: 17px;
`;
