document.addEventListener("alpine:init", () => {
    Alpine.data("products", () => ({
        items: [
            {
                id: 1,
                name: "Lemari 2 pintu",
                img: "lemari.jpg",
                price: 3500000
            },
            { id: 2, name: "Kursi Jok", img: "kursie.jpg", price: 750000 },
            { id: 3, name: "nakas 2 pintu", img: "nakas.jpg", price: 700000 },
            {
                id: 4,
                name: "1 set meja makan",
                img: "meja makan.jpg",
                price: 3500000
            },
            { id: 5, name: "bangku rotan", img: "bangku.jpg", price: 500000 },
            { id: 6, name: "kursi cafe", img: "kursi cafe.jpg", price: 450000 },
            { id: 7, name: "sofa tamu", img: "faso.jpg", price: 4500000 },
            {
                id: 8,
                name: "kursi anyaman rotan",
                img: "kursirotan.jpg",
                price: 650000
            }
        ]
    }));

    Alpine.store("cart", {
        items: [],
        total: 0,
        quantity: 0,

        addItem(newItem) {
            const cartItem = this.items.find(item => item.id === newItem.id);

            if (!cartItem) {
                this.items.push({
                    ...newItem,
                    quantity: 1,
                    total: newItem.price
                });
                this.quantity++;
                this.total += newItem.price;
            } else {
                const updatedItems = this.items.map(item => {
                    if (item.id === newItem.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                            total: item.total + item.price
                        };
                    }
                    return item;
                });

                this.items = updatedItems;
                this.quantity++;
                this.total += newItem.price;
            }
        },

        remove(id) {
            // ambil item yang mau diremove berdasarkan id nya
            const cartItem = this.items.find(item => item.id === id);

            // jika item lebih dari 1
            if (cartItem.quantity > 1) {
                // telusuri 1 1
                this.items = this.items.map(item => {
                    // kondisi untuk item yang dihapus
                    if (item.id === id) {
                        item.quantity -= 1;
                        item.total -= item.price; // Update the item's total
                        return item;
                    } else {
                        return item;
                    }
                });
                this.quantity--;
                this.total -= cartItem.price; // Subtract only the price of one item
            } else if (cartItem.quantity === 1) {
                // jika barangnya sisa 1
                this.items = this.items.filter(item => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price; // Subtract the full price
            }
        }
    });
});
// Ambil semua elemen yang dibutuhkan
const form = document.getElementById("checkoutForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const checkoutButton = document.getElementById("checkout-button");

// Fungsi untuk mengecek apakah semua input terisi
function validateForm() {
    // Ambil nilai dari setiap input
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    // Cek apakah ada input yang kosong
    if (nameValue === "" || emailValue === "" || phoneValue === "") {
        // Jika ada yang kosong, button disabled
        checkoutButton.setAttribute("disabled", "disabled");
        checkoutButton.classList.add("disabled");
    } else {
        // Jika semua terisi, hilangkan disabled
        checkoutButton.removeAttribute("disabled");
        checkoutButton.classList.remove("disabled");
    }
}

// Tambahkan event listener untuk setiap input
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
phoneInput.addEventListener("input", validateForm);

// Jalankan validasi saat pertama kali halaman dimuat
validateForm();

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!checkoutButton.hasAttribute("disabled")) {
        console.log("Form submitted!");
        // Di sini bisa ditambahkan kode untuk proses checkout
    }
});

checkoutButton.addEventListener("click", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    const message = formatMessage(objData);
    window.open('http://wa.me/6285173200562?text=' + encodeURIComponent(message));
});

const formatMessage = (obj) => {
  return `Data Customer
  Nama: ${obj.name}
  Email: ${obj.email}
  No HP: ${obj.phone}
Data pesanan
${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} × ${rupiah(item.price)} = ${rupiah(item.price * item.quantity)})`).join('\n')}
Total: ${rupiah(obj.total)}
Terima kasih
  `;
};


const rupiah = number => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number);
};
