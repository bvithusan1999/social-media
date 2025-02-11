import React, { useState } from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const ProfileCard = ({location}) => {
   

  const {user} = useSelector((state)=>state.authReducer.authData)
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = import.meta.env.REACT_APP_PUBLIC_FOLDER 
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={user.coverPicture? serverPublic+user.coverPicture: serverPublic+"defaultCover.jpg"} alt="" />
        <img src={user.profilePicture? serverPublic+user.profilePicture: serverPublic+"defaultProfile.png"} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt? user.worksAt:"Add your informations!"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location ==="profilePage" && (
            <>
            <div className="vl">

            </div>
            <div className="follow">
              <span>{posts.filter((posts)=>posts.userId === user._id).length}</span>
              <span>Posts</span>
            </div>
            </>
          )}

          
         
        </div>
        <hr />
      </div>
      {location ==="profilePage" ? '':
      <span>
        <Link to ={`/profile/${user._id}`} style={{textDecoration:"none", color:"inherit"}}>
          My Profile
        </Link>
        
        
      </span>
      }
       
    </div>
  );
};

export default ProfileCard;
