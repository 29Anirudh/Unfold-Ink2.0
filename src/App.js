import React from "react";
import Nav from "./ui/NavBar";
import { useState } from "react";
import Home from "./ui/Home";
import Politics from "./ui/Politics";
import Economics from "./ui/Economics";
import Cultural from "./ui/Cultural";
import Movies from "./ui/Movies";
import Cricket from "./ui/Cricket";
// import SignInPage from "./ui/sign_in";
import Politics1 from "./assets/Politics1.jpg";
import Politics2 from "./assets/Politics2.jpg";
import Politics3 from "./assets/Politics3.jpg";
import AuthorPic from "./assets/politicsAuthor1.jpg"
const App=()=> {
  const [posts,setPosts]=useState([
    [
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics2,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
    ],
    [
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics2,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
    ],
    [
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics2,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
    ],
    [
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics2,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
    ],
    [
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics2,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics3,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
      {
        img: Politics1,
        header: 'New Legislation Aims to Reform Healthcare System',
        content:'The bill faces several hurdles before becoming law. It must first pass the Senate, where it currently has 58 committed votes—just short of the 60 needed to overcome a potential filibuster. Senate leadership has scheduled a vote for next week, with intensive negotiations continuing to secure the final votes needed.',
        author:'Victoria Chambers',
        date:'May 15,2025',
        profile_pic: AuthorPic,
      },
    ],
    
  ])
  return (
    <>
      
      <Nav />
      <Home />
      <Politics />
      <Movies />
      <Cultural />
      <Economics />
      <Cricket />
     
      {/* <div>
        <SignInPage />
      </div> */}
    </>
  );
}

export default App;
