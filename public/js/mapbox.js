/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoidml0bzA0NSIsImEiOiJjanQ3aXhpcGowc2c1M3lvbWg5N2d1M240In0.YeAkwnfnWnQL-woe28Fd3w';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vito045/ck1sbrxs90pic1cqixpkz76cu',
    scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(location => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
      })
      .setLngLat(location.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
        offset: 30
      })
      .setLngLat(location.coordinates)
      .setHTML(`<p>Day ${location.dat}: ${location.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(location.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};