export function mapServerData(serverData) {
  return {
    type: "FeatureCollection",
    features: serverData.map((obj, index) => ({
      id: index,
      type: "Feature",
      isActive: obj.isActive,
      geometry: {
        type: "Point",
        coordinates: [obj.lat, obj.long]
      },
      properties: {
        iconCaption: obj.serialNumber,
      },
      options: {
        iconLayout: 'default#image',
        iconImageSize: [30, 30],
        iconImageHref: getIconHref(obj),
        iconColor: getColor(obj),
        // Сместим иконку, что бы она была точно посередине и балунт открывался на ней
        iconImageOffset: [-14, -15]
      }
    }))
  };
}

function getColor(obj) {
  return obj.isActive ?
    '#1E98FF' :
    '#ED4543';
}

function getIconHref(obj) {
  return obj.isActive ?
    'https://res.cloudinary.com/dpjuglsyv/image/upload/v1534681338/active-station-icon.svg' :
    'https://res.cloudinary.com/dpjuglsyv/image/upload/v1534681337/break-station-icon.svg';
}