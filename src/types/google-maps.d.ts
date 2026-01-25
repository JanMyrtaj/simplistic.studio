// Type declarations for Google Maps API
declare global {
  interface Window {
    google?: {
      maps: {
        Map: new (element: HTMLElement, options?: GoogleMapsMapOptions) => GoogleMapsMap;
        Marker: new (options?: GoogleMapsMarkerOptions) => GoogleMapsMarker;
      };
    };
  }
}

export interface GoogleMapsMap {
  setOptions(options: GoogleMapsMapOptions): void;
}

export interface GoogleMapsMapOptions {
  center?: GoogleMapsLatLng | GoogleMapsLatLngLiteral;
  zoom?: number;
  disableDefaultUI?: boolean;
  zoomControl?: boolean;
  mapTypeControl?: boolean;
  scaleControl?: boolean;
  streetViewControl?: boolean;
  rotateControl?: boolean;
  fullscreenControl?: boolean;
  styles?: GoogleMapsMapTypeStyle[];
}

export interface GoogleMapsMarkerOptions {
  position?: GoogleMapsLatLng | GoogleMapsLatLngLiteral;
  map?: GoogleMapsMap;
  title?: string;
}

export interface GoogleMapsLatLng {
  lat(): number;
  lng(): number;
}

export interface GoogleMapsLatLngLiteral {
  lat: number;
  lng: number;
}

export interface GoogleMapsMapTypeStyle {
  elementType?: string;
  featureType?: string;
  stylers?: Array<Record<string, string | boolean>>;
}

export {};

