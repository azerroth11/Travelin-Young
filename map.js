;<script>
    let chart = am4core.create('chartdiv', am4maps.MapChart) chart.geodata =
    am4geodata_worldHigh chart.projection = new am4maps.projections.Mercator()
    // Create map polygon series let polygonSeries = chart.series.push( new
    am4maps.MapPolygonSeries() ) polygonSeries.useGeodata = true let
    polygonTemplate = polygonSeries.mapPolygons.template
    polygonTemplate.tooltipText = '{name}' polygonTemplate.fill =
    am4core.color('#74B266') let hs = polygonTemplate.states.create('hover')
    hs.properties.fill = am4core.color('#367B25') polygonSeries.include = [
    'PT', 'ES', 'FR', 'DE', 'BE', 'NL', 'IT', 'AT', 'GB', 'IE', 'CH', 'LU', ]
</script>
