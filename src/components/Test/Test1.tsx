import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

interface ParentContextProps {
    data: boolean;
    setData: Dispatch<SetStateAction<boolean>>;
}

// createContext의 인자는 공유할 데이터의 초기값
const ParentContext = createContext<ParentContextProps>({
    data: false,
    setData: () => {},
});

const Parent = () => {
    const [data, setData] = useState<boolean>(false);
    const contextValue = {
        data,
        setData,
    }
    return (
        <ParentContext.Provider value={contextValue}>
            <button onClick={() => setData(!data)}> data-toggle </button>
            <Child/>
        </ParentContext.Provider>
    )
}

const Child = () => {
    const {data, setData} = useContext(ParentContext);
    return (
        <>
            <button onClick={() => setData(!data)}>data-toggle-2</button>
            <GrandChild />
        </>
    )
}

const GrandChild = () => {
    // const parentContext = useContext(ParentContext);
    // context: {data: true}

    // console.log(parentContext);
    const {data} = useContext(ParentContext);

    return (
        <div>
            <h2>GrandChild</h2>
            <p>{data ? "Success" : "Fail"}</p>
        </div>
    );
}

export default Parent;