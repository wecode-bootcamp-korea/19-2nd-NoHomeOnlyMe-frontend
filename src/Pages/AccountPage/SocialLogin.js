import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../Utils/config';

function SocialLogin({ changeModalOpen }) {
  const { Kakao } = window;
  const history = useHistory();
  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: res => {
        fetch(`${API}/user/signin`, {
          method: 'POST',
          body: JSON.stringify({
            access_token: res.access_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('Kakao_token', res.access_token);
            if (res.access_token) {
              alert('나만방없 에 오신걸 환영합니다!');
              history.push('/map');
              changeModalOpen(false);
            }
          });
      },
      fail: err => {
        alert(JSON.stringify(err));
      },
    });
  };
  return <Button onClick={kakaoLogin}>카카오톡으로 시작</Button>;
}
export default SocialLogin;
const Button = styled.button`
  display: inline-block;
  width: 170px;
  height: 50px;
  color: #222;
  background-color: #f7e506;
  border: none;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
`;
