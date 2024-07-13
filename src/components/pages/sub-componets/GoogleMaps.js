import React from "react";
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';


function Mapa(){
    const defaultProps = {
    center: {
        lat: 38.763873,
        lng: -9.179817
    },
    zoom: 18
    };
    return(
        // Important! Always set the container height explicitly
        <div style={{ height: '100%', width: '100%' }}>
            <APIProvider apiKey={process.env.REACT_APP_API_KEY} mapIds={[process.env.REACT_APP_MAP_ID]} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
                defaultZoom={defaultProps.zoom}
                defaultCenter={defaultProps.center}
                onCameraChanged={(ev: MapCameraChangedEvent) =>
                    console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                }
            >
                {/* <AdvancedMarker
                    position={defaultProps.center}
                >
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>    */}
            </Map>
        </APIProvider>      
        </div>
      );
}

export default Mapa


