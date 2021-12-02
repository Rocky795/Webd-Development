// const body=document.querySelector('body')

// body.addEventListener('onload',async()=>{
//     const res=await axios.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyCSQza3D96S4p9PZx0wrOSuCfbGoWQdRlg&callback=initMap&v=weekly')
//     console.dir(res)
// })



let map;

function initMap() {
  const ulurl = { lat: 20.5937, lng: 78.9629 }
  map = new google.maps.Map(document.getElementById('map'), {
    center: ulurl,
    zoom: 4.4,
  });

  // // Marker ,positioned
  // const marker=new google.maps.Marker({
  //   position:ulurl,
  //   map:map
  // })


  // const infowindow=new google.maps.InfoWindow({
  //   content:'<h1>Pratham Bharti</h1>'

  // })

  // marker.addListener('click',()=>{
  //   infowindow.open(map,marker);
  // })
  const addmarkerbtn=document.getElementById('addmarker')

 

    var markers=[
      {
        coord: { lat: 20.5937, lng: 78.9629 },
        iconImage:"",
        content: '<h1>Geo Center of India</h1>'
      },
      {
        coord:{lat:28.5355,lng: 77.3910},
        content:'<h1>Welcome to Noida</h1>'
      }
    ]

    
      google.maps.event.addListener(map,'click',events=>{
        

        addMarker({coord:events.latLng})
      })
    
  
    // markers.forEach(a => {
    //   addMarker(a)
    // });
  // addMarker()
  // addMarker(d2)

  function addMarker(e) {
    var marker = new google.maps.Marker({
      position: e.coord,
      map: map,


    })

    if (e.content) {
      const infowindow = new google.maps.InfoWindow({
        content: e.content
  
      });
  
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      })
    }
  }


  // if (data.iconImage) {
  //   marker.setIcon(e.iconImage)
  // }

  


}