import React from 'react'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import {GOOGLE_MAP_API} from '../config/config'

const CurrentLocation = () => {

  return (
    <div>
        <APIProvider apiKey={GOOGLE_MAP_API}>
            <div className=''>
                <Map
                defaultCenter={{lat: 1.351, lng: 103.8198}}
                defaultZoom={11}
                />
            </div>
        </APIProvider>
    </div>
  )
}

export default CurrentLocation