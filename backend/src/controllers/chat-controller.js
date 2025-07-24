
const {generateStreamToken}= require('../../config/Stream');
// Yeh function ka kaam hai — Stream (chat/video API) ke liye ek unique 
// token generate karna, jo user ko authenticate kare.

const getStreamToken=async(req, res)=> {
    try {
        const token = await generateStreamToken(req.user.id);
        // Yaha se ek Stream service (like GetStream.io) ka valid access token generate hota hai user ke liye.
        // Ye token Stream SDK ko batata hai:
        // “Haan bhai, ye user authorized hai video ya chat feature use karne ke liye.”
        res.status(200).json({ token });
      } catch (error) {
        console.log("Error in getStreamToken controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
      }
}
module.exports={getStreamToken}