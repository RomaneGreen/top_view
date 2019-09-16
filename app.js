

function bikeSelect () {

  let bikeOptions =  {

        "products": [
          {
            "id": 1,
            "name": "Adult Male Bike",
            "price": 20.50,
            "image": "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
            "product_type": "bike"
          },
          {
            "id": 2,
            "name": "Adult Female Bike",
            "price": 20.50,
            "image": "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
            "product_type": "bike"
          },
          {
            "id": 3,
            "name": "Kids Unisex Bike",
            "price": 12.75,
            "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
            "product_type": "bike"
          },
          {
            "id": 4,
            "name": "Adult Unisex Helmet",
            "price": 4.00,
            "image": "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
            "product_type": "accessory"
          },
          {
            "id": 5,
            "name": "Kids Unisex Helmet",
            "price": 3.50,
            "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
            "product_type": "accessory"
          },
          {
            "id": 6,
            "name": "Insurance",
            "price": 9.99,
            "image": "http://via.placeholder.com/250x250?text=Insurance",
            "product_type": "addon"
          }
        ]
    }

    console.log(bikeOptions["products"][0])
    let biked = bikeOptions["products"][0]
    var birds = "four"
    var ele = document.getElementById('sel');
    for (var i = 0; i < birds.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        
        console.log(bikeOptions["products"][i])
        let biker = bikeOptions["products"][i]
            
        ele.innerHTML = ele.innerHTML +
        '<option value="' + "bikes"+ '">' + "Bike ID - " + biker.id + " Bike Name: " + biker.name +"  Price $" + biker.price +  '</option>';
    }
}

function show(ele) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var msg = document.getElementById('msg');
    msg.innerHTML = 'Selected Bike: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
          '</b>';
}



bikeSelect()

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });


// let bikeRentals = {

//     "products": [
//       {
//         "id": 1,
//         "name": "Adult Male Bike",
//         "price": 20.50,
//         "image": "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
//         "product_type": "bike"
//       },
//       {
//         "id": 2,
//         "name": "Adult Female Bike",
//         "price": 20.50,
//         "image": "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
//         "product_type": "bike"
//       },
//       {
//         "id": 3,
//         "name": "Kids Unisex Bike",
//         "price": 12.75,
//         "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
//         "product_type": "bike"
//       },
//       {
//         "id": 4,
//         "name": "Adult Unisex Helmet",
//         "price": 4.00,
//         "image": "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
//         "product_type": "accessory"
//       },
//       {
//         "id": 5,
//         "name": "Kids Unisex Helmet",
//         "price": 3.50,
//         "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
//         "product_type": "accessory"
//       },
//       {
//         "id": 6,
//         "name": "Insurance",
//         "price": 9.99,
//         "image": "http://via.placeholder.com/250x250?text=Insurance",
//         "product_type": "addon"
//       }
//     ]
  
// }




// console.log(bikeRentals["products"][0])


//   let data = document.getElementById('outputdata')
  
//   data.innerHTML = JSON.stringify(bikeRentals["products"][0])