const MessageModel = require("../models/MessageModel.js");
const Messagemodel = require("../models/MessageModel.js");

const addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Messagemodel.create({

        // we enter the new value text under the message will store the message
      message: {
        text: message,
      },
    //   in between whom the conversation is happening
      users: [from, to],
    //   who send the message
      sender: from,
    });

    if(data) return res.json({msg : "Message added Successfull"});
    return res.json({msg : 'failed to add message to database'});  
  } catch (ex) {
    next(ex);
  }
};

const getAllMessage = async (req, res, next) => {

    try {
        const {from  , to} = req.body;
        const messages = await MessageModel.find({
            // finding in the users all the message 
            users : {
                $all : [from , to],
            }
        }).sort({updatedAt : 1});

        const projectMessage = messages.map((msg)=>{
            return {
                fromself : msg.sender.toString()===from,
                message : msg.message.text,
            }
        })

        return res.json({projectMessage})
        
    } catch (error) {
        next(ex)
        
    }

};

module.exports = { addMessage, getAllMessage };
