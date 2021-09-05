let map = AmCharts.makeChart('mapdiv', {
    type: 'map',
    theme: 'dark',
    projection: 'mercator',
    panEventsEnabled: false,
    backgroundColor: '#fff',
    dragMap: false,
    zoomOnDoubleClick: false,
    backgroundAlpha: 0,
    autoTransform: true,
    balloon: {
        adjustBorderColor: true,
        color: '#000000',
        cornerRadius: 2,
        fillColor: '#FFFFFF',
        fontSize: 24,
        borderThickness: 0.5,
        horizontalPadding: 4,
        verticalPadding: 1,
    },
    zoomControl: {
        zoomControlEnabled: false,
        homeButtonEnabled: false,
    },
    dataProvider: {
        map: 'europeHigh',
        getAreasFromMap: true,
        areas: [
            {
                id: 'DK',
                showAsSelected: true,
            },
            {
                id: 'US',
                showAsSelected: true,
            },
            {
                id: 'PL',
                showAsSelected: true,
            },
            {
                id: 'IS',
                showAsSelected: true,
            },
        ],
        lines: [
            {
                color: '#4095bf',
                arc: 0.7,
                latitudes: [56.2639, 51.9194],
                longitudes: [9.5018, 19.1451],
            },
            {
                color: '#4095bf',
                arc: 0.7,
                latitudes: [56.2639, 64.9631],
                longitudes: [9.5018, -19.0208],
            },
        ],
    },
    areasSettings: {
        zoom: false,
        selectable: false,
        color: '#B4B4B7',
        colorSolid: '#4095bf',
        selectedColor: '#4095bf',
        outlineColor: '#666666',
        outlineThickness: 0.2,
        rollOverColor: '#DCE7F7',
        rollOverOutlineColor: '#000000',
    },
})
