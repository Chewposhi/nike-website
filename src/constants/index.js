import bigShoe1 from "../assets/images/big-shoe1.png";
import bigShoe2 from "../assets/images/big-shoe2.png";
import bigShoe3 from "../assets/images/big-shoe3.png";
import bigShoe4 from "../assets/images/product12.png";
import bigShoe5 from "../assets/images/product1.png";
import bigShoe6 from "../assets/images/product2.png";
import bigShoe7 from "../assets/images/product3.png";
import bigShoe8 from "../assets/images/product5.png";
import bigShoe9 from "../assets/images/product6.png";
import bigShoe10 from "../assets/images/product8(1).png";
import bigShoe11 from "../assets/images/1.png";
import bigShoe12 from "../assets/images/hero.png";
import { facebook, instagram, shieldTick as shieldTickIcon, support as supportIcon, truckFast as truckFastIcon, twitter } from "../assets/icons";
import { customer1, customer2 } from "../assets/images";
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
    { value: "1K+", label: "Brands" },
    { value: "250+", label: "Shops" },
    { value: "250K+", label: "Customers" }
]
export const shoesCards = [
    { imgUrl: bigShoe5 },
    { imgUrl: bigShoe6 },
    { imgUrl: bigShoe7 },
    { imgUrl: bigShoe8 },
    { imgUrl: bigShoe9 },
    { imgUrl: bigShoe10 },
    { imgUrl: bigShoe11 },
    { imgUrl: bigShoe12 },
]
export const products = [
    {imgUrl: bigShoe6, label: "Adidas Ultra Boost 5.0", rating: "4.7", price: "230.20", index: 0 },
    { imgUrl: bigShoe7, label: "Puma RS-X Reinvention", rating: "4.5", price: "179.80", index: 1 },
    { imgUrl: bigShoe8, label: "Reebok Classic Leather", rating: "1.9", price: "255.60", index: 2 },
    { imgUrl: bigShoe9, label: "New Balance Fresh Foam 1080", rating: "3.2", price: "221.20", index: 3 },
    { imgUrl: bigShoe10, label: "Under Armour HOVR Phantom 2", rating: "4.7", price: "199.20", index: 4 },
    { imgUrl: bigShoe1, label: "ASICS Gel-Nimbus 23", rating: "2.0", price: "299.20", index: 5 },
    { imgUrl: bigShoe2, label: "Brooks Ghost 14", rating: "3.7", price: "187.20", index: 6 },
    { imgUrl: bigShoe3, label: "Saucony Kinvara 12", rating: "5.0", price: "211.20", index: 7 },
    { imgUrl: bigShoe4, label: "Mizuno Wave Rider 25", rating: "3.6", price: "249.20", index: 8 },
    { imgUrl: bigShoe5, label: "Nike Air Jordan-10", rating: "2.8", price: "259.20", index: 9 }
];




export const offers = [
    { iconUrl: truckFastIcon, label: "Free shipping", desc: "Enjoy seamless shopping with our complimentary shipping service." },
    { iconUrl: shieldTickIcon, label: "Secure Payment", desc: "Experience worry-free transactions with our secure payment options." },
    { iconUrl: supportIcon, label: "Love to help you", desc: "Our dedicated team is here to assist you every step of the way." },
]
export const customers = [
    { profileImg: customer1, name: "Morich Brown", rating: '4.5', comment: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!" },
    { profileImg: customer2, name: "Mohammed El idrissi", rating: '4.8', comment: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!" },
]
export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];