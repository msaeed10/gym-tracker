const isWithinRegion = (point) => {
    //make api call to get geofences made
    let j = 0;
    let geofence = ;
    let edges = geofence.geofence_edges;
    let numSides = geofence.geofence_edges.length;
    let oddNodes = false;
    for(let i = 0; i < numSides; i++) {
        j++;
        if(j == numSides){
            j = 0;
        }
        if( 
            ((edges[i].latitude < point.latitude) && (edges[j].latitude >= point.latitude)) || 
            ((edges[j].latitude < point.latitude) && (edges[i].latitude >= point.latitude))
            ) {
                if(edges[i].longitude + (point.latitude - edges[i].latitude) / (edges[j].latitude - edges[i].latitude) * (edges[j].longitude - edges[i].longitude) < point.longitude) {
                    oddNodes = !oddNodes;
                }
            }
    }
    return oddNodes;
}