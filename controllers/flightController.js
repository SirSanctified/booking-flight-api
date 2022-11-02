import {
    v4 as uuidv4
} from 'uuid'

import flights from '../models/Flight.js'

let flightModels = []

export function createFlight(req, res) {
    const flight = req.body
    // use the unique id generated by uuidv4 for each user
    flightModels.push({
        ...flight,
        id: uuidv4()
    })
    res.send(`Flight '${flight.title}' was added`)
}

export function getFlights(req, res) {
    res.send(flightModels)
}

export function getFlightById(req, res) {
    const {
        id
    } = req.params

    const flight = flightModels.find(f => f.id === id)
    res.send(flight)
}

export function updateFlight(req, res) {
    const {
        id
    } = req.params
    const {
        title,
        time,
        price,
        date
    } = req.body

    const flight = flightModels.find(f => f.id === id)

    if (title) flight.title = title
    if (time) flight.time = time
    if (price) flight.price = price
    if (date) flight.date = date

    res.send(`Flight ${flight.title} has been updated`)
}

export function deleteFlight(req, res) {
    const {
        id
    } = req.params
    flightModels = flightModels.filter(flight => flight.id !== id)
    res.send(`Flight with id ${id} has been deleted`)
}