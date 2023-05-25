// step:
// - making class
// - making object
// - called it so it appears in browser using loop and innerHTML
// - refactor the code so it implements inheritance AuthorTestimonial
// - refactor the code so it implements polymorphism by making class CompanyTestimonial and override get author(the key point is polymorhp implement and override)
// - refactor the code so it implements abstraction by making get testimonialHTML and get author throw error when the children didn't use it
// - refactor the code so it implements encapsulation, use setter and getter (key point is, encapsulation try to make app more secure by implementing restriction)

// Superclass
class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  // This is an abstract method that subclasses will implement
  get author() {
    throw new Error("getAuthor() method must be implemented");
  }

  // This is a polymorphic method that can take any subclasses of Testimonial
  get testimonialHTML() {
    return `<div class="testimonial">
                    <img
                        src="${this.image}"
                        class="profile-testimonial"
                    />
                    <p class="quote">${this.quote}</p>
                    <p class="author">- ${this.author}</p>
                </div>
            `;
  }
}

// Subclass
class AuthorTestimonials extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

// Subclass
class CompanyTestimonials extends Testimonial {
  #company = "";

  constructor(company, quote, image) {
    super(quote, image);
    this.#company = company;
  }

  get author() {
    return this.#company + " Company";
  }
}

const testimonial1 = new AuthorTestimonials(
  "Mawar",
  "Mantapp!! Lanjutkan Karyamu",
  "https://plus.unsplash.com/premium_photo-1671586882920-8cd59c84cdfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
);
const testimonial2 = new AuthorTestimonials(
  "Boejo",
  "Kerja Bagus Lanjutkan!!",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
);
const testimonial3 = new CompanyTestimonials(
  "Jaka",
  "Desain Oke Poll!!!",
  "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
);

let testimonialData = [testimonial1, testimonial2, testimonial3];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}
document.getElementById("testimonials").innerHTML = testimonialHTML;
