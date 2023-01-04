import { postRepository } from "../repositories/postsRepository.js";

export  async function postPost (req,res){
    const user_id = req.headers;
    const {link,caption} = res.locals.postForm;
    try {
        await postRepository.insertPost(user_id,link,caption);
        res.sendStatus(200);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}