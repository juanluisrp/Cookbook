var map;
map = new OpenLayers.Map('map');

var ol_wms = new OpenLayers.Layer.WMS( "OpenLayers WMS",
    "http://vmap0.tiles.osgeo.org/wms/vmap0?", {layers: 'basic'},
    {'attribution': 'Provided by OSGeo'});

var jpl_wms = new OpenLayers.Layer.WMS( "NASA Global Mosaic",
    "http://t1.hypercube.telascience.org/cgi-bin/landsat7", 
    {layers: "landsat7"},
    {attribution:"Provided by Telascience"});

map.addLayers([ol_wms, jpl_wms]);

map.addControl(new OpenLayers.Control.LayerSwitcher());
// OpenLayers.Control.Attribution is one of the default
// controls - only needs to be added when the map instance is
// created with the controls option
//map.addControl(new OpenLayers.Control.Attribution());
map.zoomToMaxExtent();