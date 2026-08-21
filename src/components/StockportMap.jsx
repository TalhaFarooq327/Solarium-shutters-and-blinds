import { useEffect, useRef } from "react";
import L from "leaflet";

// 4 Broadhalgh Road, Rochdale HQ Coordinates
const HQ_COORDINATES = {
  name: "Solarium Shutters & Blinds HQ",
  address: "4 Broadhalgh Road, Rochdale, England",
  lat: 53.6145,
  lng: -2.1840,
};

// All Greater Manchester Locations Covering All 10 Metropolitan Boroughs
export const GREATER_MANCHESTER_LOCATIONS = [
  // Central Manchester & Salford Quays
  { name: "Manchester City Centre", category: "Central Manchester", lat: 53.4808, lng: -2.2426, details: "Northern Quarter, Ancoats, Castlefield & Spinningfields" },
  { name: "Salford Quays & MediaCity", category: "Central Manchester", lat: 53.4722, lng: -2.2980, details: "Waterfront docks & luxury apartments" },
  { name: "Deansgate & Castlefield", category: "Central Manchester", lat: 53.4750, lng: -2.2510, details: "Historic canal quarter" },
  { name: "Old Trafford & Whalley Range", category: "Central Manchester", lat: 53.4560, lng: -2.2780, details: "Victorian avenues & Trafford border" },
  { name: "Fallowfield & Rusholme", category: "Central Manchester", lat: 53.4470, lng: -2.2180, details: "South Central Corridor" },

  // South Manchester & Trafford
  { name: "Didsbury", category: "South Manchester & Trafford", lat: 53.4167, lng: -2.2310, details: "East Didsbury, West Didsbury & Didsbury Village" },
  { name: "Chorlton-cum-Hardy", category: "South Manchester & Trafford", lat: 53.4430, lng: -2.2750, details: "Beech Road & Chorlton Green period homes" },
  { name: "Altrincham", category: "South Manchester & Trafford", lat: 53.3870, lng: -2.3530, details: "Market town & period properties" },
  { name: "Hale & Hale Barns", category: "South Manchester & Trafford", lat: 53.3710, lng: -2.3420, details: "Exclusive South Trafford enclaves" },
  { name: "Sale & Timperley", category: "South Manchester & Trafford", lat: 53.4240, lng: -2.3240, details: "Canal-side homes & family avenues" },
  { name: "Stretford & Urmston", category: "South Manchester & Trafford", lat: 53.4470, lng: -2.3120, details: "Vibrant suburban communities" },

  // Stockport & Cheshire Borders
  { name: "Stockport Town Centre", category: "Stockport & Cheshire", lat: 53.4106, lng: -2.1575, details: "Market, Underbanks & Portwood" },
  { name: "Bramhall & Woodford", category: "Stockport & Cheshire", lat: 53.3600, lng: -2.1640, details: "Bramhall Park & Woodford garden village" },
  { name: "Cheadle & Cheadle Hulme", category: "Stockport & Cheshire", lat: 53.3750, lng: -2.1900, details: "Historic village & leafy suburbs" },
  { name: "The Heatons", category: "Stockport & Cheshire", lat: 53.4240, lng: -2.1860, details: "Heaton Moor, Heaton Chapel & Mersey" },
  { name: "Hazel Grove & Marple", category: "Stockport & Cheshire", lat: 53.3880, lng: -2.0910, details: "Marple Bridge, High Lane & Etherow" },
  { name: "Wilmslow & Alderley Edge", category: "Stockport & Cheshire", lat: 53.3280, lng: -2.2290, details: "Cheshire border luxury properties" },

  // North & East Greater Manchester
  { name: "Rochdale (HQ)", category: "North & East Region", lat: 53.6150, lng: -2.1560, details: "Rochdale Borough Centre" },
  { name: "Bamford & Norden", category: "North & East Region", lat: 53.6210, lng: -2.2020, details: "Bamford, Norden & Broadhalgh" },
  { name: "Oldham", category: "North & East Region", lat: 53.5400, lng: -2.1150, details: "Oldham Borough" },
  { name: "Saddleworth", category: "North & East Region", lat: 53.5460, lng: -2.0070, details: "Uppermill & Greenfield Pennine villages" },
  { name: "Bury", category: "North & East Region", lat: 53.5930, lng: -2.2980, details: "Bury Town Centre & Market" },
  { name: "Prestwich & Whitefield", category: "North & East Region", lat: 53.5350, lng: -2.2820, details: "Prestwich Village & Heaton Park" },
  { name: "Heywood & Middleton", category: "North & East Region", lat: 53.5900, lng: -2.2210, details: "Central Borough Hubs" },
  { name: "Ashton-under-Lyne", category: "North & East Region", lat: 53.4890, lng: -2.0940, details: "Tameside Central Hub" },

  // West & North-West Greater Manchester
  { name: "Worsley & Swinton", category: "West & North-West", lat: 53.5010, lng: -2.3820, details: "Bridgewater Canal & timbered homes" },
  { name: "Eccles & Monton", category: "West & North-West", lat: 53.4840, lng: -2.3360, details: "Monton Green & West Salford" },
  { name: "Bolton", category: "West & North-West", lat: 53.5780, lng: -2.4290, details: "Bolton Borough Centre" },
  { name: "Horwich & Lostock", category: "West & North-West", lat: 53.5960, lng: -2.5020, details: "West Pennine Foothills" },
  { name: "Wigan", category: "West & North-West", lat: 53.5450, lng: -2.6320, details: "Wigan Borough Centre & Standish" },
  { name: "Leigh & Atherton", category: "West & North-West", lat: 53.4980, lng: -2.5180, details: "Leigh & Pennington Flash" },
  { name: "Denton & Hyde", category: "North & East Region", lat: 53.4540, lng: -2.1120, details: "Denton & Hyde Tameside" },
  { name: "Radcliffe & Tottington", category: "North & East Region", lat: 53.5620, lng: -2.3310, details: "Bury South Communities" },
  { name: "Shaw & Royton", category: "North & East Region", lat: 53.5780, lng: -2.0910, details: "North Oldham Suburbs" },
  { name: "Cheshire & Rossendale Borders", category: "North & East Region", lat: 53.6600, lng: -2.2500, details: "Greater Manchester Perimeter" }
];

export default function StockportMap({ selectedArea, height = "100%" }) {
  const mapRef = useRef(null);
  const leafletMapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!leafletMapInstanceRef.current) {
      // Create Map
      const map = L.map(mapRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
      });

      // Google Maps Standard Road Tile Layer
      L.tileLayer("https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
        attribution: '&copy; <a href="https://maps.google.com">Google Maps</a>',
      }).addTo(map);

      // Add Zoom Control
      L.control.zoom({ position: "topright" }).addTo(map);

      // Service Coverage Radius Circle from Rochdale HQ (35 km radius covering all Greater Manchester)
      L.circle([HQ_COORDINATES.lat, HQ_COORDINATES.lng], {
        color: "#ea4335",
        fillColor: "#ea4335",
        fillOpacity: 0.05,
        weight: 2,
        dashArray: "6, 8",
        radius: 35000,
      }).addTo(map);

      // 1. Add Primary Red HQ Marker (4 Broadhalgh Road, Rochdale)
      const hqIcon = L.divIcon({
        className: "hq-google-pin",
        html: `
          <div class="relative group cursor-pointer flex flex-col items-center">
            <div class="flex items-center gap-1 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-lg ring-2 ring-white">
              <span class="h-2 w-2 rounded-full bg-white animate-pulse"></span>
              Solarium HQ
            </div>
            <div class="h-2 w-2 rotate-45 bg-red-600 -mt-1 ring-1 ring-white"></div>
          </div>
        `,
        iconSize: [110, 32],
        iconAnchor: [55, 32],
        popupAnchor: [0, -32],
      });

      const hqPopup = `
        <div style="font-family: sans-serif; padding: 4px;">
          <span style="font-size: 10px; font-weight: 700; color: #ea4335; text-transform: uppercase;">Primary Workshop & HQ</span>
          <h4 style="margin: 3px 0; font-size: 14px; font-weight: 700; color: #111;">4 Broadhalgh Road</h4>
          <p style="margin: 0; font-size: 11px; color: #555;">Rochdale, Greater Manchester</p>
          <div style="margin-top: 8px; font-size: 11px; color: #222; font-weight: 600; background: #fee2e2; padding: 4px 8px; border-radius: 6px;">
            📍 Central Hub for In-Home Measurements
          </div>
        </div>
      `;

      L.marker([HQ_COORDINATES.lat, HQ_COORDINATES.lng], { icon: hqIcon, zIndexOffset: 1000 })
        .addTo(map)
        .bindPopup(hqPopup);

      // 2. Add All Greater Manchester Blue Location Dots
      GREATER_MANCHESTER_LOCATIONS.forEach((loc) => {
        const areaIcon = L.divIcon({
          className: "area-google-blue-dot",
          html: `
            <div class="relative group cursor-pointer flex items-center justify-center">
              <span class="block h-3.5 w-3.5 rounded-full bg-blue-600 border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-150"></span>
              <span class="absolute inset-0 rounded-full bg-blue-500 opacity-30 animate-ping"></span>
            </div>
          `,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
          popupAnchor: [0, -8],
        });

        const areaPopup = `
          <div style="font-family: sans-serif; padding: 4px;">
            <span style="font-size: 9px; font-weight: 700; color: #2563eb; text-transform: uppercase;">${loc.category}</span>
            <h4 style="margin: 2px 0; font-size: 13px; font-weight: 700; color: #111;">${loc.name}</h4>
            <p style="margin: 0; font-size: 11px; color: #666;">${loc.details}</p>
            <div style="margin-top: 6px; font-size: 10px; color: #2563eb; font-weight: 600;">
              ✓ Covered by Free Home Measure
            </div>
          </div>
        `;

        const marker = L.marker([loc.lat, loc.lng], { icon: areaIcon })
          .addTo(map)
          .bindPopup(areaPopup);

        markersRef.current.push({ name: loc.name, marker, lat: loc.lat, lng: loc.lng });
      });

      // Fit map bounds dynamically so all Greater Manchester markers are 100% visible
      const bounds = L.latLngBounds([
        [HQ_COORDINATES.lat, HQ_COORDINATES.lng],
        ...GREATER_MANCHESTER_LOCATIONS.map((l) => [l.lat, l.lng]),
      ]);
      map.fitBounds(bounds, { padding: [35, 35] });

      leafletMapInstanceRef.current = map;
    }

    setTimeout(() => {
      leafletMapInstanceRef.current?.invalidateSize();
    }, 100);

    return () => {
      if (leafletMapInstanceRef.current) {
        leafletMapInstanceRef.current.remove();
        leafletMapInstanceRef.current = null;
        markersRef.current = [];
      }
    };
  }, []);

  // Handle selected area pan / zoom focus
  useEffect(() => {
    if (!leafletMapInstanceRef.current || !selectedArea) return;

    const matched = markersRef.current.find(
      (m) => m.name.toLowerCase().includes(selectedArea.toLowerCase()) || selectedArea.toLowerCase().includes(m.name.toLowerCase())
    );

    if (matched) {
      leafletMapInstanceRef.current.flyTo([matched.lat, matched.lng], 13, {
        duration: 1.2,
      });
      matched.marker.openPopup();
    }
  }, [selectedArea]);

  const handleResetMap = () => {
    if (leafletMapInstanceRef.current) {
      const bounds = L.latLngBounds([
        [HQ_COORDINATES.lat, HQ_COORDINATES.lng],
        ...GREATER_MANCHESTER_LOCATIONS.map((l) => [l.lat, l.lng]),
      ]);
      leafletMapInstanceRef.current.fitBounds(bounds, { padding: [35, 35] });
      leafletMapInstanceRef.current.closePopup();
    }
  };

  return (
    <div className="relative w-full h-full min-h-[440px] rounded-2xl overflow-hidden shadow-lg border border-border bg-white group">
      {/* Google Maps Container */}
      <div ref={mapRef} style={{ height: height, width: "100%" }} className="z-0" />

      {/* Top Overlay Bar */}
      <div className="absolute top-3 left-3 right-3 z-[400] flex items-center justify-between pointer-events-none">
        <button
          onClick={handleResetMap}
          className="pointer-events-auto rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-gray-800 border border-gray-200 shadow-md hover:bg-gray-50 transition-all cursor-pointer flex items-center gap-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          View Greater Manchester
        </button>
      </div>

      {/* Map Bottom Legend */}
      <div className="absolute bottom-3 left-3 right-3 z-[400] rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 p-3 shadow-md flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
          <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
          HQ: 4 Broadhalgh Rd, Rochdale
        </div>
        <div className="text-[11px] text-blue-600 font-semibold flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
          Greater Manchester Covered
        </div>
      </div>
    </div>
  );
}
