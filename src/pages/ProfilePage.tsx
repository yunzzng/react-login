import { useEffect, useState } from "react";
import { API_BASE_URL } from "../consts/api";

interface UserProfile {
    email: string;
    name: string;
}

const showProfileData = async (setUserProfile: (profile: UserProfile) => void) => {
    const token = localStorage.getItem("elice-app-token");

    try {
        const profileResult = await fetch(`${API_BASE_URL}/api/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: token || "",
            },
        });

        if (profileResult.ok) {
            const profileAlert = await profileResult.json();
            setUserProfile({
                email: profileAlert.user.email,
                name: profileAlert.user.name,
            });
        } else {
            alert("서버 응답 실패: " + profileResult.status);
        }
    } catch (error) {
        console.error("사용자 정보 요청 중 오류 발생:", error);
        alert("사용자 정보 요청 중 오류가 발생했습니다.");
    }
};

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState<UserProfile>();

    useEffect(() => {
        showProfileData(setUserProfile); 
    }, []);

    return (
        <div>
            <h2>This is ProfilePage</h2>
            <p>이름: {userProfile?.name || ""}</p>
            <p>이메일: {userProfile?.email || ""}</p>
        </div>
    );
};

export default ProfilePage;