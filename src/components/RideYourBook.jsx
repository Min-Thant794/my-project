import React, { useEffect, useState } from 'react'
import DefaultImage from '../assets/defaultImage.png'
import { getAllCars } from '../services/car.service'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const RideYourBook = () => {
  const [car, setCar] = useState([])
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const fetchCarImg = async () => {
    try {
      setIsLoading(true)
      const response = await getAllCars()
      if (!response.success) {
        //toast.error('Unable to fetch cars')
        return
      }
      setCar(response?.data ?? [])
    } catch (error) {
      console.error('Error in fetchCarImg():', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCarImg()
  }, [])

  const carImageUrl = car?.[0]?.carImageUrl

  return (
    <section
      style={{
        fontFamily: "'DM Sans', sans-serif",
        borderBottom: '3px solid #434343',
        margin: '0rem 6rem',
        padding: '5rem 0rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '38%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,172,105,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              display: 'inline-block',
              width: '2rem',
              height: '2px',
              background: '#434343',
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#434343',
            }}
          >
            Let's Drive
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
            fontWeight: 800,
            fontStyle: 'italic',
            lineHeight: 1.15,
            color: '#1a1a18',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          The Keys to the City,{' '}
          <span
            style={{
              position: 'relative',
              display: 'inline-block',
              color: '#434343',
            }}
          >
            Right in Your Pocket
          </span>
        </h2>

        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.75,
            color: '#5a5a52',
            margin: 0,
            maxWidth: '38ch',
          }}
        >
          Unlock a car in seconds with Let's Drive. No long queues, no heavy
          paperwork — just seamless mobility for your everyday needs.
        </p>

        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {[
            { value: '500+', label: 'Vehicles' },
            { value: '4.9★', label: 'Avg. Rating' },
            { value: '24/7', label: 'Support' },
          ].map(({ value, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  color: '#1a1a18',
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#9a9a8e',
                  fontWeight: 600,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <NavLink
          to="/cars"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            alignSelf: 'flex-start',
            background: '#000000',
            color: '#f9f5ee',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '0.85rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            transition: 'background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease',
            boxShadow: '0 8px 24px -8px rgba(26,26,24,0.35)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 12px 28px -8px rgba(201,151,58,0.45)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#1a1a18'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 24px -8px rgba(26,26,24,0.35)'
          }}
          onMouseDown={e => {
            e.currentTarget.style.transform = 'translateY(1px)'
            e.currentTarget.style.opacity = '0.85'
          }}
          onMouseUp={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.opacity = '1'
          }}
        >
          Book Your Ride
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NavLink>
      </div>

      <div
        style={{
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          aspectRatio: '4 / 3',
          boxShadow: '0 24px 20px -12px rgba(26,26,24,0.5)',
        }}
      >
        {(isLoading || !imageLoaded) && (
          <div>
            <span className='absolute z-50 m-5 text-sm font-bold text-gray-400 italic'>
              Starting demo server... This may take up to 60 seconds on the free hosting plan.
            </span>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, #e8e4dc 25%, #f0ece4 50%, #e8e4dc 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.4s infinite',
                zIndex: 1,
              }}
            />
          </div>
        )}

        <img
          src={carImageUrl}
          alt="Featured vehicle"
          onLoad={() => setImageLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(26,26,18,0.35) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            left: '1.25rem',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '6px',
            padding: '0.4rem 0.85rem',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Available Now
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700;1,800&family=DM+Sans:wght@400;600;700&display=swap');
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}

export default RideYourBook