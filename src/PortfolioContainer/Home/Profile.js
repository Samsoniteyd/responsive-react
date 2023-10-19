import React from 'react'
import Typical from 'react-typical'

const Profile = () => {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-detail">
                <div className="colz">
                    <a href="#">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
                <div className="profile-details-name">
                    <span className="primarytext">
                        {" "}
                        Hello, I'M <span className='highlighted-text'>AMOO</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Ethusiastic Dev ",
                            1000,
                            "full stack Developer",
                            1000,
                            "django Dev",
                            1000,
                            "cross platform v",
                            1000,
                            "React Dev",
                            1000,

                        ]}
                        />

                        </h1>
                        <span className="profile-role-tagline">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum in, suscipit voluptate debitis eveniet.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className='btn primary-btn'>
                    {" "}
                    Hire Me {" "}
                    </button>
                    <a href="#"></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile