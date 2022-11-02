import express from 'express'
const router = express.Router()
import {
    createFlight,
    getFlightById,
    getFlights,
    updateFlight,
    deleteFlight
} from '../controllers/flightController.js'

router.get('/', getFlights)
router.get('/:id', getFlightById)
router.post('/', createFlight)
router.patch('/:id', updateFlight)
router.delete('/:id', deleteFlight)
export default router