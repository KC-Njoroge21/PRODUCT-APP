import rateLimit from "../config/upstash"



const rateLimiter = async (res, req, next) => {
  try {
    const {success} = await rateLimit.limit("my-limit-key")

    if (!success) {
      return res.status(429).json({message: "Too many requests. Please try again later"})
    }

    next();
  } catch (error) {
    console.log("Rate limit error.", error);
    next(error)

  }
}

export default rateLimiter