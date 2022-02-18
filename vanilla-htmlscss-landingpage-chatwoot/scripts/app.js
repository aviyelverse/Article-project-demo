const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

(function (d, t) {
  var BASE_URL = "https://app.chatwoot.com";
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.src = BASE_URL + "/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g, s);
  g.onload = function () { 
    window.chatwootSDK.run({
      websiteToken: "jaLCEXip3fFsAHUpwC3cFpHj",
      baseUrl: BASE_URL,
    });
  };
})(document, "script");
