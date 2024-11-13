import PageComponent from "../components/Test/Dropdown";
import Parent from "../components/Test/Test1";
import Form from "../components/Test/Test2";
import { API_BASE_URL } from "../consts/api";

const HomePage = () => {
    console.log(API_BASE_URL);
    // useEffect(()=> {
    //     throw Error("This is CustomError");
    // }, []);

    return (
        <div>
            <h2 className="underline bg-black text-red">This is HomePage</h2>
            <Parent/>
            <Form/> <br/> <br/>
            <PageComponent/>
        </div>
    );
};

export default HomePage;