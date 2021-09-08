let mapEU = am4core.create('mapEU', am4maps.MapChart)
mapEU.geodata = am4geodata_europeUltra
mapEU.projection = new am4maps.projections.Mercator()
let polygonSeriesEU = new am4maps.MapPolygonSeries()
polygonSeriesEU.useGeodata = true
mapEU.series.push(polygonSeriesEU)
// Populate series data
let polygonTemplateEU = polygonSeriesEU.mapPolygons.template
polygonTemplateEU.tooltipText = '{name}'
polygonTemplateEU.fill = am4core.color('#74B266')
// Hover state
let hsEU = polygonTemplateEU.states.create('hover')
hsEU.properties.fill = am4core.color('#367B25')
// Tooltip
let imageSeriesEU = mapEU.series.push(new am4maps.MapImageSeries())
let imageSeriesTemplateEU = imageSeriesEU.mapImages.template
let circleEU = imageSeriesTemplateEU.createChild(am4core.Circle)
circleEU.radius = 0.6
circleEU.fill = am4core.color('#db7575')
circleEU.stroke = am4core.color('#FFFFFF')
circleEU.strokeWidth = 0.1
circleEU.tooltipHTML = '{title}'
// Tooltip links
imageSeriesTemplateEU.propertyFields.latitude = 'latitude'
imageSeriesTemplateEU.propertyFields.longitude = 'longitude'
imageSeriesEU.data = [
    {
        latitude: 55.9279,
        longitude: 12.3008,
        title: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fo_GstGD9jo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
]
polygonTemplate.propertyFields.fill = 'fill'
// Disabled zoom
mapEU.seriesContainer.draggable = false
mapEU.seriesContainer.resizable = false
mapEU.maxZoomLevel = 1
mapEU.seriesContainer.events.disableType('doublehit')
mapEU.chartContainer.background.events.disableType('doublehit')
// Enabled scroll through
mapEU.chartContainer.wheelable = false
// Exclude Russia and Svalbard
polygonSeriesEU.exclude = ['RU', 'SJ']
