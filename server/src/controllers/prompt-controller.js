import inputPrompt from '../modules/input-prompt';
import openai from '../config/openai';

module.exports = {
    async sendText(req, res) {
        const openaiAPI = openai.configuration();
        const inputModel = new inputPrompt(req.body);
        try{
            const reponse = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)   )

            return res.status(200).json({
                sucess: true,
                data: reponse.data.choices[0].text
            });
        } catch (error) {
           return res.status(400).json({
               sucess: false,
               error: error.response ? error.response : "there was an inssue on the server"
           });
        }
    }
}