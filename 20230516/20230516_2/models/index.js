const {usersInit, userSelect, userInsert} = require("./usersModel");

usersInit();

module.exports = {userInsert,userSelect};