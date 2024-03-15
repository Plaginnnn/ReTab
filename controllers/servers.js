// servers.js (контроллер)

let servers = [
	{ id: '1', name: 'AWS', status: 'working' },
	{ id: '2', name: 'Google Cloud', status: 'working' },
	{ id: '3', name: 'Yandex Cloud', status: 'working' },
	{ id: '4', name: 'Microsoft', status: 'pending' },
]

export const getAll = (req, res) => {
	res.status(200).json(servers)
}

export const getName = (req, res) => {
	const { id } = req.params // Получаем значение параметра id из запроса

	// Находим сервер с соответствующим ID
	const server = servers.find(server => server.id === id)

	if (!server) {
		return res.status(404).json({ error: 'Server not found' })
	}

	// Возвращаем информацию о сервере
	res.status(200).json(server)
}
