import queries from "../db/queries.js";

const getMsg = async (req, res) => {
    const messages = await queries.getAllMessages();
    res.render("index", { messages: messages });
};

const postMsg = async (req, res) => {
    await queries.insertMessage(req.body.user, req.body.text);
    res.redirect("/");
}

export default { getMsg, postMsg };
