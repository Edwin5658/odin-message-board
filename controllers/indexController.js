const createMsg = (user, text) => {
    return {
        user: user,
        text: text,
        time: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
    })
    }
}
const messages = [
  createMsg("Edwin", "Hello World!"),
];

const getMsg = (req, res) => {
    res.render("index", { messages: messages });
};

const postMsg = (req, res) => {
    messages.push(
        createMsg(req.body.user, req.body.text)
    );  
    res.redirect("/");
}

export default { getMsg, postMsg };
