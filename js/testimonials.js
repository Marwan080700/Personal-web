// step:
// - making class
// - making object
// - called it so it appears in browser using loop and innerHTML
// - refactor the code so it implements inheritance AuthorTestimonial
// - refactor the code so it implements polymorphism by making class CompanyTestimonial and override get author(the key point is polymorhp implement and override)
// - refactor the code so it implements abstraction by making get testimonialHTML and get author throw error when the children didn't use it
// - refactor the code so it implements encapsulation, use setter and getter (key point is, encapsulation try to make app more secure by implementing restriction)

// Superclass
// class Testimonial {
//   #quote = "";
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }

//   get image() {
//     return this.#image;
//   }

//   // This is an abstract method that subclasses will implement
//   get author() {
//     throw new Error("getAuthor() method must be implemented");
//   }

//   // This is a polymorphic method that can take any subclasses of Testimonial
//   get testimonialHTML() {
//     return `<div class="testimonial">
//                     <img
//                         src="${this.image}"
//                         class="profile-testimonial"
//                     />
//                     <p class="quote">${this.quote}</p>
//                     <p class="author">- ${this.author}</p>
//                 </div>
//             `;
//   }
// }

// // Subclass
// class AuthorTestimonials extends Testimonial {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// // Subclass
// class CompanyTestimonials extends Testimonial {
//   #company = "";

//   constructor(company, quote, image) {
//     super(quote, image);
//     this.#company = company;
//   }

//   get author() {
//     return this.#company + " Company";
//   }
// }

// const testimonial1 = new AuthorTestimonials(
//   "Mawar",
//   "Mantapp!! Lanjutkan Karyamu",
//   "https://plus.unsplash.com/premium_photo-1671586882920-8cd59c84cdfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
// );
// const testimonial2 = new AuthorTestimonials(
//   "Boejo",
//   "Kerja Bagus Lanjutkan!!",
//   "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
// );
// const testimonial3 = new CompanyTestimonials(
//   "Jaka",
//   "Desain Oke Poll!!!",
//   "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
// );

// let testimonialData = [testimonial1, testimonial2, testimonial3];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }
// document.getElementById("testimonials").innerHTML = testimonialHTML;

let testimonialsData = [
  {
    author: "Freya Jayawardana",
    qoute: "Diperbaiki Lagi Layoutnya",
    image:
      "https://i.pinimg.com/originals/95/db/6b/95db6bc1116273d90a6e66ec232971e3.jpg",
    rating: 1,
  },
  {
    author: "Azizi Shafaa Asadel",
    qoute: "Terlalu monoton",
    image: "https://assets.ladiestory.id/gallery/1664269879-zee-jkt-48.jpg",
    rating: 2,
  },
  {
    author: "Shania Gracia",
    qoute: "Tingkatkan Lagi Desainnya",
    image:
      "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/gracia-jkt48.jpg",
    rating: 3,
  },
  {
    author: "Ujang Sarosa",
    qoute: "Desain Yang Mantap!! ",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    author: "Thomas Djarja",
    qoute: "Bagus Sekali!!!",
    image:
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 5,
  },
  {
    author: "Mang Roy",
    qoute: "Suka namun Duka",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 3,
  },
];

// function tuk mengambil semua data objek

function alltestimonials() {
  let testimonialHtml = "";

  testimonialsData.forEach(function (item) {
    testimonialHtml += `<div class="testimonial">
    <img
        src="${item.image}"
        class="profile-testimonial"
    />
    <p class="quote">${item.qoute}</p>
    <p class="author">- ${item.author}</p>
    <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
</div>`;
  });
  document.getElementById("testimonials").innerHTML = testimonialHtml;
}

alltestimonials();

// function tuk memfilter data berdasarlan rating

function filtertestimonials(rating) {
  let testimonialHtml = "";

  const testimonialsfiltered = testimonialsData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialsfiltered.length === 0) {
    testimonialHtml += `<h1> Data is not found!!</h1>`;
  } else {
    testimonialsfiltered.forEach(function (item) {
      testimonialHtml += `<div class="testimonial">
      <img
          src="${item.image}"
          class="profile-testimonial"
      />
      <p class="quote">${item.qoute}</p>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
  </div>`;
    });
  }
  document.getElementById("testimonials").innerHTML = testimonialHtml;
}
