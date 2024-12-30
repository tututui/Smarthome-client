import { Card, Image } from "@nextui-org/react";
import MiddleWare from "../components/Middleware";
import MobileSibar from "../components/MobileSibar";

export default function HomePage() {
    return (
        <>

            <MiddleWare />
            <MobileSibar />
            <div className="flex flex-col gap-4 p-4 md:container md:mx-auto">
                <h1 className="text-2xl font-bold ">Home</h1>
                {/* Outdoor */}
                <div className="flex flex-col gap-4 md:flex-row ">
                    <a href="/Outdoor">
                        <Card>

                            <Image src="/image/img1/outdoor_ds.png"
                                className="z-0 "
                            />
                            <p className="absolute text-white top-1/2 -translate-y-1/2 text-center w-full text-2xl font-bold md:text-6xl">Out Door</p>
                        </Card>
                    </a>

                    {/* bed */}
                    <a href="/BedRoom">
                        <Card>
                            <Image src="/image/img1/bedroom_ds.png"
                                className="z-0"
                            />
                            <p className="absolute text-white top-1/2 -translate-y-1/2 text-center w-full text-2xl font-bold md:text-6xl">Bed Room</p>
                        </Card>
                    </a>
                </div>





            </div>

        </>
    )
}