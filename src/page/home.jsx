import React, { useEffect, useState } from 'react'

function Home() {


    const [timer, setTimer] = useState({
        hour: 0,
        min: 0,
        sec: 0
    })

    const [intervalId, setIntervalId] = useState(0)

    const tick = () => {
        setTimer((prev) => {
            if (prev.sec === 59) {
                if (prev.min === 59) {
                    return {...prev, min: 0, sec: 0, hour: prev.hour + 1}
                } else {
                    return {...prev, min: prev.min + 1, sec: 0}
                }
            } else {
                return {...prev, sec: prev.sec + 1}
            }
        })

    }

    useEffect(() => {
        const id = setInterval(() => {
            tick()
        }, 1000)
        setIntervalId(id)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            {`heure : ${timer.hour} / min: ${timer.min} / sec: ${timer.sec}`}
        </>
    )
}

export default Home;