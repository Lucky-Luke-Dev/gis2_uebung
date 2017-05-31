function init() {
    
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: 'http://ikgtom2.ethz.ch/geoserver/wms?',
                    projection: 'EPSG:4326',
                    params: {
                        'LAYERS': 'gisuebung20:etankstellen_ref' 
                    },
                    serverType: 'geoserver'
                })
            }),
            new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: 'http://ikgtom2.ethz.ch/geoserver/wms?',
                    projection: 'EPSG:4326',
                    params: {
                        'LAYERS': 'gisuebung20:etankstellen_survey'
                    },
                    serverType: 'geoserver'
                })
            })
        ],
        view: new ol.View({
            projection: 'EPSG:3857', // WGS84 Web Mercator
            center: ol.proj.fromLonLat([8.51, 47.39]),
            zoom: 12
        }),
        controls: ol.control.defaults().extend([new ol.control.OverviewMap({collapsed: true})])

    });
    
}