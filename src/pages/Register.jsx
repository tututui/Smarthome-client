import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Image, Input, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [PassVisible, SetIsPassVisible] = useState(false);
    const [ConfirmVisible, SetIsConfirmVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('success');

    const togglePass = () => SetIsPassVisible(!PassVisible);
    const toggleConfirmPass = () => SetIsConfirmVisible(!ConfirmVisible);

    const [btnLoading, setBtnLoad] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();
        if (confirmPassword.length == 0 || password.length == 0 || username.length == 0 || email.length == 0) {
            setModalMessage('You have not filled in all the information.');
            setModalOpen(true);
            return
        }

        if (confirmPassword != password) {
            setModalMessage('Password and ConfigmPassword not matching.');
            setModalOpen(true);
            return
        }

        setBtnLoad(true)
        const response = await axios.post("http://localhost:3000/api/register", {
            username, email, password
        })

        if (response.status == 201) {
            return navigate('/')
        } else {
            setModalMessage('Already have the account please try again.');
            setModalOpen(true);
        }

        setBtnLoad(false)

    };

    const ModalComponent = () => (
        <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            className="py-6"
        >
            <ModalContent>
                <ModalBody>
                    <p>{modalMessage}</p>
                    <Button
                        color="primary"
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
                        className="h-screen object-cover rounded-none w-screen"
                        src="/image/register_bg.jpg"
                    />
                </div>

                <div className="w-full flex flex-col items-center p-12 gap-20">
                    <div className="space-y-8 text-center">
                        <p className="text-4xl font-bold">Register</p>
                        <p>Welcome To Smart Home</p>
                    </div>

                    <div className="space-y-12 w-full max-w-3xl md:px-24">
                        <Input
                            type="text"
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            labelPlacement="outside"
                            startContent={
                                <Icon icon="material-symbols:person" />
                            }
                        />

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

                        <div className="space-y-4">
                            <Input
                                type={ConfirmVisible ? "text" : "password"}
                                label="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                labelPlacement="outside"
                                startContent={
                                    <Icon icon="mdi:password" />
                                }
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleConfirmPass}>
                                        {ConfirmVisible ? (
                                            <Icon icon="formkit:eyeclosed" />
                                        ) : (
                                            <Icon icon="mdi:eye" />
                                        )}
                                    </button>
                                }
                            />
                            <Button size="sm" variant="light" className="text-xs opacity-50">
                                <a href="/login">Already have an account</a>
                            </Button>
                        </div>

                        <Button isLoading={btnLoading} onClick={handleRegister} color="primary" radius="full" className="w-full">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
            <ModalComponent />
        </>
    );
};

export default RegisterPage;