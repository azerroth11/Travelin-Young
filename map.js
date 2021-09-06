<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <script src="//cdn.amcharts.com/lib/4/core.js"></script>
        <script src="//cdn.amcharts.com/lib/4/maps.js"></script>
        <!-- <script src="//cdn.amcharts.com/lib/4/geodata/worldUltra.js"></script> -->
        <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
        <script src="./denmarkHigh.js"></script>
        <title>Our European travels</title>
    </head>
    <body>
        <section>
            <div id="chartdiv"></div>
            <script>
                let chart = am4core.create('chartdiv', am4maps.MapChart)
                chart.geodata = am4geodata_denmarkHigh
                chart.projection = new am4maps.projections.Mercator()
                let polygonSeries = chart.series.push(
                    new am4maps.MapPolygonSeries()
                )
                polygonSeries.useGeodata = true

                let polygonTemplate = polygonSeries.mapPolygons.template
                polygonTemplate.tooltipText = '{name}'
                polygonTemplate.fill = am4core.color('#74B266')
                let hs = polygonTemplate.states.create('hover')
                hs.properties.fill = am4core.color('#367B25')
            </script>
        </section>
    </body>
</html>
