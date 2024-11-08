import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_BASE_URL } from "../consts/api";
import './css/DomesticPage.css';

interface Hotel {
    id: number;
    title: string;
    price: number;
    addr: string;
    imgUrl: string;
}

// const getPopularList = async (setPopularList: (data: Hotel[]) => void) => {
//     try {
//         const listResult = await fetch(`${API_BASE_URL}/api/products?type=popular`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         if (listResult.ok) {
//             const popularData = await listResult.json();
//             if (!popularData.isError) {
//                 setPopularList(popularData.data);
//             } else {
//                 alert("인기 숙소 데이터를 불러오는데 실패했습니다.");
//             }
//         } else {
//             alert("서버 응답 실패: " + listResult.status);
//         }
//     } catch (error) {
//         console.error("인기 숙소 요청 중 오류 발생:", error);
//         alert("인기 숙소 요청 중 오류가 발생했습니다.");
//     }
// };

// const getCheapList = async (setCheapList: (data: Hotel[]) => void) => {
//     try {
//         const listResult = await fetch(`${API_BASE_URL}/api/products?type=cheap`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         if (listResult.ok) {
//             const cheapData = await listResult.json();
//             if (!cheapData.isError) {
//                 setCheapList(cheapData.data);
//             } else {
//                 alert("할인 숙소 데이터를 불러오는데 실패했습니다.");
//             }
//         } else {
//             alert("서버 응답 실패: " + listResult.status);
//         }
//     } catch (error) {
//         console.error("할인 숙소 요청 중 오류 발생:", error);
//         alert("할인 숙소 요청 중 오류가 발생했습니다.");
//     }
// };

// getPopularList + getCheapList
const getHotelList = async (type: string, setList: (data: Hotel[]) => void) => {
    try {
        const listResult = await fetch(`${API_BASE_URL}/api/products?type=${type}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (listResult.ok) {
            const data = await listResult.json();
            if (!data.isError) {
                setList(data.data);
            } else {
                alert(`${type} 데이터를 불러오는데 실패했습니다.`);
            }
        } else {
            alert("서버 응답 실패: " + listResult.status);
        }
    } catch (error) {
        console.error(`${type} 요청 중 오류 발생:`, error);
        alert(`${type} 요청 중 오류가 발생했습니다.`);
    }
};

const DomesticPage = () => {
    const [popularList, setPopularList] = useState<Hotel[]>([]);
    const [cheapList, setCheapList] = useState<Hotel[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getHotelList("popular", setPopularList); 
        getHotelList("cheap", setCheapList); 
    }, []);

    const [searchParam, setSearchParam] = useSearchParams();
    console.log(searchParam.get("page"));
    // http://localhost:5173/domestic?page=3

    const handleClickTab = (category: number) => {
        setSearchParam({ category: category.toString() });
    }

    return (
        <>
            <h2>국내숙소 페이지 입니다.</h2>
            <div>
                <button onClick={() => handleClickTab(1)}>경기도</button>
                <button onClick={() => handleClickTab(2)}>전라도</button>
                <button onClick={() => handleClickTab(3)}>경상도</button>
            </div>
            <div>
                {searchParam.get("category") === "1" && <div>경기도 추천 숙소 입니다.</div>}
                {searchParam.get("category") === "2" && <div>전라도 추천 숙소 입니다.</div>}
                {searchParam.get("category") === "3" && <div>경상도 추천 숙소 입니다.</div>}
            </div>

            <h3>[ PopularList ]</h3>
            <div className="hotel-list">
                {popularList.map((list) => (
                    <div className="hotel-item" key={list.id} onClick={() => navigate(`/domestic/${list.id}`)}>
                        <img src={list.imgUrl} alt={list.title} className="hotel-image" />
                        <p className="hotel-title">{list.title}</p>
                        <p className="hotel-price">{list.price.toLocaleString()}원</p>
                    </div>
                ))}
            </div>

            <h3>[ CheapList ]</h3>
            <div className="hotel-list">
                {cheapList.map((list) => (
                    <div className="hotel-item" key={list.id} onClick={() => navigate(`/domestic/${list.id}`)}>
                        <img src={list.imgUrl} alt={list.title} className="hotel-image" />
                        <p className="hotel-title">{list.title}</p>
                        <p className="hotel-price">{list.price.toLocaleString()}원</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DomesticPage;