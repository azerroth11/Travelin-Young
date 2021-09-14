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
// Tooltip stays on hover
imageSeries.tooltip.label.interactionsEnabled = true
imageSeries.tooltip.keepTargetHover = true
// Data
imageSeriesTemplate.propertyFields.latitude = 'latitude'
imageSeriesTemplate.propertyFields.longitude = 'longitude'
imageSeriesTemplate.propertyFields.name = 'name'
imageSeries.data = [
    {
        latitude: 55.6761,
        longitude: 12.5683,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YWVHfn_zIS8?controls=0" frameborder="0"; controls=0;></iframe>',
        name: 'Copenhagen',
    },
    {
        latitude: 56.1629,
        longitude: 10.2039,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/embed/watch?v=hmqbUfgoWfw" frameborder="0"; encrypted-media;></iframe>',
        name: 'Aarhus',
    },
    {
        latitude: 55.6122,
        longitude: 9.7467,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=hmqbUfgoWfw" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Egeskov',
    },
    {
        latitude: 55.496,
        longitude: 9.4731,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=hU6IG5drWmM" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Kolding',
    },
    {
        latitude: 54.8589,
        longitude: 10.3875,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=LUB01WCl2z4" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Ærø',
    },
    {
        latitude: 56.0308,
        longitude: 12.5921,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=BCHgdOwpOzU" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Helsingør',
    },
    {
        latitude: 55.1868,
        longitude: 11.7098,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=RIJVVXbaUUg" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Gavnø',
    },
    {
        latitude: 55.4038,
        longitude: 10.4024,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=4aOEU_NUers" frameborder="0"; encrypted-media;></iframe>',
        name: 'Odense',
    },
    {
        latitude: 55.1042,
        longitude: 10.2287,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=4aOEU_NUers" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Faaborg',
    },
    {
        latitude: 55.7884,
        longitude: 12.4947,
        title: 'Lyngby - https://www.youtube.com/watch?v=YbjR_hU1HKM',
        // name: 'Lyngby',
    },
    {
        latitude: 56.0865,
        longitude: 12.4008,
        title: ' https://www.youtube.com/watch?v=rqiOFEhEEDw',
        // name: 'Rudolph Tegners Museum',
    },
    {
        latitude: 54.9852,
        longitude: 12.2797,
        title: 'https://www.youtube.com/watch?v=b5RmMEU9poE',
        // name: 'Stege and Nyord',
    },
    {
        latitude: 54.77560,
        longitude: 11.841,
        title: 'https://www.youtube.com/watch?v=W-3cPeXGe2g',
        // name: 'Middelercentret Nykøbing Falster',
    },
    {
        latitude: 55.7570,
        longitude: 9.4196,
        title: 'https://www.youtube.com/watch?v=hmqbUfgoWfw - https://www.youtube.com/watch?v=hU6IG5drWmM',
        // name: 'Jelling',
    },
    {
        latitude: 56.0508,
        longitude: 9.945,
        title: 'https://www.youtube.com/watch?v=yf-exheH4eI',
        // name: 'Skanderborg',
    },
    {
        latitude: 55.3337,
        longitude: 10.9739,
        title: 'https://www.youtube.com/watch?v=hU6IG5drWmM',
        // name: 'Great Belt Bridge',
    },
    {
        latitude: 55.7268,
        longitude: 12.5802,
        title: 'https://www.youtube.com/watch?v=kCwOvm3FM3I',
        // name: 'Forgotten Giants',
    },
    {
        latitude: 55.6433,
        longitude: 12.3455,
        title: 'https://www.youtube.com/watch?v=GrBs3VevuVE',
        // name: 'Experimentarium',
    },
    {
        latitude: 55.7284,
        longitude: 9.1124,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=hmqbUfgoWfw" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Bilund',
    },
    {
        latitude: 55.8147,
        longitude: 10.5886,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=I9abDsoC-PQ" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Samsø',
    },
    {
        latitude: 54.9841,
        longitude: 12.5437,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=OPpz4wJyr_s" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Møns Klint',
    },
    {
        latitude: 54.9138,
        longitude: 9.7922,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=xLslyAF4tSY" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Sønderborg',
    },
    {
        latitude: 55.8565,
        longitude: 11.9746,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=BkLc393Wdrk" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Jægerspris Slot',
    },
    {
        latitude: 54.7275,
        longitude: 11.4649,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=I9abDsoC-PQ" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Lolland', HERE HERE HERE HERE
    },
    {
        latitude: 55.1612,
        longitude: 11.154,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=dWG8R8_gbRA" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Omø',
    },
    {
        latitude: 56.4606,
        longitude: 10.0365,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=OqEYLmYbMIs" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Randers',
    },
    {
        latitude: 57.0488,
        longitude: 9.9217,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=Kq4uX1urfCo" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Aalborg',
    },
    {
        latitude: 57.725,
        longitude: 10.5792,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=Y7j1Z2Gr4-Q" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Skagen',
    },
    {
        latitude: 56.6396,
        longitude: 8.7826,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=-FtBx2KWVQA" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Spøttrup Borg',
    },
    {
        latitude: 56.4569,
        longitude: 9.1662,
        title: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=jt-b-_0z6nM" frameborder="0"; encrypted-media;></iframe>',
        // name: 'Mønsted Kalkgruber',
    },
    {
        latitude: 55.9279,
        longitude: 12.3008,
        title: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fo_GstGD9jo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        // name: 'Frederiksborg',
    },
]
polygonTemplate.propertyFields.fill = 'fill'
// Disabled zoom
map.seriesContainer.draggable = false
map.seriesContainer.resizable = false
map.maxZoomLevel = 1
map.seriesContainer.events.disableType('doublehit')
map.chartContainer.background.events.disableType('doublehit')
// Set Zoom
// TBD
// Main cities label
var label = imageSeriesTemplate.createChild(am4core.Label)
label.text = '{name}'
label.fontSize = '1.8rem'
label.fontWeight = 'bolder'
label.horizontalCenter = 'middle'
label.padding(12, 0, 0, 0)
// Enabled scroll through
map.chartContainer.wheelable = false
