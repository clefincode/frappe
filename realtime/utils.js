const { get_conf } = require("../node_utils");
const conf = get_conf();

function get_url(socket, path) {
	if (!path) {
		path = "";
	}
	let url = socket.request.headers.origin;
	//===================Start Custom For task TASK-2026-00077=========================
	// if (conf.developer_mode) {
	// 	let [protocol, host, port] = url.split(":");
	// 	port = conf.webserver_port;
	// 	url = `${protocol}:${host}:${port}`;
	// }
	//===================End Custom For task TASK-2026-00077=========================

	return url + path;
}

module.exports = {
	get_url,
};
