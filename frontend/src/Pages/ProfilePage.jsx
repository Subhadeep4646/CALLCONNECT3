import React from "react";
import useAuthUser from "../hooks/useAuthUser";
import PageLoader from "../Components/PageLoader";
import { useNavigate } from "react-router";

const ProfilePage = () => {
    const { authUser, isLoading } = useAuthUser();
    const navigate = useNavigate();

    if (isLoading) return <PageLoader />;
    if (!authUser) return <div className="p-4 text-center text-red-500">User not found 😕</div>;

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-[90%] max-w-md text-center">
                <img
                    src={authUser.profilePic}
                    alt={authUser.fullname}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500 shadow-md"
                />
                <h1 className="text-3xl font-bold text-purple-700">{authUser.fullname}</h1>
                <p className="text-gray-700 mt-2"><strong>Email:</strong> {authUser.email}</p>
                <p className="text-gray-700 mt-1"><strong>Native Language:</strong> <span className="text-blue-700">{authUser.nativeLanguage}</span></p>
                <p className="text-gray-700 mt-1"><strong>Learning:</strong> <span className="text-pink-600">{authUser.learningLanguage}</span></p>
                <p className="text-sm text-gray-400 mt-4">User ID: {authUser._id}</p>

                {/* 🚀 Update Button */}
                <button
                    className="mt-6 px-6 py-2 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 transition-all"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
