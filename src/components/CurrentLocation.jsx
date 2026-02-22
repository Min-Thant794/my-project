import React from 'react'
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import { GOOGLE_MAP_API } from '../config/config'

const CurrentLocation = () => {

  const letsDriveLocation =  { lat: 1.4182024135597424, lng: 103.83096411320359};

  return (
    <div className='w-full mt-5'>
        <APIProvider apiKey={GOOGLE_MAP_API}>
            <div className='w-full h-[280px] rounded-lg overflow-hidden'> 
                <Map
                defaultCenter={letsDriveLocation}
                defaultZoom={13}
                mapId={"DEMO_MAP_ID"}
                streetViewControl={false}
                >
                    <AdvancedMarker position={letsDriveLocation}>
                        <Pin background={'#ff0000'} borderColor={'#1e40af'} glyphColor={'#ffffff'}/>
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    </div>
  )
}

export default CurrentLocation