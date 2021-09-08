let map = am4core.create('mapDK', am4maps.MapChart)
map.geodata = am4geodata_denmarkHigh
map.projection = new am4maps.projections.Mercator()
let polygonSeries = new am4maps.MapPolygonSeries()
polygonSeries.useGeodata = true
map.series.push(polygonSeries)
// Populate series data
let polygonTemplate = polygonSeries.mapPolygons.template
polygonTemplate.tooltipText = '{name}'
polygonTemplate.fill = am4core.color('#74B266')
// Hover state
let hs = polygonTemplate.states.create('hover')
hs.properties.fill = am4core.color('#367B25')
// Tooltip
let imageSeries = map.series.push(new am4maps.MapImageSeries())
let imageSeriesTemplate = imageSeries.mapImages.template
let circle = imageSeriesTemplate.createChild(am4core.Circle)
circle.radius = 12
circle.fill = am4core.color('#db7575')
circle.stroke = am4core.color('#FFFFFF')
circle.strokeWidth = 2
circle.tooltipHTML = '{title}'
// Tooltip links
imageSeriesTemplate.propertyFields.latitude = 'latitude'
imageSeriesTemplate.propertyFields.longitude = 'longitude'
imageSeries.data = [
    {
        latitude: 55.6761,
        longitude: 12.5683,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YWVHfn_zIS8?controls=0" frameborder="0"; encrypted-media;></iframe>',
    },
    {
        latitude: 56.1629,
        longitude: 10.2039,
        title: 'Aarhus',
    },
    {
        latitude: 55.6122,
        longitude: 9.7467,
        title: 'Egeskov',
    },
    {
        latitude: 55.496,
        longitude: 9.4731,
        title: 'Kolding',
    },
    {
        latitude: 54.8589,
        longitude: 10.3875,
        title: 'Ærø',
    },
    {
        latitude: 56.0308,
        longitude: 12.5921,
        title: 'Helsingør',
    },
    {
        latitude: 55.1868,
        longitude: 11.7098,
        title: 'Gavnø',
    },
    {
        latitude: 55.4038,
        longitude: 10.4024,
        title: 'Odense',
    },
    {
        latitude: 55.1042,
        longitude: 10.2287,
        title: 'Faaborg',
    },
    {
        latitude: 55.7284,
        longitude: 9.1124,
        title: 'Bilund',
    },
    {
        latitude: 55.8147,
        longitude: 10.5886,
        title: 'Samsø',
    },
    {
        latitude: 54.9841,
        longitude: 12.5437,
        title: 'Møns Klint',
    },
    {
        latitude: 54.9138,
        longitude: 9.7922,
        title: 'Sønderborg',
    },
    {
        latitude: 55.8565,
        longitude: 11.9746,
        title: 'Jægerspris Slot',
    },
    {
        latitude: 54.7275,
        longitude: 11.4649,
        title: 'Lolland',
    },
    {
        latitude: 55.1612,
        longitude: 11.154,
        title: 'Omø',
    },
    {
        latitude: 56.4606,
        longitude: 10.0365,
        title: 'Randers',
    },
    {
        latitude: 57.0488,
        longitude: 9.9217,
        title: 'Aalborg',
    },
    {
        latitude: 57.725,
        longitude: 10.5792,
        title: 'Skagen',
    },
    {
        latitude: 56.6396,
        longitude: 8.7826,
        title: 'Spøttrup Borg',
    },
    {
        latitude: 56.4569,
        longitude: 9.1662,
        title: 'Mønsted Kalkgruber',
    },
    {
        latitude: 55.9279,
        longitude: 12.3008,
        title: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fo_GstGD9jo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
]
polygonTemplate.propertyFields.fill = 'fill'
// Disabled zoom
map.seriesContainer.draggable = false
map.seriesContainer.resizable = false
map.maxZoomLevel = 1
map.seriesContainer.events.disableType('doublehit')
map.chartContainer.background.events.disableType('doublehit')
// Enabled scroll through
map.chartContainer.wheelable = false
