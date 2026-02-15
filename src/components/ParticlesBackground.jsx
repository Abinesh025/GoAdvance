import { useEffect, useMemo, useState, useCallback } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../context/ThemeContext'

export default function ParticlesBackground() {
    const [init, setInit] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = useCallback(async (container) => { }, [])

    const options = useMemo(
        () => ({
            fullScreen: { enable: false },
            background: {
                color: { value: 'transparent' },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                    onClick: {
                        enable: false,
                    },
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.3,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: theme === 'dark' ? '#60a5fa' : '#3b82f6',
                },
                links: {
                    color: theme === 'dark' ? '#60a5fa' : '#3b82f6',
                    distance: 150,
                    enable: true,
                    opacity: theme === 'dark' ? 0.15 : 0.1,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    outModes: { default: 'out' },
                },
                number: {
                    density: {
                        enable: true,
                        area: 900,
                    },
                    value: 60,
                },
                opacity: {
                    value: { min: 0.1, max: theme === 'dark' ? 0.4 : 0.25 },
                    animation: {
                        enable: true,
                        speed: 0.5,
                        minimumValue: 0.1,
                    },
                },
                shape: { type: 'circle' },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [theme]
    )

    if (!init) return null

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="fixed inset-0 -z-10"
        />
    )
}
