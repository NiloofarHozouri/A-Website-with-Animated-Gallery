var btn = document.getElementsByClassName("btn");
    var banner = document.getElementById("banner");
    btn[0].onclick = function () {
      banner.src = "img/beautiful-woman-smiling-beauty-and-smile-quotes.jpg";
      animation();
      this.classList.add("active");
    };
    btn[1].onclick = function () {
      banner.src = "img/person2.jpg";
      animation();
      this.classList.add("active");
    };
    btn[2].onclick = function () {
      banner.src = " img/diamond-vector-218417.jpg";
      animation();
      this.classList.add("active");
    };
    function animation() {
        banner.classList.add("zoom");
      setTimeout(function () {
        banner.classList.remove("zoom");
      },500);
      for (b of btn) {
       b.classList.remove("active");
    }
    }
    