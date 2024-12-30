import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MiddleWare() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("smart_home");


        if (!token) {
            navigate("/login"); // เปลี่ยนเส้นทางไปหน้า login หากไม่มี token
        }
    }, [navigate]); // ใส่ dependency array เพื่อให้ useEffect ทำงานเมื่อ navigate เปลี่ยน

    return null; // ไม่มีการแสดงผลใดๆ ใน Middleware
}
