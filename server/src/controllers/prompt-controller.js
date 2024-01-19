const OpenAIChat = require("../config/openai");
const inputPrompt = require("../models/input-prompt");

const openaiInstance = new OpenAIChat();

module.exports = {
    async sendText(req, res){
        const inputModel = new inputPrompt(req.body)

        try {
            const response = await openaiInstance.generateResponse(inputMolde.prompt)
        
            return res.status(200).json({
                success: true,
                data: response,
            })
        } catch (error) {
            return res.status(400).json({
                success:false,
                error: error.response
                ? error.response.data
                : 'There was an issue on the server',
            })
        }
    }
}