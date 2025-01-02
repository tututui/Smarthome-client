import { Button, Image, Input, Modal, ModalBody, ModalContent } from "@nextui-org/react";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [PassVisible, SetIsPassVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('success');

    const [btnLoading, setBtnLoad] = useState(false)

    const togglePass = () => SetIsPassVisible(!PassVisible);

    const handleLogin = async (e) => {
        if (password.length == 0 || email.length == 0) {
            setModalMessage('You have not filled in all the information.');
            setModalOpen(true);
            return
        }
        setBtnLoad(true)
        e.preventDefault();
        const response = await axios.post("https://smarthome-backend-production-807e.up.railway.app/api/login", {
            email, password
        })

        console.log(response)

        if (response.status == 200) {
            localStorage.setItem("smart_home", true)
            navigate('/');
        } else {
            setModalMessage('Username or Password is not correct');
            setModalOpen(true);
        }
        setBtnLoad(false)
    }

    const ModalComponent = () => (
        <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            placement={"center"}
            className="py-6"
        >
            <ModalContent>
                <ModalBody>
                    <p>{modalMessage}</p>
                    <Button
                        color={'primary'}
                        onClick={() => setModalOpen(false)}
                        className="mt-4"
                    >
                        Close
                    </Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    );

    return (
        <>
            <div className="flex">
                <div className="w-full hidden md:block">
                    <Image
                        className="w-screen h-screen rounded-none object-cover"
                        src="/image/login.jpg"
                    />
                </div>
                <div className="w-full flex flex-col items-center p-12 space-y-24">
                    <div className="space-y-8 text-center">
                        <p className="text-4xl font-bold">Login</p>
                        <p>Welcome To Smart Home</p>
                    </div>

                    <div className="space-y-12 w-full max-w-3xl md:px-24">
                        <Input
                            type="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            labelPlacement="outside"
                            startContent={
                                <Icon icon="ic:baseline-email" />
                            }
                        />

                        <div className="space-y-4">
                            <Input
                                type={PassVisible ? "text" : "password"}
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                labelPlacement="outside"
                                startContent={
                                    <Icon icon="mdi:password" />
                                }
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={togglePass}>
                                        {PassVisible ? (
                                            <Icon icon="formkit:eyeclosed" />
                                        ) : (
                                            <Icon icon="mdi:eye" />
                                        )}
                                    </button>
                                }
                            />
                            <Button size="sm" variant="light" className="text-xs opacity-50">
                                <a href="/register">Create Account</a>
                            </Button>
                        </div>

                        <Button isLoading={btnLoading} onClick={handleLogin} color="primary" radius="full" className="w-full">
                            Login
                        </Button>
                    </div>
                </div>
            </div>
            <ModalComponent />
        </>
    );
};

export default LoginPage;