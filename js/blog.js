let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let name = document.getElementById("input-blog-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let desc = document.getElementById("input-blog-desc").value;
  let image = document.getElementById("input-blog-image").files;

  // deklarasi icon

  const javascriptIcon = '<i class="fa-brands fa-js"></i>';
  const pythonIcon = '<i class="fa-brands fa-python"></i>';
  const phpIcon = '<i class="fa-brands fa-php"></i>';
  const javaIcon = '<i class="fa-brands fa-java"></i>';

  // deklarasi pada icon kepada checkbox

  let checkJs = document.getElementById("input-check-box-js").checked
    ? javascriptIcon
    : "";
  let checkPy = document.getElementById("input-check-box-py").checked
    ? pythonIcon
    : "";
  let checkPhp = document.getElementById("input-check-box-php").checked
    ? phpIcon
    : "";
  let checkJava = document.getElementById("input-check-box-java").checked
    ? javaIcon
    : "";

  // memunculkan url gambar
  image = URL.createObjectURL(image[0]);
  console.log(image);

  //menampung data

  let blog = {
    name,
    startDate,
    endDate,
    desc,
    image,
    checkJs,
    checkPy,
    checkPhp,
    checkJava,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
        <div class="blog-list-content">
        <div class="list-image">
          <img src="${dataBlog[index].image}" alt="project-foto" />
        </div>
        <div class="blog-list-content-title">
          <a href="project-detail.html">${dataBlog[index].name} - ${dataBlog[index].startDate} </a>
        </div>
        <div class="blog-list-detail">
        Durasi hingga : ${dataBlog[index].endDate}</div>
        <div class="blog-project-content">
          <p>
          ${dataBlog[index].desc}
          </p>
        </div>
        <div class="mini-icon">
        ${dataBlog[index].checkJs}
        ${dataBlog[index].checkPy}
        ${dataBlog[index].checkPhp}
        ${dataBlog[index].checkJava}
        </div>

        <div class="btn-group">
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Delete</button>
        </div>
      </div>
        `;
  }
}

function formWajib() {
  let name = document.getElementById("input-blog-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let desc = document.getElementById("input-blog-desc").value;
  let image = document.getElementById("input-blog-image").files;

  if (name == "") {
    return alert("Name Project Required!");
  } else if (startDate == "") {
    return alert("Start date Required!");
  } else if (endDate == "") {
    return alert("End date Required!");
  } else if (desc == "") {
    return alert("Description Required!");
  } else if (image == "") {
    return alert("Attach File Required");
  }
}
