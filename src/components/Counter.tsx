import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClickIncrease = () => {
        // useState는 '비동기' 함수입니다.
        // [비동기, 동기] 모두 순서대로 실행됨
        // 다만 [비동기]는 코드의 해석이 끝나지 않음에도 다음 코드로 넘어가요
        // [동기]는 무조건 해당 코드의 실행이 끝나야지만, 다음 코드로 넘어가요
        
        setCount(count + 1);
        console.log("count ::", count); // count: ?
    };

    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClickIncrease}>+</button>
        </>
    );
};

export default Counter;