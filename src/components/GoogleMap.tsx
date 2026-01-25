import { useEffect, useRef, useCallback } from 'react';
import type { GoogleMapsMap, GoogleMapsMapOptions, GoogleMapsMarkerOptions, GoogleMapsMapTypeStyle } from '../types/google-maps';

interface GoogleMapProps {
  isDark: boolean;
}

// Dark mode styles for Google Maps
const darkModeStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

export function GoogleMap({ isDark }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<GoogleMapsMap | null>(null);
  const scriptLoadedRef = useRef(false);
  const isInitializingRef = useRef(false);

  // Location: Simplistic.studio, Rruga Muharrem Ibrahimi, Gjilan, Kosovo
  const location = { lat: 42.46768359819896, lng: 21.457595169625794 };

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const initializeMap = useCallback(() => {
    if (!mapRef.current || !window.google?.maps || isInitializingRef.current) return;
    
    isInitializingRef.current = true;

    try {
      const mapOptions: GoogleMapsMapOptions = {
        center: location,
        zoom: 17,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        styles: isDark ? darkModeStyles as GoogleMapsMapTypeStyle[] : []
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);

      // Add marker
      const markerOptions: GoogleMapsMarkerOptions = {
        position: location,
        map: map,
        title: 'Simplistic.studio - Rruga Muharrem Ibrahimi, Gjilan, Kosovo'
      };
      new window.google.maps.Marker(markerOptions);

      mapInstanceRef.current = map;
      isInitializingRef.current = false;
    } catch (error) {
      console.error('Error initializing Google Map:', error);
      isInitializingRef.current = false;
    }
  }, [isDark]);

  useEffect(() => {
    // If no API key, don't try to load the script
    if (!apiKey) {
      return;
    }

    // Check if Google Maps API is already loaded
    if (window.google?.maps) {
      initializeMap();
      return;
    }

    // Load Google Maps script if not already loaded
    if (!scriptLoadedRef.current) {
      scriptLoadedRef.current = true;

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initializeMap();
      };
      script.onerror = () => {
        console.error('Failed to load Google Maps script. Please check your API key.');
        scriptLoadedRef.current = false;
      };
      document.head.appendChild(script);

      return () => {
        // Cleanup: remove script if component unmounts before it loads
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [apiKey, initializeMap]);

  useEffect(() => {
    // Update map styles when dark mode changes
    if (mapInstanceRef.current) {
      try {
        if (isDark) {
          mapInstanceRef.current.setOptions({
            styles: darkModeStyles as GoogleMapsMapTypeStyle[]
          });
        } else {
          mapInstanceRef.current.setOptions({
            styles: []
          });
        }
      } catch (error) {
        console.error('Error updating map styles:', error);
      }
    } else if (window.google?.maps && mapRef.current && apiKey) {
      // If map hasn't been initialized yet but API is loaded, initialize it
      initializeMap();
    }
  }, [isDark, apiKey, initializeMap]);

  // Fallback to iframe if no API key is provided
  // Use CSS filters to create dark mode effect (free, no API key needed)
  if (!apiKey) {
    return (
      <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-neutral-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.7806209956691!2d21.457595169625794!3d42.46768359819896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13548d7d5dbcd0bf%3A0x2e730799fd4e7bd6!2sSimplistic.studio!5e0!3m2!1sen!2s!4v1769213973819!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ 
            border: 0,
            filter: isDark ? 'brightness(0.5) contrast(1.2) saturate(0.7)' : 'none',
            transition: 'filter 0.3s ease'
          }}
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Simplistic.studio Location - Rruga Muharrem Ibrahimi, Gjilan, Kosovo"
        />
      </div>
    );
  }

  return (
    <div 
      ref={mapRef}
      className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-neutral-700"
    />
  );
}
