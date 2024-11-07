import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../consts/api";

interface Hotel {
    id: number;
    title: string;
    price: number;
    addr: string; 
    imgUrl: string;
}

const getPopularList = async (setPopularList: (data: Hotel[]) => void) => {
    try {
        const listResult = await fetch(`${API_BASE_URL}/api/products?type=popular`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (listResult.ok) {
            const popularData = await listResult.json();
            if (!popularData.isError) {
                setPopularList(popularData.data);
            } else {
                alert("인기 숙소 데이터를 불러오는데 실패했습니다.");
            }
        } else {
            alert("서버 응답 실패: " + listResult.status);
        }
    } catch (error) {
        console.error("인기 숙소 요청 중 오류 발생:", error);
        alert("인기 숙소 요청 중 오류가 발생했습니다.");
    }
};

const getCheapList = async (setCheapList: (data: Hotel[]) => void) => {
    try {
        const listResult = await fetch(`${API_BASE_URL}/api/products?type=cheap`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (listResult.ok) {
            const cheapData = await listResult.json();
            if (!cheapData.isError) {
                setCheapList(cheapData.data);
            } else {
                alert("할인 숙소 데이터를 불러오는데 실패했습니다.");
            }
        } else {
            alert("서버 응답 실패: " + listResult.status);
        }
    } catch (error) {
        console.error("할인 숙소 요청 중 오류 발생:", error);
        alert("할인 숙소 요청 중 오류가 발생했습니다.");
    }
};

const DomesticPage = () => {
    const [popularList, setPopularList] = useState<Hotel[]>([]);
    const [cheapList, setCheapList] = useState<Hotel[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPopularList(setPopularList);
        getCheapList(setCheapList);
    }, []);

    return (
        <>
            <h2>국내숙소 페이지 입니다.</h2>
            <h3>[ PopularList ]</h3>
            <ul>
                {popularList.map((list) => (
                    <li key={list.id} onClick={() => navigate(`/domestic/${list.id}`)}>
                        <p><strong>{list.title}</strong> (가격: {list.price}원)</p>
                        <img src={list.imgUrl} alt={list.title} width="150" /> 
                    </li>
                ))}
            </ul>
            <br /><br />
            <h3>[ CheapList ]</h3>
            <ul>
                {cheapList.map((list) => (
                    <li key={list.id} onClick={() => navigate(`/domestic/${list.id}`)}>
                        <p><strong>{list.title}</strong> (가격: {list.price}원)</p>
                        <img src={list.imgUrl} alt={list.title} width="150" /> 
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DomesticPage;