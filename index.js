var section1 = [
  ["Item 1 Name", "Item 1 Description", 100, "./images/food.jpg"],
  ["Item 2 Name", "Item 2 Description", 200, "./images/food.jpg"],
  ["Item 3 Name", "Item 3 Description", 300, "./images/food.jpg"],
  ["Item 4 Name", "Item 4 Description", 400, "./images/food.jpg"],
];
var section2 = [
  ["Item 1 Name", "Item 1 Description", 100, "./images/food.jpg"],
  ["Item 2 Name", "Item 2 Description", 200, "./images/food.jpg"],
  ["Item 3 Name", "Item 3 Description", 300, "./images/food.jpg"],
  ["Item 4 Name", "Item 4 Description", 400, "./images/food.jpg"],
  ["Item 5 Name", "Item 5 Description", 500, "./images/food.jpg"],
  ["Item 6 Name", "Item 6 Description", 600, "./images/food.jpg"],
  ["Item 7 Name", "Item 7 Description", 700, "./images/food.jpg"],
  ["Item 8 Name", "Item 8 Description", 800, "./images/food.jpg"],
  ["Item 9 Name", "Item 9 Description", 900, "./images/food.jpg"],
  ["Item 10 Name", "Item 10 Description", 1000, "./images/food.jpg"],
  ["Item 11 Name", "Item 11 Description", 1100, "./images/food.jpg"],
  ["Item 12 Name", "Item 12 Description", 1200, "./images/food.jpg"],
];
var section3 = [
  ["Item 1 Name", "Item 1 Description", 100, "./images/food.jpg"],
  ["Item 2 Name", "Item 2 Description", 200, "./images/food.jpg"],
  ["Item 3 Name", "Item 3 Description", 300, "./images/food.jpg"],
  ["Item 4 Name", "Item 4 Description", 400, "./images/food.jpg"],
  ["Item 5 Name", "Item 5 Description", 500, "./images/food.jpg"],
  ["Item 6 Name", "Item 6 Description", 600, "./images/food.jpg"],
  ["Item 7 Name", "Item 7 Description", 700, "./images/food.jpg"],
  ["Item 8 Name", "Item 8 Description", 800, "./images/food.jpg"],
  ["Item 9 Name", "Item 9 Description", 900, "./images/food.jpg"],
  ["Item 10 Name", "Item 10 Description", 1000, "./images/food.jpg"],
  ["Item 11 Name", "Item 11 Description", 1100, "./images/food.jpg"],
  ["Item 12 Name", "Item 12 Description", 1200, "./images/food.jpg"],
  ["Item 13 Name", "Item 13 Description", 1300, "./images/food.jpg"],
  ["Item 14 Name", "Item 14 Description", 1400, "./images/food.jpg"],
  ["Item 15 Name", "Item 15 Description", 1500, "./images/food.jpg"],
  ["Item 16 Name", "Item 16 Description", 1200, "./images/food.jpg"],
];
var section4 = [
  ["Item 1 Name", "Item 1 Description", 100, "./images/food.jpg"],
  ["Item 2 Name", "Item 2 Description", 200, "./images/food.jpg"],
  ["Item 3 Name", "Item 3 Description", 300, "./images/food.jpg"],
  ["Item 4 Name", "Item 4 Description", 400, "./images/food.jpg"],
];
var section5 = [
  ["Item 1 Name", "Item 1 Description", 100, "./images/food.jpg"],
  ["Item 2 Name", "Item 2 Description", 200, "./images/food.jpg"],
];
var section6 = [
  ["Item 1 Name", "Item 1 Description", 100, "./images/food.jpg"],
  ["Item 2 Name", "Item 2 Description", 200, "./images/food.jpg"],
  ["Item 3 Name", "Item 3 Description", 300, "./images/food.jpg"],
];
var section7 = [
  ["Item 1 Name", "Item 1 Description", 100, "./images/food.jpg"],
  ["Item 2 Name", "Item 2 Description", 200, "./images/food.jpg"],
  ["Item 3 Name", "Item 3 Description", 300, "./images/food.jpg"],
  ["Item 4 Name", "Item 4 Description", 400, "./images/food.jpg"],
];

var sections = [
  [section1, "Section 1 Name"],
  [section2, "Section 2 Name"],
  [section3, "Section 3 Name"],
  [section4, "Section 4 Name"],
  [section5, "Section 5 Name"],
  [section6, "Section 6 Name"],
  [section7, "Section 7 Name"],
];

var itemID = 1;

for (var i = 0; i < sections.length; i++) {
  $(".placeholder").before(
    '<div class="my-3 p-3 bg-white rounded shadow-sm section' +
      i +
      '"><h6 class="border-bottom border-gray pb-2 mb-0">' +
      sections[i][1] +
      "</h6></div>"
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
        '</p></div><div class="col-md-6"><button class="btn btn-sm btn-success my-cart-btn float-right" data-id="' +
        itemID +
        '" data-name="' +
        sections[i][0][j][0] +
        '" data-summary="summary ' +
        itemID +
        '" data-price="' +
        sections[i][0][j][2] +
        '" data-quantity="1" data-image="' +
        sections[i][0][j][3] +
        '">Add to cart</button><span class="price float-right">Rs. ' +
        sections[i][0][j][2] +
        "/-</span></div></div></div>"
    );
    itemID = itemID + 1;
  }
}

$(function () {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });
});

$(function () {
  var goToCartIcon = function ($addTocartBtn) {
    // var $cartIcon = $(".my-cart-icon");
    // var $image = $(
    //   '<img width="30px" height="30px" src="' +
    //     $addTocartBtn.data("image") +
    //     '"/>'
    // ).css({ position: "fixed", "z-index": "999" });
    // $addTocartBtn.prepend($image);
    // var position = $cartIcon.position();
    // $image.animate(
    //   {
    //     top: position.top,
    //     left: position.left,
    //   },
    //   500,
    //   "linear",
    //   function () {
    //     $image.remove();
    //   }
    // );
  };

  $(".my-cart-btn").myCart({
    currencySymbol: "Rs.",
    classCartIcon: "my-cart-icon",
    classCartBadge: "my-cart-badge",
    classProductQuantity: "my-product-quantity",
    classProductRemove: "my-product-remove",
    classCheckoutCart: "my-cart-checkout",
    affixCartIcon: true,
    showCheckoutModal: true,
    numberOfDecimals: 0,
    cartItems: [],
    clickOnAddToCart: function ($addTocart) {
      goToCartIcon($addTocart);
    },
    afterAddOnCart: function (products, totalPrice, totalQuantity) {
      console.log("afterAddOnCart", products, totalPrice, totalQuantity);
    },
    clickOnCartIcon: function ($cartIcon, products, totalPrice, totalQuantity) {
      console.log(
        "cart icon clicked",
        $cartIcon,
        products,
        totalPrice,
        totalQuantity
      );
    },
    checkoutCart: function (products, totalPrice, totalQuantity) {
      var checkoutString =
        "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
      checkoutString +=
        "\n\n id \t name \t summary \t price \t quantity \t image path";
      $.each(products, function () {
        checkoutString +=
          "\n " +
          this.id +
          " \t " +
          this.name +
          " \t " +
          this.summary +
          " \t " +
          this.price +
          " \t " +
          this.quantity +
          " \t " +
          this.image;
      });
      alert(checkoutString);
      console.log("checking out", products, totalPrice, totalQuantity);
    },
    getDiscountPrice: function (products, totalPrice, totalQuantity) {
      var discount = 0;
      console.log("calculating discount", products, totalPrice, totalQuantity);
      return totalPrice - totalPrice * discount;
    },
  });

  $("#addNewProduct").click(function (event) {
    var currentElementNo = $(".row").children().length + 1;
    $(".row").append(
      '<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' +
        currentElementNo +
        " - <strong>$" +
        currentElementNo +
        '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' +
        currentElementNo +
        '" data-name="product ' +
        currentElementNo +
        '" data-summary="summary ' +
        currentElementNo +
        '" data-price="' +
        currentElementNo +
        '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>'
    );
  });
});