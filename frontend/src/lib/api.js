import { axiosClient } from "./axios";

export const signup = async (signupData) => {
  const response = await axiosClient.post("/user/register", signupData);
  return response.data;
};

export const completeOnboarding = async (userData) => {
  const response = await axiosClient.post("/user/onboarding", userData);
  return response.data;
};

export const login = async (loginData) => {
  const response = await axiosClient.post("/user/login", loginData);
  return response.data;
};

export const logout = async () => {
  const response = await axiosClient.post("/user/logout");
  return response.data;
};


export async function getUserFriends() {
  const response = await axiosClient.get("/users/friends");
  return response.data;
}

export async function getRecommendedUsers() {
  const response = await axiosClient.get("/users/RecommendedUsers");
  return response.data;
}
export async function getOutgoingFriendReqs() {
  const response = await axiosClient.get("/users/outgoing-friend-requests");
  return response.data;
}

export async function sendFriendRequest(userId) {
  const response = await axiosClient.post(`/users/friend-request/${userId}`);
  return response.data;
}

export async function getFriendRequests() {
  const response = await axiosClient.get("/users/friend-requests");
  return response.data;
}


export const getAuthUser = async () => {
    try {
      const res = await axiosClient.get("/user/checkAuth");
      console.log("hi this is",res.data);
      return res.data;
    }catch (error) {
      console.log("Error in getAuthUser:", error);
      return null;
    }
};

export async function acceptFriendRequest(requestId) {
  const response = await axiosClient.put(`/users/friend-request/${requestId}/accept`);
  return response.data;
}
export async function getStreamToken() {
  const response = await axiosClient.get("/chat/token");
 // console.log(response.data);
  return response.data;
}

