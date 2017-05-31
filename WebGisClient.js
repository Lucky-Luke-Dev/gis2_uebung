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
                    projection: 'EPSG:2056',
                    params: {
                        'LAYERS': 'gisuebung14:aussichtspunkt',
                        'STYLES': 'Aussichtspunktstyle'
                    },
                    serverType: 'geoserver'
                })
            }),
            new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: 'https://wms.geo.admin.ch/?',
                    projection: 'EPSG:2056',
                    params: {
                        'LAYERS': 'ch.astra.nationalstrassenachsen'
                    },
                    serverType: 'geoserver'
                })
            })
        ],
        view: new ol.View({
            projection: 'EPSG:3857', // WGS84 Web Mercator
            center: ol.proj.fromLonLat([8.51, 47.41]),
            zoom: 15
        }),
        controls: ol.control.defaults().extend([new ol.control.OverviewMap({collapsed: true})])

    });
    
}