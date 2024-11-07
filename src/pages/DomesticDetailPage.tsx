import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../consts/api";

interface HotelDetail {
    id: number;
    title: string;
    price: number;
    addr: string;
    imgUrl: string;
}

// 데이터 요청 함수
const getDetailData = async (id: string, setListDetail: (data: HotelDetail) => void) => {
    try {
        const listDetailResult = await fetch(`${API_BASE_URL}/api/products/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (listDetailResult.ok) {
            const listdetailData = await listDetailResult.json();
            console.log(listdetailData);

            if (!listdetailData.isError) {
                setListDetail(listdetailData.data);
            } else {
                alert("숙소 상세 데이터를 불러오는데 실패했습니다.");
            }
        } else {
            alert("서버 응답 실패: " + listDetailResult.status);
        }
    } catch (error) {
        console.error("숙소 상세 요청 중 오류 발생:", error);
        alert("숙소 상세 요청 중 오류가 발생했습니다.");
    }
};

const DomesticDetailPage = () => {
    const params = useParams();
    const id = params.id; 
    const [listDetail, setListDetail] = useState<HotelDetail>({ title: "", imgUrl: "", price: 0, addr: "", id: 0 });

    useEffect(() => {
        if (id) {
            getDetailData(id, setListDetail);
        }
    }, [id]);

    return (
        <>
            <h2>국내숙소 상세 페이지 입니다.</h2>
            {listDetail && (
                <ul>
                    <li>
                        <h3>{listDetail.title}</h3>
                        <p>주소: {listDetail.addr} / 가격: {listDetail.price}원</p>
                        <img src={listDetail.imgUrl} alt={listDetail.title} width="300" />
                    </li>
                </ul>
            )}
        </>
    );
};

export default DomesticDetailPage;