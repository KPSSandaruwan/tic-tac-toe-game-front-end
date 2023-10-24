const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GameStatus = require("../enums/GameStatus")

const GameSchema = new Schema({
  // player: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: [true, "Username is required!"],
  //   ref: "Player"
  // },
  player: {
    type: String
  },
  board: {
    type: [[String]],
  },
  currentPlayer: {
    type: String
  },
  status: {
    type: String,
    enum: GameStatus,
    default: GameStatus.PROGRESS
  }
});

const Game = mongoose.model('Game', GameSchema);
module.exports = { Game }