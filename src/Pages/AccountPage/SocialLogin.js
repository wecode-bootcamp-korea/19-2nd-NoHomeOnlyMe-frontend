import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
function SocialLogin() {
  const { Kakao } = window;
  const history = useHistory();
  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: res => {
        console.log(res);
        fetch('http://10.58.6.189:8000/user/signin', {
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
  width: 170px;
  height: 50px;
  color: rgb(34, 34, 34);
  background-color: rgb(247, 229, 6);
  font-size: 14px;
  border: 0px;
`;
