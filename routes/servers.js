import { Router } from 'express'
import { getAll, getName } from '../controllers/servers.js'

const router = Router()

router.get('/api/server', getAll)

// Маршрут для получения имени сервера по его ID
router.get('/api/name/:id', getName)

export default router
