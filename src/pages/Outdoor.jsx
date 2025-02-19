import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Device from "../components/Device";
import MiddleWare from "../components/Middleware";

export default function Outdoor() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [Loading, SetLoading] = useState(true);
    const [Devices, setDevices] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleOpen = () => {
        onOpen();
    };

    const getDevice = async () => {
        SetLoading(true);
        const response = await axios.post("https://smarthome-backend-production-807e.up.railway.app/api/getdevice", {
            room: "outdoor"
        });

        setDevices(response.data.data);
        SetLoading(false);
        setIsUpdating(false);
    };

    useEffect(() => {
        getDevice();
    }, []);

    return (
        <>
            <MiddleWare />
            <div className="p-2 mt-4 md:container md:mx-auto">
                <div className="flex justify-between items-center">
                    <a href={"/"} className="flex items-center">
                        <Icon icon="icon-park-outline:left" width="36" height="36" />
                        <h1 className="font-bold text-2xl uppercase">Outdoor</h1>
                    </a>
                    <Button isIconOnly color="primary" className="m-4 rounded-full" onClick={handleOpen}>
                        <Icon icon="material-symbols:add" width="24" height="24" />
                    </Button>
                </div>

                {Loading || isUpdating ? (
                    <div className="flex flex-col mt-4 gap-4 md:flex-row">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="w-full h-48 bg-gray-200 animate-pulse rounded-xl md:w-48 "></div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col mt-4 gap-4 md:flex-row">
                            {Devices.map((v, key) => (
                                v.enable ? (
                                    <React.Fragment key={key}>
                                        <Device id={v.id} name={v.name} path={v.image} stats={v.open} />
                                    </React.Fragment>
                                ) : null
                            ))}
                        </div>
                        <FormData isOpen={isOpen} onClose={onClose} refreshData={getDevice} setIsUpdating={setIsUpdating} />
                    </>
                )}
            </div>
        </>
    );
}

const FormData = ({ isOpen, onClose, refreshData, setIsUpdating }) => {
    const [DeviceName, SetDeviceName] = useState("");

    const handleOnClick = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        await axios.post("https://smarthome-backend-production-807e.up.railway.app/api/enable", {
            name: DeviceName,
        });

        refreshData();
        onClose();
    };

    return (
        <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">เพิ่มข้อมูล</ModalHeader>
                        <ModalBody>
                            <Input
                                type="text"
                                label="Name"
                                placeholder="Devices name"
                                labelPlacement="outside"
                                onChange={(e) => SetDeviceName(e.target.value)}
                            />
                            <Input
                                type="file"
                                label="Upload image"
                                placeholder="Devices name"
                                labelPlacement="outside"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cancel
                            </Button>
                            <Button onClick={handleOnClick} color="primary">
                                Create
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};