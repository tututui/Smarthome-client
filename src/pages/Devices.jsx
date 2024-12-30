import { Card, Image } from "@nextui-org/react";
import MobileSibar from "../components/MobileSibar";


export default function Devices() {
    return (
        <>
            <MobileSibar />
            <div className="flex flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Devices</h1>

                {/* Outdoor */}

                <a href="/Outdoor">
                    <Card>
                        <Image src="/image/img1/outdoor.png"
                            className="z-0"
                        />
                        <p className="absolute text-white top-1/2 -translate-y-1/2 text-center w-full text-2xl font-bold">Out Door</p>
                    </Card>
                </a>




                {/* kitchen */}
                <a href="/KitchenRoom">
                    <Card className="w-full ">
                        <Image src="/image/img1/kitchen2.png"
                            className="z-0 max-h-[200px] w-dvw object-cover"
                        />
                        <p className="absolute  text-white top-1/2 -translate-y-1/2 text-center w-full text-2xl font-bold">Kitchen Room</p>
                    </Card>
                </a>


                {/* reset */}
                <a href="/RestRoom">
                    <Card className="w-full">
                        <Image src="/image/img1/rest.png"
                            className="z-0  max-h-[200px] w-dvw object-cover"
                        />
                        <p className="absolute text-white top-1/2 -translate-y-1/2 text-center w-full text-xl font-bold">Rest Room</p>
                    </Card>
                </a>



                {/* bed */}
                <a href="/BedRoom">
                    <Card>
                        <Image src="/image/img1/bed.png"
                            className="z-0"
                        />
                        <p className="absolute text-white top-1/2 -translate-y-1/2 text-center w-full text-2xl font-bold">Bed Room</p>
                    </Card>
                </a>





            </div>

        </>
    )
}