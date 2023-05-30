let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let name = document.getElementById("input-blog-title").value;
  let startDate = document.getElementById("input-start-date").value;
  console.log(startDate);
  let endDate = document.getElementById("input-end-date").value;
  let desc = document.getElementById("input-blog-desc").value;
  let image = document.getElementById("input-blog-image").files;

  // mengubah tanggal ke milisecond
  function getDifferentTime() {
    let dateFirst = new Date(startDate).getTime();
    // console.log(dateFirst);
    let dateLast = new Date(endDate).getTime();
    // console.log(dateLast);

    // deklarasi tanggal
    let hoursInDays = 24;
    let daysInWeek = 7;
    let daysInMonth = 30;
    let monthInYears = 12;

    // let distanceDay = Math.floor(
    //   distance / (milisecond * secondInHours * hoursInDays)
    // ); // 1/86400000
    // let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
    // let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
    // let distanceSeconds = Math.floor(distance / milisecond); // 1/1000

    const duration = dateLast - dateFirst; // selisih antara tanggal akhir dan awal dalam milisecond
    console.log(duration);

    // variable penyimpan untuk mengatur satuan taggal
    const daysDiff = Math.floor(duration / (hoursInDays * 60 * 60 * 1000)); //mili to days
    const weeksDiff = Math.floor(
      duration / (daysInWeek * hoursInDays * 60 * 60 * 1000)
    ); // mili to week
    const monthDiff = Math.floor(
      duration / (daysInMonth * hoursInDays * 60 * 60 * 1000)
    ); // mili to month
    const yearsDiff = Math.floor(
      duration / (monthInYears * daysInMonth * hoursInDays * 60 * 60 * 1000)
    ); // mili to years

    // console.log(daysDiff + "hari");
    // console.log(weekDiff + "minggu");
    // console.log(monthDiff + "bulan");
    // console.log(yearsDiff + "tahun");

    // kondisi selisih saat tanggal dipilih
    if (yearsDiff > 0) {
      return `${yearsDiff}` + " Tahun";
    } else if (monthDiff > 0) {
      return `${monthDiff}` + " Bulan";
    } else if (weeksDiff > 0) {
      return `${weeksDiff}` + " Minggu";
    } else {
      return `${daysDiff}` + " Hari";
    }
  }

  let differentTime = getDifferentTime();

  // deklarasi icon

  let javascriptIcon = '<i class="fa-brands fa-js"></i>';
  let pythonIcon = '<i class="fa-brands fa-python"></i>';
  let phpIcon = '<i class="fa-brands fa-php"></i>';
  let javaIcon = '<i class="fa-brands fa-java"></i>';

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
    differentTime,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  // looping
  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
        <div class="blog-list-content">
        <div class="list-image">
          <img src="${dataBlog[index].image}" alt="project-foto" />
        </div>
        <div class="blog-list-content-title">
          <a href="project-detail.html">${dataBlog[index].name} </a>
        </div>
        <div class="blog-list-detail">
        Durasi: ${dataBlog[index].differentTime} </div>
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
//
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
