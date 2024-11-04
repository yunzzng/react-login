import { useEffect, useState } from "react";
import axios from "axios";
// 1) api 호출을 통해서 user 정보를 가져와야 함. 단, 초기 렌더링 시에만!
// 2) 1) 호출의 응답값을 `result` 상태에 저장
// 3) 2)을 통해 업데이트된 `result`를 UI로 출력

const API_URL = "https://reqres.in/api/users/2";

interface Result {
  email: string;
  first_name: string;
  last_name: string;
}
const User = () => {
  const [result, setResult] = useState<Result | null>(null);

  const setUserData = async () => {
    try {
      const request = await axios.get(API_URL);
      if (request.statusText === "OK") {
        const { email, first_name, last_name } = request.data.data;
        setResult({ email, first_name, last_name });
      } else {
        alert("실패");
      }
    } catch (err) {
      console.error(err);
      alert("유저 정보 호출 실패");
    }
  };

  useEffect(() => {
    setUserData();
  }, []);

  return (
    <section>
      {result && (
        <>
          Name: {`${result.first_name} ${result.last_name}`}
          <br />
          Email: {result.email}
        </>
      )}
    </section>
  );
};

export default User;