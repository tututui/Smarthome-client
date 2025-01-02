import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Image } from "@nextui-org/react";

import { useNavigate } from "react-router-dom";


export default function MobileSibar() {

  const navigate = useNavigate();
  const logout_handle = () => {
    localStorage.removeItem("smart_home")
    return navigate('/login')
  }

  return (
    <>
      <div className="bg-white-100 flex items-center justify-between p-4 md:container md:mx-auto">
        <Image
          src="/image/img1/logo.png"
        />

        <Button onClick={logout_handle} variant="light" size="lg" className="w-fit ">
          <Icon icon="tabler:logout" width="26" height="26" />
          Logout
        </Button>
      </div >
    </>
  )
}