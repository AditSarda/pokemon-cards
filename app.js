var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");



var addButtons = document.getElementsByClassName("button")



console.log(addButtons[0]);

var items = [{
        name: "This was our pact",
        quantity: 0,
        rupees: 7,
    },


    {
        name: "The famous five",
        quantity: 0,
        rupees: 4,
    },
    {
        name: "Matlida",
        quantity: 0,
        rupees: 6,
    },
    {
        name: "Harry Potter",
        quantity: 0,
        rupees: 10
    },
    {
        name: "For Young Readers",
        quantity: 0,
        dollars: 7,
    },
    {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        dollars: 4,
    },

    {
        name: "Dart Board",
        quantity: 0,
        dollars: 17,
    },

    {
        name: "Connect 4",
        quantity: 0,
        dollars: 19,
    },

    {
        name: "Jenga",
        quantity: 0,
        dollars: 20,
    },

    {
        name: "Monopoly",
        quantity: 0,
        dollars: 19,
    },

    {
        name: "Bookmarks",
        quantity: 0,
        dollars: 12,
    },

    {
        name: "Birthday card",
        quantity: 0,
        dollars: 19,
    },

    {
        name: "Stuffed toys",
        quantity: 0,
        dollars: 15,
    },

    {
        name: "Dream catcher drawing",
        quantity: 0,
        dollars: 18,
    },
]

function updateCart() {
    let cart = 0;
    for (index = 0; index < items.length; index++) {
        cart = cart + items[index].quantity;
    }
    cartValue.innerHTML = cart;
}


for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].onclick = (e) => {
        items[i].quantity++;
        updateCart();
    };
}

var finalRupees = 0;


function updatePrice() {
    let totalPriceInRupees = 0;

    for (index = 0; index < items.length; index++) {
        totalPriceInRupees = totalPriceInRupees + items[index].quantity * (items[index].rupees * 100);
    }
    finalRupees = Math.floor(totalPriceInRupees);

}

var whatsappLink = "https://api.whatsapp.com/send?phone=919950273384&text=Order%20details";


function updateWhatsappLink() {
    for (let index = 0; index < items.length; index++) {
        if (items[index].quantity != 0) {
            whatsappLink += "%0A" + items[index].name + "%20" + items[index].quantity;
        }
    }
    whatsappLink += "%0A" + "Total%20Price:%20$" + "Rs" + finalRupees;

}


cartButton.onclick = () => {
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink, "_blank");
}