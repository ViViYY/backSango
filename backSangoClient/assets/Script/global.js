import SocketController from './util/socketController'
import GameData from './gamedata/gameData'

const Global = {};
Global.socket = SocketController();
Global.GameData = GameData();
export default Global;
