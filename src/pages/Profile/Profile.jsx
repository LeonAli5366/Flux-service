import React, { useContext, useState } from "react";
import "./Profile.scss";
import { AuthContext } from "../../context api/UserContext";
import { FaRegEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const imageHostKey = "982ee9a7802cdcb8f72ba2008a9bad15";
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const handleUpdate = (data) => {
    setLoading(true);
    const image = data.image[0];

    const formData = new FormData();

    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const profile = {
            photoURL: imgData.data.url,
          };
          updateUser(profile)
            .then(() => {
              setLoading(false);
              navigate("/");
              toast.success("user image update successfull");
            })
            .catch((error) => {});
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(handleUpdate)} className=" bg-black pt-10">
      <div className="flex flex-col items-center justify-center rounded profile-wrapper gap-5 md:px-0 px-5 py-24 overflow-hidden md:max-w-[500px] mx-auto">
        {/* profile image */}
        <div className="flex relative">
          <div
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className="w-48 rounded-full bg-white overflow-hidden h-48">
            <img
              src={`${
                user?.photoURL
                  ? user?.photoURL
                  : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              }`}
              alt="default profile"
              className="w-full h-full"
            />
          </div>
          <div
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className={`w-48 h-48 rounded-full bg-white opacity-50 border absolute flex justify-center items-center ${
              hover ? "" : "ml-[1000px]"
            }`}>
            <input type="file" name="" id="" {...register("image")} />
            <FaRegEdit size={30} className="text-slate-800 cursor-pointer" />
          </div>
        </div>
        {/* profile image */}

        <span className="text-lg font-semibold">My Profile</span>

        <div className="flex flex-col w-full items-center gap-5">
          <div className="flex flex-col w-full">
            <span className="text-black">Name</span>
            <input
              type="text"
              name=""
              id=""
              defaultValue={user.displayName}
              className={`bg-white px-5 py-2 rounded`}
            />
          </div>

          {/* eamil */}

          <div className="flex flex-col w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder={user?.email}
              disabled
              className="bg-white px-5 py-2 rounded cursor-not-allowed"
            />
          </div>

          {/* email */}

          {/* password */}

          {/* <div className="flex flex-col w-full">
            <input
              type="password"
              name=""
              id=""
              placeholder="current password"
              className="bg-white px-5 py-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="new password"
              className="bg-white px-5 py-2 rounded"
            />
          </div> */}
          <div className="flex justify-end w-full">
            <button
              className={`${loading ? "loading loading-spinner" : "btn"}`}
              type="submit">
              update profile
            </button>
          </div>
        </div>
        {/* password */}
      </div>
    </form>
  );
};

export default Profile;
