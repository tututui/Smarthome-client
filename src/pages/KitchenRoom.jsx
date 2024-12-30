import { Icon } from "@iconify/react/dist/iconify.js"
import { Switch, Card, Image, } from "@nextui-org/react";
export default function Kitchenroom (){
    return (
        <>
            <div className="p-2 mt-8">

            <a  href = {"/"} className="flex  items-center">
                    <Icon icon="icon-park-outline:left" width="36" height="36" />
                    <h1 className="font-bold text-2xl uppercase">Kitchen Room</h1>
                </a>

                <div className="rounded-3xl bg-[#F4F4F4] w-full flex p-6 mt-10 justify-between">
                    <div className="flex flex-col justify-between">
                        <h2 className="font-bold text-xl">Lamp</h2>
                        <Switch defaultSelected cl/>
            </div>
                    <Card className="border-none shadow-none">
                            <Image
                            src="/img/imghome/lampkit.png"
                            width={172}
                            height={87} 
                             />
                        </Card>
                </div>
            </div>


        </>
        )
}