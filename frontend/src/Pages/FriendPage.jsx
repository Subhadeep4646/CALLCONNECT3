import { useQuery } from "@tanstack/react-query";
import useAuthUser from "../hooks/useAuthUser";
import { getUserFriends } from "../lib/api";
import PageLoader from "../Components/PageLoader"; // optional loading component


const FriendPage = () => {
    const { authUser, isLoading } = useAuthUser();

    const friendIds = authUser?.friends || [];


    const { data: friends = [], isLoading: loadingFriends } = useQuery({
        queryKey: ["friends"],
        queryFn: getUserFriends,
    });


    console.log(friends);


    if (isLoading || loadingFriends) return <PageLoader />;

    if (!friends || friends.length === 0) {
        return <div className="p-4 text-center">No friends found 😢</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Your Friends</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {friends.map(friend => (
                    <div
                        key={friend._id}
                        className="p-6 border rounded-xl shadow-md hover:shadow-xl transition bg-base-200 text-center"
                    >
                        <img
                            src={friend.profilePic}
                            alt={friend.fullname}
                            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h2 className="text-xl font-semibold mb-1">{friend.fullname}</h2>
                        <p className="text-sm text-gray-400 mb-1">{friend.email}</p>
                        <p className="text-sm text-gray-500">
                            🏠 Native: <span className="font-medium">{friend.nativeLanguage}</span> | 📘 Learning: <span className="font-medium">{friend.learningLanguage}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default FriendPage;
