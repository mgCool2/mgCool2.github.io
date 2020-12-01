var itemID; // variable to assign sequential id's to all the elements in the menu. Independent of data in the arrays.
var cart = []; // array to store all the info of cart items.
var totalCost; // To store the total cost of the items.
var numberOfCartItems; // To store the number of items in the cart.

var targetPhoneNumber = "9660813119"; // The phone number to whom the order must be placed.

var section1 = [
["CREAM OF TOMATO SOUP","Italian style soup made with fresh tangy tomatoes, olive oil and garlic",100,"./images/food.jpg",1],
["SPICY VEG AND CORIANDER SOUP","Spicy mixed vegetables soup with green chilli, coriander and coconut cream",100,"./images/food.jpg",2],
["SWEET CORN VEG SOUP","Thick cream style American corn soup with mixed vegetables",100,"./images/food.jpg",3],
["CREAM OF SPINACH AND MUSHROOM SOUP","Spinach, cream and mushroom",100,"./images/food.jpg",4]
];



var section2 = [
["ONION RINGS","Thick slices of onions lightly battered & butter fried",120,"./images/food.jpg",5],
["AMERICAN CHEESE CORN BALL","Golden fried cheese ball stuﬀed with American sweet corn",175,"./images/food.jpg",6],
["MASALA GARLIC BREAD","Fresh oven-baked garlic bread with Paneer, roasted garlic butter and herbs",150,"./images/food.jpg",7],
["FRENCH FRIES","",100,"./images/food.jpg",8],
["MANHATTAN FRENCH FRIES","Golden fried potato wedges with cheese and salsa",140,"./images/food.jpg",9],
["BOMBAY MASALA FRENCH FRIES","Golden fried potato wedges with Indian Bombay masala",130,"./images/food.jpg",10],
["NACHOS VEG SUPREME","Nacho chips with veg mixture",140,"./images/food.jpg",11],
["MEXICAN NACHOS","Nachos served with beans, jalapenos and black olives",140,"./images/food.jpg",12],
["GOBI-65","Cauliﬂower marrinated in Indian spice and deep fried",190,"./images/food.jpg",13],
["MUSHROOM - 65","Mushroom marrinated in Indian spice and deep fried",210,"./images/food.jpg",14],
["MASALA PAPAD - 1 No","Papad with chutney",50,"./images/food.jpg",15]
];


var section3 = [
["PANEER TIKKA","Juicy chuncks of paneer marinated in yoghurt with traditional tikka masala",220,"./images/food.jpg",16],
["PANEER SEEKH KEBAB","Paneer with exotic herbs and barbequed crisp",230,"./images/food.jpg",17],
["VEGETABLE SEEKH KEBAB","Minced vegetable blended with exotic herbs and barbequed crisp",220,"./images/food.jpg",18],
["TANDOORI HARI GOBI","Cauliﬂower marinated with tandoori masala and cream",200,"./images/food.jpg",19],
["ACHARI PANEER TIKKA","Malai Paneer marinated with a special blend of achari masala",220,"./images/food.jpg",20],
["GARLIC CHEESE PANEER TIKKA","Paneer marinated with cheese and garlic",230,"./images/food.jpg",21],
["HARIYALI PANEER TIKKA","Paneer marinated with mint & chutney",220,"./images/food.jpg",22],
["MADRASI MUSHROOM","Mushroom, stuﬀed paneer & cheese",220,"./images/food.jpg",23],
["DINGRI ACHARI ADRAKI","Mushroom, stuﬀed paneer, achari masala & cheese",230,"./images/food.jpg",24],
["MUSHROOM GULL","Mushroom, stuﬀed paneer & cheese",230,"./images/food.jpg",25],
["GOBI TIKKA","Juicy chuncks of cauliﬂower marinated in yoghurt with traditional tikka masala",200,"./images/food.jpg",26],
["ACHARI GOBI TIKKA","Juicy chuncks of cauliﬂower marinate in yoghurt with achari tikka masala",200,"./images/food.jpg",27],
["BABY CORN TANDOORI TIKKA","Baby corn marinated in yoghurt with traditional tikka masala",200,"./images/food.jpg",28],
["ACHARI BABY CORN","Baby corn marinated in yoghurt with achari tikka masala",200,"./images/food.jpg",29],
["HARIYALI BABY CORN","Baby corn marinated with hariyali masala",200,"./images/food.jpg",30],
["MALAI BABY CORN","Baby corn marinated with malai masala",200,"./images/food.jpg",31]
];


var section4 = [
["PASTA AND YOGHURT SALAD","Freshly made pasta with fresh greens and greek yoghurt",130,"./images/food.jpg",32],
["CORN BEAN AND PASTA SALAD","Freshly made pasta with American Corn Beans, veg mayo and cream",130,"./images/food.jpg",33],
["RUSSIAN SALAD","Salad with boiled vegetables topped with veg mayo dressing",150,"./images/food.jpg",34],
["GREEN SALAD","Fresh vegetables",100,"./images/food.jpg",35]
];


var section5 = [
["CHEESE & BEAN QUESADILLA","Cheese, folded soft tortilla, jalapeno, chili & black beans",170,"./images/food.jpg",36],
["CHEESE & PANEER QUESADILLA","Cheese, folded soft tortilla, paneer & jalapeno",200,"./images/food.jpg",37]
];


var section6 = [
["MEXICAN VEG WRAP","Soft tortilla, capsicum, lettuce, tomato, onion, cheese & mayo",150,"./images/food.jpg",38],
["PANEER & MUSHROOM WRAP","Tortilla, paneer, mushroom, lettuce, cheese & tomato",180,"./images/food.jpg",39],
["SPLENDER CLUB WRAP","Tortilla, paneer, onion, capsicum, zucchini, lettuce, cheese & tomato",180,"./images/food.jpg",40]
];


var section7 = [
["PENNE ARABITTA","Tomato base paprika Sauce",170,"./images/food.jpg",41],
["FARFALLE PESTO CREAM SAUCE","Basil ﬂavoured Fresh cream with Cheese",170,"./images/food.jpg",42],
["MIX VEGETABLE GARLIC, OREGANO AND CHEESE","Sauce- White/ Red Optional, Tomato base with mix vegetable, olive oil and cheese",190,"./images/food.jpg",43],
["MEXICAN PASTA DELIGHT","Colour pepper with Mexican bean with cheese",190,"./images/food.jpg",44]
];


var section8 = [
["MEXICAN BEANS AND CHEESE ENCHILADAS","Tortilla roti ,Mexican bean with garlic and cheese",175,"./images/food.jpg",45],
["SPICY PANEER ENCHILADAS","Tortilla roti paneer with cheese",175,"./images/food.jpg",46],
["AMERICAN CORN AND CHEESE ENCHILADAS","Tortilla roti, American corn with garlic and cheese",175,"./images/food.jpg",47]
];



var section9 = [
["ITALIAN SIZZLER","Sautéed vegetables, white and green pastas sizzled with a dollop of pasta sauce and dotted butter on a sizzler plate",300,"./images/food.jpg",48],
["INDIAN SIZZLER","Briyani, dal makhni & chic piece masala",300,"./images/food.jpg",49],
["PANEER CORN SIZZLER","Paneer, American corn, paprika & herbs",300,"./images/food.jpg",50],
["FRICASSEE OF PANNER,MUSHROOM AND CORN","Spicy mushroom, paneer, corn with bed of rice",300,"./images/food.jpg",51]
];


var section10 = [
["GRILLED MASALA BOMBAY DOUBLE DECKER SANDWICH","Doubled Decker grilled sandwich with Tandoori paneer and masala vegetables",170,"./images/food.jpg",52],
["SPICY PANEER SANDWICH","Spicy sandwich with roasted paneer and green chili",130,"./images/food.jpg",53],
["TEXAS VEG PLAIN SANDWICH","Cucumber, tomato, onion, lettuce, tacos & mayo",100,"./images/food.jpg",54],
["TEXAS VEG SANDWICH - GRILLED","Zucchini, capsicum, baby corn, carrot, broccoli, onion, cheese, lettuce & mayo",150,"./images/food.jpg",55],
["GREEK VEG SANDWICH - GRILLED","Pesto paste, broccoli, capsicum, carrot, baby corn, onion, lettuce, cheese & mayo",160,"./images/food.jpg",56],
["MUSHROOM & PANEER SANDWICH","Paneer, mushroom & mayo",160,"./images/food.jpg",57],
["VEG CLUB SANDWICH","Veg patty, cheese, lettuce, cucumber, tomato & onion",170,"./images/food.jpg",58]
];


var section11 = [
["VEG CHEESE BURGER","Veg burger with cheese and veg patty",100,"./images/food.jpg",59],
["PANEER AND CORN BURGER","Veg burger with Paneer, corn and veg patty",150,"./images/food.jpg",60],
["TEXAS BURGER","Burger with Nachos, veg patty and jalapeno",150,"./images/food.jpg",61],
["DOUBLE BURGER","Double burger with ﬂame-grilled two veg patty's topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup and sliced white onions on a soft bun",180,"./images/food.jpg",62]
];


var section12 = [
["BOMBAY TANDOORI PIZZA","Tandoori paneer tikka with cheese",170,"./images/food.jpg",63],
["MUSHROOM DELIGHT PIZZA","Mushroom with cheese",170,"./images/food.jpg",64],
["MARGARITA","Basil paste & cheese",150,"./images/food.jpg",65],
["VEG JUNGLE","Zucchini, tomato, onion, jalapeno, red pepper & baby corn",170,"./images/food.jpg",66],
["VEG ROMANTIC PIZZA","Baby corn, broccoli, carrot, tomato,capsicum & onion",170,"./images/food.jpg",67],
["DELUXE VEG","Onion, capsicum, mushroom, golden corn & paneer",200,"./images/food.jpg",68]
];


var section13 = [
["NAAN","Indian Traditional grinded maida ﬂour bread baked in tandoor",50,"./images/food.jpg",69],
["ROTI","Indian ﬂourWheat bread baked in tandoor",45,"./images/food.jpg",70],
["BUTTER NAAN","Naan with butter",55,"./images/food.jpg",71],
["CHEESEE GARLIC NAAN","Indian Bread topped with garlic and cheese",80,"./images/food.jpg",72],
["KASHMIRI NAAN","Indian Bread stuﬀed with badam, cashew and glazed cherries",120,"./images/food.jpg",73],
["BUTTER ROTI","Roti with butter",55,"./images/food.jpg",74],
["KULCHA","Indian Traditional grinded maida ﬂour bread baked, coriander in tandoor",50,"./images/food.jpg",75],
["STUFFED KULCHA","Kulcha with paneer and mixed vegetables",75,"./images/food.jpg",76],
["ROMALI ROTI","Soft hand tossed grilled Indian bread",75,"./images/food.jpg",77],
["ALOO PARATHA","Soft Layered Indian wheat bread stuﬀed with potatoes",75,"./images/food.jpg",78],
["GOBI PARATHA","Soft Layered Indian wheat bread stuﬀed with garden fresh cauliﬂowers",75,"./images/food.jpg",79],
["METHI PARATHA","Stuﬀed Indian Wheat bread with Fenugreek Leaves",75,"./images/food.jpg",80],
["PLAIN PARATHA","Soft Layered Indian wheat bread",55,"./images/food.jpg",81],
["PANEER PARATHA","Indian bread stuﬀed with crumbled, spiced cottage cheese",80,"./images/food.jpg",82],
["STUFFED PARATHA","Indian bread stuﬀed with paneer and vegetables",75,"./images/food.jpg",83]
];


var section14 = [
["DAL MAKHNI","A spicy and heavy dal preparation made with a combination of rajma and urad dal with lots of butter and cream",200,"./images/food.jpg",84],
["DAL TADKA","Yellow lentils tempered with herbs and Indian spices",190,"./images/food.jpg",85],
["CHENNA MASALA","Indian chickpeas cooked in a spicy tomato gravy and Indian spices",190,"./images/food.jpg",86],
["PANEER BUTTER MASALA","Thick gravy made with cubes of cottage cheese mixed in a buttery sauce of tomatoes, onion paste and Indian spices",200,"./images/food.jpg",87],
["PANEER TIKKA MASALA","A marinated cottage cheese cubes grilled to perfection and then cooked in a spicy gravy",200,"./images/food.jpg",88],
["KADAI PANEER","Cottage cheese cooked in a kadai with capsicum, tomato, onion and ﬂavorful masala",200,"./images/food.jpg",89],
["METHI MUTTER MASALA","Fresh fenugreek leaves and green peas cooked with masalas and enriched with cream",200,"./images/food.jpg",90],
["PALAK PANEER","Cottage cheese cooked in ﬂavoured spinach gravy and fresh Indian spices",200,"./images/food.jpg",91],
["MUSHROOM MASALA","Indian gravy made with mushroom mixed in a buttery sauce of tomatoes, onion paste and Indian spices",200,"./images/food.jpg",92],
["ALOO GOBI MASALA","Dry vegetarian Indian side dish made with potatoes and cauliﬂower mixed with Indian spices",190,"./images/food.jpg",93],
["MALAI VEGETABLE KOFTA","Deep fried cottage cheese and vegetable dumplings in rich and creamy gravy made of tomatoes and cashewnuts",220,"./images/food.jpg",94],
["VEGETABLE MAKHANI","Mixed vegetables gravy with fresh butter cashew, onion, tomato and cream",190,"./images/food.jpg",95],
["MIX VEGETABLE KADAI","Spicy mixed vegetable cooked with spices Indian gravy",190,"./images/food.jpg",96],
["PANEER LABABDAR (Spicy Lovers)","Paneer cooked in an aromatic spicy gravy",200,"./images/food.jpg",97],
["METHI CHAMAN","Paneer with fenugreekmethi leaves",220,"./images/food.jpg",98],
["VEG KOLHAPURI","Mixed vegetable in a thick, spiced gravy",200,"./images/food.jpg",99],
["VEG SAAGWALA","Assorted Veggies in Spinach Gravy",200,"./images/food.jpg",100],
["DAL PALAK","Dal and Palak Gravy",200,"./images/food.jpg",101],
["VEG TRIANGA","Tri Colour Gravy",350,"./images/food.jpg",102],
["INDIAN PULAV","Indian long grain basmati rice ﬂavoured with assorted Indian spices and mixed vegetables",150,"./images/food.jpg",103],
["VEG BRIYANI","Indian long grain basmati rice cooked with green vegetables, desi ghee, curd and endless spices",150,"./images/food.jpg",104],
["VEG FRIED RICE","Chopped Capcicum, carrot, cauliﬂower tossed with steamed long grain rice",150,"./images/food.jpg",105],
["GHEE RICE","Mildly spiced long grain rice with ghee sautéed and mixed herbs",160,"./images/food.jpg",106],
["MUSHROOM FRIED RICE","Fresh Mushroom tossed with steamed long grain rice",160,"./images/food.jpg",107],
["PANEER FRIED RICE","Basmati rice, soft paneer and assorted vegetables, ﬂavored with soy sauce",160,"./images/food.jpg",108],
["CASHEW NUT RICE","A fragrant and slightly spicy rice long grain rice with cashew nuts",170,"./images/food.jpg",109],
["JEERA RICE","Indian Long Grain rice ﬂavored with cumin and lightly spiced with whole garam masala",150,"./images/food.jpg",110],
["BUTTER RICE","Indian Long Grain rice tossed in butter and Indian herbs",170,"./images/food.jpg",111]
];


var section15 = [
["GOBI MANCHURIAN","Cauliﬂower balls tossed with spicy sauce",175,"./images/food.jpg",112],
["CHILLY GOBI","Cauliﬂower ﬂorets battered and deep fried with tossed with chilly sauce",175,"./images/food.jpg",113],
["PANEER MANCHURIAN","Indian Cottage Cheese, cooked in delicious vegetables and Chinese sauces",190,"./images/food.jpg",114],
["MUSHROOM MANCHURIAN","Fresh mushrooms deep fried and tossed with sweet and sour sauce",180,"./images/food.jpg",115],
["VEG NOODLES","Noodles with vegetables",160,"./images/food.jpg",116],
["SEZCHUAN FRIED RICE","Spicy fried rice with vegetables",160,"./images/food.jpg",117],
["SEZCHUAN NOODLES","Spicy noodles with vegetables",170,"./images/food.jpg",118]
];

var sections = [
  [section1, "SOUPS", "Section Description", "Section1ID"],
  [section2, "STARTERS", "Section Description", "Section2ID"],
  [section3, "TANDOOR STARTERS", "Section Description", "Section3ID"],
  [section4, "SALADS", "Section Description", "Section4ID"],
  [section5, "QUESADILLA", "Section Description", "Section5ID"],
  [section6, "WRAP", "Section Description", "Section6ID"],
  [section7, "PASTA", "Section Description", "Section7ID"],
  [section8, "MEXICAN", "Section Description", "Section8ID"],
  [section9, "SIZZLER", "Section Description", "Section9ID"],
  [section10, "SANDWICH", "Section Description", "Section10ID"],
  [section11, "BURGER", "Section Description", "Section11ID"],
  [section12, "PIZZAS", "Section Description", "Section12ID"],
  [section13, "INDIAN BREADS", "Section Description", "Section13ID"],
  [section14, "INDIAN GRAVY", "Section Description", "Section14ID"],
  [section15, "CHINESE", "Section Description", "Section15ID"]
];

// Function to hide the overlay
function removeOverlay() {
  $(".overlay").hide();
}

// function to display all the items in the sections array.
function displayMenuItems() {
  itemID = 1;

  for (var i = 0; i < sections.length; i++) {
    $(".nav-underline").append(
      '<a class="nav-link" href="#' +
        sections[i][3] +
        '">' +
        sections[i][1] +
        "</a>"
    );
  }

  for (var i = 0; i < sections.length; i++) {
    $(".placeholder").before(
      "<section " +
        '" id="' +
        sections[i][3] +
        '">' +
        '<div class="my-3 p-3 bg-white rounded shadow-sm section' +
        i +
        '"><h6 class="border-bottom border-gray pb-2 mb-0">' +
        sections[i][1] +
        "</h6></div></section>"
    );
    for (var j = 0; j < sections[i][0].length; j++) {
      $(".section" + i).append(
        '<div class="media text-muted pt-3"><img class="item-img" src="' +
          sections[i][0][j][3] +
          '">' +
          '<div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray row">' +
          '<div class="col-md-6">' +
          '<div class="d-flex justify-content-between align-items-center w-100 item-name"><span class="text-gray-dark mr-auto">' +
          sections[i][0][j][0] +
          '</span></div><p class="item-details mr-auto">' +
          sections[i][0][j][1] +
          '</p></div><div class="col-md-6">' +
          '<button class="btn btn-sm btn-outline-danger float-right page-remove-button page-remove-button-' +
          sections[i][0][j][4] +
          '" id="remove-button-' +
          '">Remove</button>' +
          '<button class="btn btn-sm btn-success my-cart-btn float-right" data-id="' +
          sections[i][0][j][4] +
          '" data-name="' +
          sections[i][0][j][0] +
          '" data-price="' +
          '" id="add-to-cart-' +
          sections[i][0][j][4] +
          '">Add to cart</button><span class="price float-right">Rs. ' +
          sections[i][0][j][2] +
          "/-</span></div></div></div>"
      );
      itemID = itemID + 1;
    }
  }

  // For smooth scrolling to the section links
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 110,
      },
      500
    );
  });
}

// Action performed when the cart icon is clicked.
function onClickingMyCart() {
  $(".menu-container").fadeToggle(150);
  $(".cart-container").toggle();

  displayCartItems();
}

// Action performed when the add to cart button is clicked
function addToCart() {
  var itemName = $(this).data("name");
  var itemInfo;
  $(this).hide();

  var id = $(this).data("id");
  var positionInCart;

  var alreadyInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (itemName == cart[i][0]) {
      alreadyInCart = true;
      cart[i][2] += 1;
      console.log("Added 1 item to cart: ");
      positionInCart = i;
    }
  }
  if (alreadyInCart == false) {
    for (var i = 0; i < sections.length; i++) {
      for (var j = 0; j < sections[i][0].length; j++)
        if (itemName == sections[i][0][j][0]) {
          var name = sections[i][0][j][0];
          var price = sections[i][0][j][2];
          var quantity = 1;
          var imageFilePath = sections[i][0][j][3];
          itemInfo = [name, price, quantity, imageFilePath, id];

          positionInCart = cart.length;
        }
    }
    cart.push(itemInfo);
  }

  updateCartDetails();

  showMenuRemoveButton(id);
}

// Function to reveal the hiding remove button
function showMenuRemoveButton(id) {
  $(".page-remove-button-" + id).show();
  $(".page-remove-button-" + id).attr("id", id);
}

// To increment the quantity of an item that is already in the cart.
function incrementCartItem() {
  var cartPosition = this.id;
  cartPosition = cartPosition.slice(12, cartPosition.length);
  cart[cartPosition][2] += 1;
  updateCartDetails();
}

// To decrement the quantity of an item that is already in the cart.
function decrementCartItem() {
  var cartPosition = this.id;
  cartPosition = cartPosition.slice(13, cartPosition.length);
  cart[cartPosition][2] -= 1;
  if (cart[cartPosition][2] === 0) {
    cart.splice(cartPosition, 1);
  }
  updateCartDetails();
}

// To remove all items of the given type from the cart
function removeFromCart() {
  $("#add-to-cart-" + $(this).data("id")).show();

  var cartPosition = this.id;
  cartPosition = cartPosition.slice(14, cartPosition.length);
  cart.splice(cartPosition, 1);
  updateCartDetails();
  hideMenuRemoveButton();
}

// Hiding the remove buttons for the items that are not in the cart
function hideMenuRemoveButton() {
  $(".page-remove-button").hide();
  for (var i = 0; i < cart.length; i++) {
    $(".page-remove-button-" + cart[i][4]).show();
  }
}

// Function to reveal add to cart buttons
function removeFromCartByMenu() {
  $(this).hide();
  console.log(this.id);
  for (var i = 0; i < cart.length; i++) {
    if (this.id == cart[i][4]) {
      cart.splice(i, 1);
    }
  }
  $("#add-to-cart-" + this.id).show();
  updateCartDetails();
}

// Updates the total number of items and total cost. Called by addToCart()
function updateCartDetails() {
  numberOfCartItems = 0;
  totalCost = 0;

  for (var i = 0; i < cart.length; i++) {
    numberOfCartItems = numberOfCartItems + cart[i][2];
    totalCost = totalCost + cart[i][1] * cart[i][2];
  }
  $(".my-cart-badge").text(numberOfCartItems);
  displayCartItems();
}

// Function to display the items in the cart
function displayCartItems() {
  $("#my-cart-table").html("");
  if (numberOfCartItems === 0 || numberOfCartItems == null) {
    $("#my-cart-empty-message").show();
  } else {
    $("#my-cart-empty-message").hide();
    for (var i = 0; i < cart.length; i++) {
      $("#my-cart-table").append(
        "<tr" +
          ' data-id="' +
          i +
          '" data-price="' +
          cart[i][1] +
          '">' +
          '<td class="text-left"><img width="64px" height="64px" src="' +
          cart[i][3] +
          '">' +
          "</td>" +
          "<td class='text-center' style='min-width:140px;'>" +
          cart[i][0] +
          "</td>" +
          "</tr>" +
          "<tr" +
          ' data-id="' +
          i +
          '" data-price="' +
          cart[i][1] +
          '">' +
          '<td class="text-left" title="Unit Price">Rs. ' +
          cart[i][1] +
          "</td>" +
          "<td title='Quantity'><button class='btn btn-sm btn-outline-dark button minusButton " +
          "' style='z-index=-10' id='minus-button-" +
          i +
          "'>-</button> <span data-id='" +
          i +
          "' id='quantity" +
          i +
          "'>" +
          cart[i][2] +
          "</span> <button class='btn btn-sm btn-outline-dark button plusButton' style='z-index=-10' id='plus-button-" +
          i +
          "' data-name='" +
          cart[i][0] +
          "'>+</button>" +
          "</td>" +
          "</tr>" +
          '<tr style="border-bottom: 1px solid #bbb;"' +
          ' data-id="' +
          i +
          '" data-price="' +
          cart[i][1] +
          '">' +
          '<td title="Total" class="col-lg-2 col-md-2 col-sm-6 text-left itemTotalCost' +
          i +
          '" id=itemTotalCost"' +
          i +
          '"><strong>= Rs. ' +
          cart[i][1] * cart[i][2] +
          "</strong></div>" +
          '<td title="Remove from Cart" class="col-lg-2 col-md-2 col-sm-6" data-id="' +
          i +
          '"><a href="javascript:void(0);" class="btn btn-sm btn-outline-danger remove-button" id="remove-button-' +
          i +
          '" data-id="' +
          cart[i][4] +
          '">Remove</a></td>' +
          '</tr><hr style="border: 4px; max-width: 250px;">'
      );

      if (cart[i][2] == 1) {
        $("#minus-button-" + i).hide();
      } else {
        $("#minus-button-" + i).show();
      }
    }
    $("#my-cart-table").append(
      "<tr>" +
        '<td class="text-left"><strong>Total</strong></td>' +
        '<td class="text-right"><strong>= Rs. ' +
        totalCost +
        "</strong></td>" +
        "</tr>"
    );
  }
  addEventListeners();
}

// To add event listeners to buttons that were just added to the page.
function addEventListeners() {
  $(".minusButton").click(decrementCartItem);
  $(".plusButton").click(incrementCartItem);
  $(".remove-button").click(removeFromCart);
}

// To finalize the order and checkout
function checkout() {
  if (cart.length === 0 || cart.length == null) {
    $("#my-cart-empty-message")
      .fadeOut(120)
      .fadeIn(120)
      .fadeOut(120)
      .fadeIn(120);
  } else {
    var order = "";

    for (var i = 0; i < cart.length; i++) {
      order = order + cart[i][0] + "      " + cart[i][2] + "\n";
    }

    var encodedOrder = encodeURI(order);
    window.location.href =
      "https://api.whatsapp.com/send/?phone=+91" +
      targetPhoneNumber +
      "&lang=en&text=" +
      encodedOrder;
  }
}

// For the Offcanvas template
$(function () {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });
});

displayMenuItems(); // To display the menu items
updateCartDetails();

$(".page-remove-button").hide(); // Hiding the remove buttons till the item is added to the cart.
$(".cart-container").hide(); // Hiding the cart container till the button is pressed
$(".checkout-container").hide(); // Hiding the checkout container

$(".my-cart-icon").click(onClickingMyCart); // Calling the function to respond to the cart icon click

$(".my-cart-btn").click(addToCart); // Calling the function to respond to the add to cart click.

$(".page-remove-button").click(removeFromCartByMenu); // Calling the function to hide the menu remove button.

$(".remove-button").click(removeFromCart); // Calling the function to respond to the remove from cart click.

$(".my-cart-checkout").click(checkout); // Calling the function to respond to the checkout button.

$("#overlayOkButton").click(removeOverlay); // Calling the function to remove the overlay
