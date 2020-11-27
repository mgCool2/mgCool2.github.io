var itemID; // variable to assign sequential id's to all the elements in the menu. Independent of data in the arrays.
var cart = []; // array to store all the info of cart items.
var totalCost; // To store the total cost of the items.
var numberOfCartItems; // To store the number of items in the cart.

var section1 = [
  ["Item 1 Name", "Item 1 Description", 100, "./images/food.jpg", 1],
  ["Item 2 Name", "Item 2 Description", 200, "./images/food.jpg", 2],
  ["Item 3 Name", "Item 3 Description", 300, "./images/food.jpg", 3],
  ["Item 4 Name", "Item 4 Description", 400, "./images/food.jpg", 4],
];
var section2 = [
  ["Item 5 Name", "Item 1 Description", 100, "./images/food.jpg", 5],
  ["Item 6 Name", "Item 2 Description", 200, "./images/food.jpg", 6],
  ["Item 7 Name", "Item 3 Description", 300, "./images/food.jpg", 7],
  ["Item 8 Name", "Item 4 Description", 400, "./images/food.jpg", 8],
  ["Item 9 Name", "Item 5 Description", 500, "./images/food.jpg", 9],
  ["Item 10 Name", "Item 6 Description", 600, "./images/food.jpg", 10],
  ["Item 11 Name", "Item 7 Description", 700, "./images/food.jpg", 11],
  ["Item 12 Name", "Item 8 Description", 800, "./images/food.jpg", 12],
  ["Item 13 Name", "Item 9 Description", 900, "./images/food.jpg", 13],
  ["Item 14 Name", "Item 10 Description", 1000, "./images/food.jpg", 14],
  ["Item 15 Name", "Item 11 Description", 1100, "./images/food.jpg", 15],
  ["Item 16 Name", "Item 12 Description", 1200, "./images/food.jpg", 16],
];
var section3 = [
  ["Item 17 Name", "Item 17 Description", 100, "./images/food.jpg", 17],
  ["Item 18 Name", "Item 18 Description", 200, "./images/food.jpg", 18],
  ["Item 19 Name", "Item 19 Description", 300, "./images/food.jpg", 19],
  ["Item 20 Name", "Item 20 Description", 400, "./images/food.jpg", 20],
  ["Item 21 Name", "Item 21 Description", 500, "./images/food.jpg", 21],
  ["Item 22 Name", "Item 22 Description", 600, "./images/food.jpg", 22],
  ["Item 23 Name", "Item 23 Description", 700, "./images/food.jpg", 23],
  ["Item 24 Name", "Item 24 Description", 800, "./images/food.jpg", 24],
  ["Item 25 Name", "Item 25 Description", 900, "./images/food.jpg", 25],
  ["Item 26 Name", "Item 26 Description", 1000, "./images/food.jpg", 26],
  ["Item 27 Name", "Item 27 Description", 1100, "./images/food.jpg", 27],
  ["Item 28 Name", "Item 28 Description", 1200, "./images/food.jpg", 28],
  ["Item 29 Name", "Item 29 Description", 1300, "./images/food.jpg", 30],
  ["Item 30 Name", "Item 30 Description", 1400, "./images/food.jpg", 31],
  ["Item 31 Name", "Item 31 Description", 1500, "./images/food.jpg", 32],
  ["Item 32 Name", "Item 32 Description", 1200, "./images/food.jpg", 33],
];
var section4 = [
  ["Item 33 Name", "Item 33 Description", 100, "./images/food.jpg", 34],
  ["Item 34 Name", "Item 34 Description", 200, "./images/food.jpg", 35],
  ["Item 35 Name", "Item 35 Description", 300, "./images/food.jpg", 36],
  ["Item 36 Name", "Item 36 Description", 400, "./images/food.jpg", 37],
];

var sections = [
  [section1, "Section 1 Name", "Section Description", "Section1ID"],
  [section2, "Section 2 Name", "Section Description", "Section2ID"],
  [section3, "Section 3 Name", "Section Description", "Section3ID"],
  [section4, "Section 4 Name", "Section Description", "Section4ID"],
];

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
          '">Add to cart</button><span class="price float-right">Rs. ' +
          sections[i][0][j][2] +
          "/-</span></div></div></div>"
      );
      itemID = itemID + 1;
    }
  }
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
  var thi = this;

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

// Function to reveal
function removeFromCartByMenu() {
  $(this).hide();
  console.log(this.id);
  for (var i = 0; i < cart.length; i++) {
    if (this.id == cart[i][4]) {
      cart.splice(i, 1);
    }
  }
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
          '">Remove</a></td>' +
          '</tr><hr style="border: 4px; max-width: 250px;">'
      );
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

// To increment the quantity of an item that is already in the cart.
function incrementCartItem() {
  var cartPosition = this.id;
  cartPosition = cartPosition.slice(12, cartPosition.length);
  cart[cartPosition][2] += 1;
  updateCartDetails();
}

// To remove all items of the given type from the cart
function removeFromCart() {
  var cartPosition = this.id;
  cartPosition = cartPosition.slice(14, cartPosition.length);
  cart.splice(cartPosition, 1);
  updateCartDetails();
  hideMenuRemoveButton();
}

function hideMenuRemoveButton() {
  $(".page-remove-button").hide();
  for (var i = 0; i < cart.length; i++) {
    $(".page-remove-button-" + cart[i][4]).show();
  }
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

// To finalize the order and checkout
function checkout() {
  if (cart.length === 0 || myCart.length == null) {
    $("#my-cart-empty-message")
      .fadeOut(120)
      .fadeIn(120)
      .fadeOut(120)
      .fadeIn(120);
  } else {
    alert(cart);
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

$(".page-remove-button").hide(); // Hiding the remove buttons till the item is added to the cart.
$(".cart-container").hide(); // Hiding the cart container till the button is pressed

$(".my-cart-icon").click(onClickingMyCart); // Calling the function to respond to the cart icon click

$(".my-cart-btn").click(addToCart); // Calling the function to respond to the add to cart click.

$(".page-remove-button").click(removeFromCartByMenu); // Calling the function to hide the menu remove button.

$(".remove-button").click(removeFromCart); // Calling the function to respond to the remove from cart click.

$(".my-cart-checkout").click(checkout); // Calling the function to respond to the checkout button.
