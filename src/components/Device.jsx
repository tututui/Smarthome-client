import { Card, Image, Switch } from "@nextui-org/react";
import axios from "axios";

export default function Device({ id, name, path, stats }) {

    const handler = async () => {
        stats = !stats;
        // console.log("devices id is ", id, stats);

        await axios.post("https://smarthome-backend-production-807e.up.railway.app/api/change", {
            id: id,
            open: stats
        })
    }

    return (
        <>
            <div className="rounded-3xl bg-[#F4F4F4] w-full flex  p-6  justify-between md:w-fit md:gap-6 md:flex-col-reverse">
                <div className="flex flex-col justify-between gap-5">
                    <h2 className="font-bold text-xl">{name}</h2>
                    <Switch onChange={handler} defaultSelected={stats ? true : false} />
                </div>
                <Card className="border-none shadow-none ">
                    <Image
                        src={path}
                        width={164}
                        height={87}
                    />
                </Card>
            </div>
        </>
    )
}