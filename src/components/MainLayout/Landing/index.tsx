import React, { useState, SetStateAction } from 'react';

import Modal from 'src/components/MainLayout/Modal';
import Herosection from 'src/components/MainLayout/Herosection';
import TrendingPost from 'src/components/MainLayout/TrendingPost';
import FeaturedPost from 'src/components/MainLayout/FeaturedPost';
import { ModalContext } from 'src/components/Context/ModalContext';

import { ModalDataProps } from 'src/components/types/modalData';

const Landing = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [emailAuth, setEmailAuth] = useState<boolean>(false);
  const [successPage, setSucessPage] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [modalData, setModalData] = useState<ModalDataProps>({
    title: '',
    btn1: '',
    btn2: '',
    btn3: '',
    auth: '',
    text: '',
    terms: '',
  });

  const openModal = (arg: ModalDataProps) => {
    const { title, btn1, btn2, btn3, text, auth, terms } = arg;
    setToggle(true);
    setModalData({
      title,
      btn1,
      btn2,
      btn3,
      text,
      auth,
      terms,
    });
  };

  const closeModal = () => {
    setToggle(false);
    setEmailAuth(false);
    setSucessPage(false);
    setUserEmail('');
  };

  const _handleEmailAuth = () => {
    setEmailAuth(true);
  };

  const _handleClickOption = () => {
    setEmailAuth(false);
  };

  const _handleUserEmailAuth = () => {
    setSucessPage(true);
  };

  const _handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setUserEmail(e.target.value);
  };

  return (
    <ModalContext.Provider
      value={{
        toggle,
        closeModal,
        openModal,
        modalData,
        emailAuth,
        userEmail,
        successPage,
        _handleEmailAuth,
        _handleClickOption,
        _handleUserEmailAuth,
        _handleChange,
      }}
    >
      <div
        className={`${
          toggle ? `h-screen overflow-y-hidden` : `overflow-y-visible`
        }`}
      >
        <Modal />
        <Herosection />
        <TrendingPost />
        <FeaturedPost />
      </div>
    </ModalContext.Provider>
  );
};

export default Landing;
