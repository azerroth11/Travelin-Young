let mapCPH = am4core.create('mapCPH', am4maps.MapChart)
mapCPH.geodata = am4geodata_copenhagenUltra
mapCPH.projection = new am4maps.projections.Mercator()
let polygonSeriesCPH = new am4maps.MapPolygonSeries()
polygonSeriesCPH.useGeodata = true
mapCPH.series.push(polygonSeriesCPH)
// Populate series data
let polygonTemplateCPH = polygonSeriesCPH.mapPolygons.template
polygonTemplateCPH.tooltipText = '{lu}'
polygonTemplateCPH.fill = am4core.color('#74B266')
// Hover state
let hsCPH = polygonTemplateCPH.states.create('hover')
hsCPH.properties.fill = am4core.color('#367B25')
// Tooltip
let imageSeriesCPH = mapCPH.series.push(new am4maps.MapImageSeries())
let imageSeriesTemplateCPH = imageSeriesCPH.mapImages.template
let circleCPH = imageSeriesTemplateCPH.createChild(am4core.Circle)
circleCPH.radius = 0.6
circleCPH.fill = am4core.color('#db7575')
circleCPH.stroke = am4core.color('#FFFFFF')
circleCPH.strokeWidth = 0.1
circleCPH.tooltipHTML = '{title}'
// Tooltip links
imageSeriesTemplateCPH.propertyFields.latitude = 'latitude'
imageSeriesTemplateCPH.propertyFields.longitude = 'longitude'
imageSeriesCPH.data = [
    {
        latitude: 55.9279,
        longitude: 12.3008,
        title: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fo_GstGD9jo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
]
polygonTemplate.propertyFields.fill = 'fill'
// Disabled zoom
mapCPH.seriesContainer.draggable = false
mapCPH.seriesContainer.resizable = false
mapCPH.maxZoomLevel = 1
mapCPH.seriesContainer.events.disableType('doublehit')
mapCPH.chartContainer.background.events.disableType('doublehit')
// Enabled scroll through
mapCPH.chartContainer.wheelable = false
