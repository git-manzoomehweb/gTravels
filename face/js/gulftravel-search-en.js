function empty_value(t) {
    $(t).closest(".city").find(".country").val(""),
      $(t).closest(".city").find(".searchList").fadeIn(),
      $(t).closest(".city").find(".country").focus(),
      $(t).closest(".city").find(".ul-list").show(),
      $(t).closest(".city").siblings(".city").find(".searchList").fadeOut();
  }
  
  function city_search(t) {
    0 === t.which || t.ctrlKey || t.metaKey || t.altKey || (4 == $(t).attr("data-type") ? ($(t).val(""), $(t).closest(".city").find(".co-id").val(""), $(t).closest(".city").find(".mini-loading").show(), 1 != $(t).attr("data-active") ? ($(t).closest(".city").find(".mini-loading").show(), $.ajax({
       url: "/Client_City_Search.bc",
       type: "get",
       data: {
          type: $(t).attr("data-type"),
          lid: "2"
       },
       success: function (e) {
          $(t).attr("data-active", "1"), $(t).closest(".city").find(".mini-loading").hide(), $(t).closest(".city").find(".countryFlight").empty().html(e), $(t).closest(".city").find(".countryFlight").slideDown()
       }
    })) : $(t).closest(".city").find(".countryFlight").slideDown()) : (upper_case = $(t).val().substr(0, 1).toUpperCase() + $(t).val().substr(1).toLowerCase(), $(t).val(upper_case), "3" == $(t).attr("data-type") ? "رم" == $(t).val() || "قم" == $(t).val() ? $(t).val().length > 1 ? ($(t).closest(".city").find(".mini-loading").show(), $(t).closest(".city").find(".ul-list").hide(), $.ajax({
       url: "/Client_City_Search.bc",
       type: "get",
       data: {
          term: $(t).val(),
          type: $(t).attr("data-type"),
          lid: 2,
          select_value: 0
       },
       success: function (e) {
          $(t).closest(".city").find(".mini-loading").hide(), $(t).closest(".city").find(".countryFlight").empty().html(e)
       }
    })) : ($(t).closest(".city").find(".countryFlight").empty(), $(t).closest(".city").find(".ul-list").show()) : $(t).val().length > 2 ? ($(t).closest(".city").find(".mini-loading").show(), $(t).closest(".city").find(".ul-list").hide(), $.ajax({
       url: "/Client_City_Search.bc",
       type: "get",
       data: {
          term: $(t).val(),
          type: $(t).attr("data-type"),
          lid: 2,
          select_value: 0
       },
       success: function (e) {
          $(t).closest(".city").find(".mini-loading").hide(), $(t).closest(".city").find(".countryFlight").empty().html(e)
       }
    })) : ($(t).closest(".city").find(".countryFlight").empty(), $(t).closest(".city").find(".ul-list").show()) : "3" !== $(t).attr("data-type") && ($(t).val().length > 2 ? ($(t).closest(".city").find(".mini-loading").show(), $(t).closest(".city").find(".ul-list").hide(), $.ajax({
       url: "/Client_City_Search.bc",
       type: "get",
       data: {
          term: $(t).val(),
          type: $(t).attr("data-type"),
          lid: 2,
          select_value: 0
       },
       success: function (e) {
          $(t).closest(".city").find(".mini-loading").hide(), $(t).closest(".city").find(".countryFlight").empty().html(e)
       }
    })) : ($(t).closest(".city").find(".countryFlight").empty(), $(t).closest(".city").find(".ul-list").show()))))
 }
  
  $(window).width() <= 750 &&
    ($("#flightSearch").attr("action") === "/Tem3_Roundtrip_Search.bc" &&
      $("#flightSearch").attr("action", "/M_Roundtrip_Search.bc"),
    $("#flightSearch").attr("action") === "/Tem3_Oneway_Search.bc" &&
      $("#flightSearch").attr("action", "/M_Oneway_Search.bc"),
    $("#hotelsearch").attr("action", "/M_Hotel_Search.bc"),
    $("#flightHotelSearch").attr("action", "/M_FlightHotel_Search.bc"),
    $("#tourSearch").attr("action", "/M_Tour_Search.bc")),
  
    $(".formflight").each(function () {
      $(this).submit(function (event) {
        var ageString = "";
        $(this)
          .find(".createChildDropdown")
          .each(function () {
            ageString += $(this).find("select").val() + ",";
          });
        if (ageString !== "") {
          $(this).find(".select-age-value").val(ageString);
          var updatedAgeString = $(this)
            .find(".select-age-value")
            .val()
            .replace(/,(?=[^,]*$)/, "");
          $(this).find(".select-age-value").val(updatedAgeString);
        }
  
        var adults = $(this).find(".adultcount").val(),
          children = $(".childcount").val(),
          totalPassengers = parseInt(adults) + parseInt(children),
          infants = 0;
  
        $(".select-age").each(function () {
          if (parseInt($(this).val()) <= 2) {
            infants += 1;
          }
        });
  
        if (infants > adults) {
          event.preventDefault();
          $(".alert-text").html("Choose only one child per adult!");
        }
        if (totalPassengers > 10) {
          event.preventDefault();
          $(".alert-text").html(
            "The total number of adults and children must be less than 10!"
          );
        }
        if (adults < 1) {
          event.preventDefault();
          $(".alert-text").html("Choose at least one adult!");
        }
      });
    });
  
  $("#return").click(function () {
    $(this).addClass("active-r-btn");
    $("#direct").removeClass("active-r-btn");
    $("#multi").removeClass("active-r-btn"), 
    $("#multi-flight").addClass("hidden"),
    // $(".disabled-label").removeClass("hidden"), 
    $("#flight-way-type").removeClass("disabled-to-date"),
    $("#flightSearch #inp2-flight").prop("disabled", false);
    $("#flightSearch").find(".end_date").addClass("nextCalOpening");
    $(window).width() <= 750 &&
      $("#flightSearch").attr("action", "/M_Roundtrip_Search.bc");
    $("#flightSearch").show();
  });
  
  $("#direct").click(function () {
    $(this).addClass("active-r-btn"),
      $("#return").removeClass("active-r-btn"),
      $("#multi").removeClass("active-r-btn"), 
      $("#multi-flight").addClass("hidden"),
      // $(".disabled-label").addClass("hidden"), 
      $("#flight-way-type").addClass("disabled-to-date"),
      $("#flightSearch #inp2-flight").prop("disabled", !0),
      $("#flightSearch").find(".end_date").removeClass("nextCalOpening"),
      $(window).width() <= 750 &&
        $("#flightSearch").attr("action", "/M_Oneway_Search.bc"),
      $("#flightSearch").show();
  });
  $(".flight-btn").click(function () {
    $(".date_info_selected").find(".type_date").text("Departure date:"),
      $(".date_info_selected").find(".day_of_date").text("---"),
      $(".date_info_selected").find(".month_of_date").text(" "),
      $(this).removeClass("inactive"),
      $(".hotel-btn").addClass("inactive"),
      $(".flighthotel-btn").addClass("inactive"),
      $(".tour-btn").addClass("inactive"),
      $(".r-flight").show(),
      $(".r-hotel").hide(),
      $(".r-flighthotel").hide(),
      $(".r-tour").hide()
      if($(window).width() <= 1024){
        $(".search-bg").css(
          "background-image",
          'url("../images/searchbox-bg-mobile.jpg")'
        );
      }else {
        $(".search-bg").css(
          "background-image",
          'url("../images/searchbox-bg.jpg")'
        );
      }
  });
  $(".hotel-btn").click(function () {
    console.log("ok1")
    if($(window).width() <= 1024){
      console.log("ok2")
      $(".search-bg").css(
        "background-image",
        'url("../images/hotel-searchbox-bg-mobile.jpg")'
      );
    }else {
      console.log("ok3")
      $(".search-bg").css(
        "background-image",
        'url("../images/hotel-searchbox-bg.jpg")'
      );
    }
    return (
      $(".date_info_selected").find(".type_date").text("Departure date:"),
      $(".date_info_selected").find(".day_of_date").text("---"),
      $(".date_info_selected").find(".month_of_date").text(" "),
      $(this).removeClass("inactive"),
      $(".flight-btn").addClass("inactive"),
      $(".flighthotel-btn").addClass("inactive"),
      $(".tour-btn").addClass("inactive"),
      $(".r-hotel").show(),
      $(".r-flight").hide(),
      $(".r-tour").hide(),
      $(".r-flighthotel").hide()
    );
  });
  
  $(".flighthotel-btn").click(function () {
    if($(window).width() <= 1024){
      $(".search-bg").css(
        "background-image",
        'url("../images/fh-searchbox-bg-mobile.jpg")'
      );
    }else {
      $(".search-bg").css(
        "background-image",
        'url("../images/fh-searchbox-bg.jpg")'
      );
    }
    return (
      $(".date_info_selected").find(".type_date").text("Departure date:"),
      $(".date_info_selected").find(".day_of_date").text("---"),
      $(".date_info_selected").find(".month_of_date").text(" "),
      $(this).removeClass("inactive"),
      $(".flight-btn").addClass("inactive"),
      $(".hotel-btn").addClass("inactive"),
      $(".tour-btn").addClass("inactive"),
      $(".r-flighthotel").show(),
      $(".r-hotel").hide(),
      $(".r-flight").hide(),
      $(".r-tour").hide()
    );
  });
  $(".tour-btn").click(function () {
    if($(window).width() <= 1024){
      $(".search-bg").css(
        "background-image",
        'url("../images/tour-searchbox-bg-mobile.jpg")'
      );
    }else {
      $(".search-bg").css(
        "background-image",
        'url("../images/tour-searchbox-bg.jpg")'
      );
    }
    $(".date_info_selected").find(".type_date").text("Departure date:"),
      $(".date_info_selected").find(".day_of_date").text("---"),
      $(".date_info_selected").find(".month_of_date").text(" "),
      $(this).removeClass("inactive"),
      $(".flight-btn").addClass("inactive"),
      $(".hotel-btn").addClass("inactive"),
      $(".flighthotel-btn").addClass("inactive"),
      $(".insurance-btn").addClass("inactive"),
      $(".cip-btn").addClass("inactive"),
      $(".r-tour").show(),
      $(".r-flight").hide(),
      $(".r-hotel").hide(),
      $(".r-insurance").hide(),
      $(".r-cip").hide(),
      $(".r-flighthotel").hide()
  });
  $(document).ready(function () {
    $(document).on("click", function (event) {
      if (!$(event.target).closest(".flightclass-box, .close-hotel-psg").length) {
        $(".show-flightclass").addClass("hidden");
      }
    });
    $("#FlightClass1, .FlightClass ul").on("click", function (event) {
      event.stopPropagation();
    });
  });
  
  $(document).ready(function () {
    $(".FlightClass li").each(function () {
      $(this).click(function () {
        var data_value = $(this).attr("data-value");
        var data_text = $(this).text();
        $(this)
          .closest(".flightclass-box")
          .find(".FlightClass-value")
          .val(data_value);
        $(this)
          .closest(".flightclass-box")
          .find(".FlightClass-text")
          .text(data_text);
      });
    });
  });
  $(document).ready(function () {
    $(".close-hotel-psg").click(function () {
      $(".HotelPassengers").addClass("hidden");
      let $passBox = $(this).closest(".pass-box");
      let $nextDiv = $passBox.next(".flightclass-box");
  
      if ($nextDiv.length) {
        $passBox
          .next(".flightclass-box")
          .find(".show-flightclass")
          .removeClass("hidden");
      }
    }),
      $(".selected").click(function () {
        $(this).attr("id"),
          $(this).hasClass("inactive") &&
            ($(".selected").addClass("inactive"),
            $(this).removeClass("inactive"));
      });
  });
  
  $(".country").each(function () {
    $(this).on("blur", function () {
      if ($(this).closest(".city").find(".countryFlight").text().length > 0) {
        if (0 == hoverelse) {
          var t = $(this)
              .closest(".city")
              .find(".countryFlight")
              .children(".selectCountry:first")
              .find(".txtcountry")
              .text(),
            e =
              (t.split(" "),
              $(this)
                .closest(".city")
                .find(".countryFlight")
                .children(".selectCountry:first")
                .find(".countryid")
                .val());
          $(this).closest(".city").find(".country").val(t);
          var i = t.split("(");
          $(this).closest(".city").find(".split-text").text(i[0]),
            $(this).closest(".city").find(".text-value").val(t),
            $(this).closest(".city").find(".co-id").val(e),
            $(this).closest(".city").find(".countryFlight").empty();
        }
      } else $(this).closest(".city").find(".mini-loading").css("display", "none");
    });
  });
  
  $("#tourSearch .country").on("keyup", function () {
    var t = $(this).val().toLowerCase();
    $(".selectCountry").hide(),
      $(".selectCountry")
        .filter(function () {
          return $(this).text().toLowerCase().includes(t);
        })
        .show();
  });
  
  function change_room_count(t) {
    (e = parseInt($(t).closest("ul").next().val())),
      (n = "+" == $(t).text() ? e + 1 : e > 0 ? e - 1 : 0),
      (o = "");
    if (!(n >= 5 || n < 1)) {
      if (($(t).closest("ul").next().val(n), e < n)) {
        var s = n;
        for ($(t).closest("form").find(".countRoom").empty(), i = 1; i <= s; i++)
          $(t)
            .closest("form")
            .find(".countRoom")
            .append(
              '<div class="contentRooms contentRoom"><div class="numberOfRooms RoomRow font-danaregular text-sm text-primary float-left clear-both w-full mb-4 text-left">room' +
                i +
                '</div><div class="itemlable2 w-full mb-4 float-left relative font-danaregular"><label class="float-left text-sm leading-[48px]" for="textbox-adultcount' +
                i +
                '"> <span class="notshow">adult</span> </label><ul class="button-click float-right bg-[#F8F8F8] w-[88px] h-12 leading-12 rounded-[7px]"><li class="float-right w-[29.3px] h-12 leading-12 text-center hover:text-primary"><div class="button secondary h-full leading-[48px]" onclick="increaseAdult(this)"><span class="hide">+</span></div></li><li class="float-left w-[29.3px] h-12 leading-12 text-center hover:text-primary"><div class="button secondary h-full leading-[48px]"  onclick="decreaseAdult(this)"><span class="hide">-</span></div></li></ul><input type="text" class="cat_textbox font-danaregular adultcount adult-count bg-[#F8F8F8] w-[29.3px] h-12 leading-12 absolute right-[29px] text-center" id="textbox-adultcount' +
                i +
                '" name="_roo$(t).rooms__' +
                i +
                '.adultcount" maxlength="4000" value="2"> <div class="clr"></div></div><div class="itemlable2 w-full mb-4 float-left relative font-danaregular"> <label class="float-left text-sm leading-[48px]" for="textbox-childcount' +
                i +
                '"> <span class="notshow">child</span> </label><ul class="button-click-childRoom float-right bg-[#F8F8F8] w-[88px] h-12 leading-12 rounded-[7px]"><li class="float-right w-[29.3px] h-12 leading-12 text-center hover:text-primary"><div class="button secondary h-full leading-[48px]" onclick="increaseChild(this)"><span class="hide">+</span></div></li><li class="float-left w-[29.3px] h-12 leading-12 text-center hover:text-primary"><div class="button secondary h-full leading-[48px]" onclick="decreaseChild(this)"><span class="hide">-</span></div></li><div class="clr"></div></ul><input type="text" class="cat_textbox font-danaregular chcount child-count bg-[#F8F8F8] w-[29.3px] h-12 leading-12 absolute right-[29px] text-center" id="textbox-childcount' +
                i +
                '" maxlength="4000" value="0"></div><div class="clr"></div><div class="childDropdowns section-select-age clear-both"></div><input type="hidden" name="_roo$(t).rooms__' +
                i +
                '.childcountandage" class="childcountandage" /></div></div>'
            );
      } else
        e > n && destroyRoomDropdown($(t).closest("form").find(".countRoom"), n);
      (o = o.substring(0, o.length - 2)),
        $(t).closest("form").find(".passenger-counts").show(),
        $(t).closest("form").find(".count-room .count").text(n),
        $(t).closest("form").find(".count-adultRoom .count").text(""),
        $(t).closest("form").find(".count-childRoom .count").text(""),
        $(t).closest("form").find(".hotel-inputH").attr("placeholder", "");
    }
  }
  
  var destroyRoomDropdown = function (t, e) {
    e < 1 || t.find("div.contentRooms").get(e).remove();
  };
  
  function increaseAdult(t) {
    var e = $(t),
      i = parseInt(e.closest("ul").next().val()),
      n = "+" == e.text() ? i + 1 : i > 0 ? i - 1 : 0;
    e.closest("form").find(".hotel-inputH").attr("placeholder", ""),
      n >= 10 || (e.closest("ul").next().val(n), SumAdult(t));
  }
  
  function decreaseAdult(t) {
    var e = $(t),
      i = parseInt(e.closest("ul").next().val()),
      n = "+" == e.text() ? i + 1 : i > 0 ? i - 1 : 0;
    n < 1 || (e.closest("ul").next().val(n), SumAdult(t));
  }
  
  function SumAdult(t) {
    var e,
      i = 0;
    $(t)
      .closest("form")
      .find(".countRoomHT")
      .find(".contentRooms")
      .each(function () {
        var t = parseInt($(this).find(".adultcount").val());
        i += t;
      }),
      (e = parseInt(i)),
      $(t).closest("form").find(".passenger-counts").show(),
      $(t).closest("form").find(".count-adultRoom .count").text(e);
  }
  
  function increaseChild(t) {
    var e = $(t),
      n = parseInt(e.closest("ul").next().val()),
      o = "+" == e.text() ? n + 1 : n > 0 ? n - 1 : 0,
      s = "";
    if (!(o >= 5)) {
      if ((e.closest("ul").next().val(o), n < o)) {
        var a = o;
        for (
          e.closest(".contentRooms").find(".childDropdowns").empty(), i = 1;
          i <= a;
          i++
        )
          e.closest(".contentRooms")
            .find(".childDropdowns")
            .append(
              '<div class="age-selection dir-rtl createChildDropdown font-danaregular clear-both w-full mb-4 float-right"><div class="label float-left text-sm leading-[48px]">child age' +
                i +
                '</div><select class="select-age float-left bg-[#F8F8F8] w-[88px] h-12 leading-12 rounded-[7px] px-2"><option value="1">to 1 year</option><option value="2">1 to 2</option><option value="3">2 to 3</option><option value="4">3 to 4</option><option value="5">4 to 5</option><option value="6">5 to 6</option><option value="7">6 to 7</option><option value="8">7 to 8</option><option value="9">8 to 9</option><option value="10">9 to 10</option><option value="11">10 to 11</option><option value="12">11 to 12</option></select><div class="clr"></div></div>'
            );
      }
      (s = s.substring(0, s.length - 2)), SumChild(t);
    }
  }
  
  function decreaseChild(t) {
    var e = $(t),
      i = parseInt(e.closest("ul").next().val()),
      n = "+" == e.text() ? i + 1 : i > 0 ? i - 1 : 0,
      o = "";
    e.closest("ul").next().val(n),
      i > n &&
        destroyChildDropdownRoom(
          e.closest(".contentRooms").find(".childDropdowns"),
          n
        ),
      (o = o.substring(0, o.length - 2)),
      SumChild(t);
  }
  
  function SumChild(t) {
    var e,
      i = 0;
    $(t)
      .closest("form")
      .find(".countRoomHT")
      .find(".contentRooms")
      .each(function () {
        var t = parseInt($(this).find(".chcount").val());
        i += t;
      }),
      (e = parseInt(i)),
      $(t).closest("form").find(".count-childRoom .count").text(e),
      $(t).closest("form").find(".passenger-counts").show(),
      $(t).closest("form").find(".hotel-inputH").attr("placeholder", "");
  }
  function change_pass_count(t) {
    (e = parseInt($(t).closest("ul").next().val())),
      (n = "+" == $(t).text() ? e + 1 : e > 0 ? e - 1 : 0),
      (o = "");
    if (
      ($(t).closest("form").find(".hotel-inputH").attr("placeholder", ""),
      $(t).closest(".inner-city").find(".passenger-counts").show(),
      !(n >= 5))
    ) {
      if (($(t).closest("ul").next().val(n), e < n)) {
        var s = n;
        for (
          $(t).closest("form").find(".childDropdowns").empty(), i = 1;
          i <= s;
          i++
        )
          $(t)
            .closest("form")
            .find(".childDropdowns")
            .append(
              '<div class="age-selection dir-rtl createChildDropdown font-danaregular clear-both w-full mb-4 float-right"><div class="label float-left text-sm leading-[48px]">child age' +
                i +
                '</div><select  class="select-age float-left bg-[#F8F8F8] w-[88px] h-12 leading-12 rounded-[7px] px-2"><option value="1">to 1 year</option><option value="2">1 to 2</option><option value="3">2 to 3</option><option value="4">3 to 4</option><option value="5">4 to 5</option><option value="6">5 to 6</option><option value="7">6 to 7</option><option value="8">7 to 8</option><option value="9">8 to 9</option><option value="10">9 to 10</option><option value="11">10 to 11</option><option value="12">11 to 12</option></select><div class="clr"></div></div>'
            );
        $(t).closest(".inner-city").find(".count-childRoom .count") &&
          $(t).closest(".inner-city").find(".count-childRoom .count").text(n);
      } else
        e > n &&
          (destroyChildDropdownRoom(
            $(t).closest("form").find(".childDropdowns"),
            n
          ),
          $(t).closest(".inner-city").find(".count-childRoom .count") &&
            $(t).closest(".inner-city").find(".count-childRoom .count").text(n));
      o = o.substring(0, o.length - 2);
    }
  }
  var destroyChildDropdownRoom = function (t, e) {
    t.find("div.createChildDropdown").get(e).remove();
  };
  $(".button-click .button").on("click", function () {
    var t = $(this),
      e = parseInt(t.closest("ul").next().val()),
      i = "+" == t.text() ? e + 1 : e > 0 ? e - 1 : 0;
    i >= 10 ||
      i < 1 ||
      (t.closest("ul").next().val(i),
      $(".cat_textbox").each(function () {
        $(this).next("span").text();
      }),
      t.closest("form").find(".hotel-inputF").attr("placeholder", ""),
      t.closest("form").find(".hotel-inputH").attr("placeholder", ""),
      t
        .closest("form")
        .find(".count-adult")
        .text(i +" adult"),
      t.closest(".inner-city").find(".passenger-counts").show(),
      $(this).closest(".inner-city").find(".count-adultRoom .count") &&
        $(this).closest(".inner-city").find(".count-adultRoom .count").text(i));
  });
  var createChildDropdown = function (t) {
      var e = $("<div />", {
        class: "createChildDropdown font-danaregular mb-4 w-full flex justify-between clear-both",
      });
      return (
        e.append(
          $("<label />", {
            class: " text-sm leading-6 w-32",
            for: "select-age-" + t,
          }).text("child age" + t)
        ),
        e.append(
          $(
            '<select class="select-age  bg-primary-50 w-full h-6 leading-6 rounded-[7px] px-2" id="select-age' +
              t +
              '"/>'
          )
        ),
        [
          "to 1 year",
          "1 to 2 ",
          "2 to 3",
          "3 to 4 ",
          "4 to 5",
          "5 to 6",
          "6 to 7",
          "7 to 8",
          "8 to 9",
          "9 to 10",
          "10 to 11",
          "11 to 12",
        ].forEach(function (t, i) {
          e.find("select").append(
            $("<option />")
              .text(t)
              .attr("value", i + 1)
          );
        }),
        e
      );
    },
    destroyChildDropdown = function (t, e) {
      t.find("div.createChildDropdown").get(e).remove();
    };
  
  function CheckExteraHoteldate(t) {
    var e = $(t).prop("checked");
    1 == e
      ? ($(t).val(1),
        $(".Wrapper-ExteraHoteldate").show(),
        $(".checkout").attr("required", !0),
        $(".checkin").attr("required", !0))
      : 0 == e &&
        ($(t).val(0),
        $(".Wrapper-ExteraHoteldate").hide(),
        $(".checkout").attr("required", !1),
        $(".checkin").attr("required", !1),
        $(".checkout").val(""),
        $(".checkin").val(""));
  }
  
  function SelectPlace(t) {
    var e = $(t).attr("data-id"),
      i = $(t).find("span").text(),
      n = i.split("-");
    $(t).closest(".city").find(".text-value").val(i),
      $(t).closest(".city").find(".co-id").val(e),
      $(t).closest(".city").find(".split-text").text(n[0]),
      $(t).closest(".city").find(".searchList").fadeOut(),
      $(t).closest(".city").next(".city").find(".searchList").fadeIn(),
      $(t)
        .closest(".city")
        .next(".city")
        .find(".click-content")
        .trigger("onclick");
  
    if ($(t).closest(".city").next("div").hasClass("Basis_Date_Box")) {
      $(t).closest(".city").next("div").find(".start_date").click();
    } else if ($(t).closest(".city").hasClass("tocity_container")) {
      $(t).closest(".first-part").next("div").find(".start_date").click();
    }
  }
  
  function ExchangeRoute(t) {
    var e = $(t).closest("form").find(".FCD1").val(),
    i = $(t).closest("form").find(".FCD2").val(),
    n = $(t).closest("form").find(".FCDid1").val(),
    o = $(t).closest("form").find(".FCDid2").val(),
    s = $(t).closest("form").find(".dep-txt").text(),
    a = $(t).closest("form").find(".des-txt").text();
    $(t).closest("form").find(".FCD1").val(i),
      $(t).closest("form").find(".FCD2").val(e),
      $(t).closest("form").find(".FCDid1").val(o),
      $(t).closest("form").find(".FCDid2").val(n),
      $(t).closest("form").find(".dep-txt").text(a),
      $(t).closest("form").find(".des-txt").text(s);
  }
  
  function openNextCal(t) {

    if($(".nextCalOpening").val() === ""){
      $(".nextCalOpening").trigger("onclick");
    }
    // let e = $(".rezervation-item > li:not(.inactive)").attr("data-id");
  
    // if (e === "r-flighthotel") {
    //   if (
    //     $(".Wrapper-ExteraHoteldate").is(":visible") &&
    //     $(".Wrapper-ExteraHoteldate").find(".checkin").val() !== ""
    //   ) {
    //     if (
    //       $(".Wrapper-ExteraHoteldate").find(".nextCalOpeningex").val() === ""
    //     ) {
    //       $(".Wrapper-ExteraHoteldate")
    //         .find(".nextCalOpeningex")
    //         .trigger("onclick");
    //     }
    //   } else {
    //     let returnDate = $("." + e)
    //       .find(".nextCalOpening")
    //       .val();
    //     if (returnDate == "") {
    //       $("." + e)
    //         .find(".nextCalOpening")
    //         .val();
    //       $("." + e)
    //         .find(".nextCalOpening")
    //         .trigger("onclick");
    //     }
    //   }
    // } else {
      // $("." + e)
      //   .find(".nextCalOpening")
      //   .trigger("onclick");
    // }
  }
  
  $(".button-click-child .button").on("click", function () {
    var t = $(this),
      e = parseInt(t.closest("ul").next().val()),
      i = "+" == t.text() ? e + 1 : e > 0 ? e - 1 : 0,
      n = "";
    i >= 5 ||
      (t.closest("ul").next().val(i),
      t
        .closest("ul")
        .prev()
        .val(i + ","),
      t
        .closest("form")
        .find(".cat_textbox")
        .each(function () {
          var t = $(this).next("span").text();
          n += t + ": " + $(this).val() + "، ";
        }),
      e < i
        ? t.closest("form").find(".childDropdowns").append(createChildDropdown(i))
        : e > i &&
          destroyChildDropdown(t.closest("form").find(".childDropdowns"), i),
      (n = n.substring(0, n.length - 2)),
      t.closest(".inner-city").find(".passenger-counts").show(),
      t.closest("form").find(".hotel-inputF").attr("placeholder", ""),
      t
        .closest("form")
        .find(".count-child")
        .text(i + " child"));
  }),
    $(".search-flight").click(function () {
      (s = $(this).closest("form").find(".childcountinput").val()),
        "0," == s && $(this).closest("form").find(".childcountinput").val(0),
        $(this)
          .closest("form")
          .find(".contentRooms")
          .each(function () {
            var t = $(this).find(".chcount").val(),
              e = "";
            $(this)
              .find(".select-age")
              .each(function () {
                e = e + "," + $(this).val();
              }),
              $(this)
                .find(".childcountandage")
                .val(t + e);
          });
    }),
    $(".Basis_Date").each(function () {
      $(this).click(function () {
        $(".searchList").slideUp();
      });
    }),
    $(document).ready(function () {
      $(".frm").each(function () {
        $(this).submit(function (t) {
          $(this)
            .find(
              "input[name=fdate],input[name=tdate],input[type=text].FCD1 ,input[type=text].FCD2,input[type=text].FCD,input[type=hidden].co-id"
            )
            .each(function () {
              "" != $(this).val() || $(this).is(":disabled")
                ? ($(this).closest("div").find(".notification").remove(),
                  $(this).closest(".date-city").removeClass("input-alarm"))
                : (t.preventDefault(),
                  $(this).after('<span class="notification p-absolute">*</span>'),
                  $(this).closest(".date-city").find(".selected-day").empty(),
                  $(this).closest(".date-city").find(".selected-month").empty(),
                  $(this).closest(".date-city").addClass("input-alarm"));
            });
        });
      });
    }),
    $(
      ".hotel-input , .count-adult , .count-child , .count-room , .count-adultRoom , .count-childRoom , .fclass, .pass-box, .pass-box .inner-city"
    ).click(function (t) {
      return (
        $(this)
          .parents(".city .inner-city")
          .children(".HotelPassengers")
          .toggleClass("hidden"),
        t.preventDefault(),
        !1
      );
  
      //bitaa
    }),
    $(document).on("click", function (t) {
      $(t.target).closest(
        ".searchList,.country,.selectCountry,.city, .form-search-input"
      ).length || $(".searchList").slideUp(),
        $(t.target).closest(
          ".hotel-input , .count-adult , .count-child , .count-room , .count-adultRoom , .count-childRoom , .fclass , .HotelPassengers div , HotelPassengers span"
        ).length || $(".HotelPassengers").addClass("hidden");
  
      //bitaa
    }),
    $(".Classname-box select").each(function () {
      $(this).change(function () {
        var t;
        switch ($(this).val()) {
          case "Economy":
            t = "Economy";
            break;
          case "BusinessClass":
            t = "Business";
            break;
          case "FirstClass":
            t = "First";
        }
        $(this).closest(".city").find(".fclass").text(t);
      });
    });
  
  function exchangeDepDes(t) {
    var e = $(t).closest(".route-content").find(".FCD1").val(),
      i = $(t).closest(".route-content").find(".FCD2").val(),
      n = $(t).closest(".route-content").find(".FCDid1").val(),
      o = $(t).closest(".route-content").find(".FCDid2").val(),
      s = $(t).closest(".route-content").find(".split-text-des").text(),
      a = $(t).closest(".route-content").find(".split-text-dep").text();
    $(t).closest(".route-content").find(".FCD1").val(i),
      $(t).closest(".route-content").find(".FCD2").val(e),
      $(t).closest(".route-content").find(".FCDid1").val(o),
      $(t).closest(".route-content").find(".FCDid2").val(n),
      $(t).closest(".route-content").find(".split-text-des").text(a),
      $(t).closest(".route-content").find(".split-text-dep").text(s);
  }

 function showMultiCity(t) {
  $("#multi-flight").removeClass("hidden"),
    $(t).addClass("active-r-btn"),
    $("#direct").removeClass("active-r-btn"),
    $("#return").removeClass("active-r-btn"),
    $("#flightSearch").hide(),
    $("#multi-flight").show(),
    $("#multi-flight").show(),
    $("#flightSearch").find(".end_date").removeClass("nextCalOpening");
    $("#multi-flight").find(".end_date").removeClass("nextCalOpening");
    $(window).width() <= 750 &&
      $("#multi-flight").attr("action", "/M_MultiCity_Search.bc");
}
$(window).width() >= 1024 && $("#multi-flight").find(".route-content").each(function () {
  $(this).addClass("set_Date_Box")
});
const destination_nth_txt = ["First Destination", "Second Destination", "Third Destination", "Fourth Destination"];

function addMulticityRoute(t) {
   if (document.querySelector(".route-container").querySelectorAll(".route-content").length < 4) {
      const e = document.querySelector(".route-container").querySelectorAll(".route-content")[0].innerHTML,
         i = document.createElement("div");
      i.innerHTML = e, $(window).width() >= 1024 ? i.className = "route-content set_Date_Box float-left w-full relative mb-3" : i.className = "route-content float-left relative w-full", i.querySelector(".multi-route-tlt").innerText = destination_nth_txt[document.querySelector(".route-container").querySelectorAll(".route-content").length], i.querySelectorAll("input").forEach(t => {
         t.value = ""
      }), i.insertAdjacentHTML("beforeend", '<div class="route-minus-btn cursor-pointer clear-both absolute top-0 right-2 bg-third rounded-full max-xl:-right-[10px] max-xl:bg-inherit" onclick="deleteMulticityRoute(this)"><svg class="group" width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="group-hover:fill-red-500" opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M24.5 6.56934C13.748 6.56934 5 15.3173 5 26.0694C5 36.8214 13.748 45.5694 24.5 45.5694C35.252 45.5694 44 36.8214 44 26.0694C44 15.3173 35.252 6.56934 24.5 6.56934Z" fill="#FCA5A5"/><path class="group-hover:fill-red-500" d="M29.2992 32.9698L31.4212 30.8478L26.6212 26.0518L31.4212 21.2618L29.3012 19.1378L24.4992 23.9318L19.6991 19.1338L17.5771 21.2558L22.3752 26.0518L17.5771 30.8418L19.6971 32.9638L24.4972 28.1718L29.2992 32.9698Z" fill="#FCA5A5"/></svg></div>'),
         document.querySelector(".route-container").append(i),
          i.setAttribute("data-index",
          t.closest("form").querySelector(".route-container").querySelectorAll(".route-content").length),
          i.querySelector(".fromcity_container").querySelector(".fromcity-text").value = i.previousElementSibling.querySelector(".tocity_container").querySelector(".tocity-text").value,
          i.querySelector(".fromcity_container").querySelector(".fromcity").value = i.previousElementSibling.querySelector(".tocity_container").querySelector(".tocity").value
   }
   checkButtonAddCity()
}

function deleteMulticityRoute(t) {
   t.closest(".route-content").remove();
   let e = 0;
   document.querySelector("#multi-flight").querySelector(".route-container").querySelectorAll(".route-content").forEach(t => {
      t.querySelector(".multi-route-tlt").innerText = destination_nth_txt[e], e++, t.setAttribute("data-index", e)
   }), checkButtonAddCity()
}

function checkButtonAddCity(t) {
   document.querySelector(".route-container").querySelectorAll(".route-content").length >= 4 ? (document.getElementsByClassName("route-plus-btn")[0].classList.remove("hvr-outline-out"), document.getElementsByClassName("route-plus-btn")[0].classList.add("deactive-addmc")) : (document.getElementsByClassName("route-plus-btn")[0].classList.remove("deactive-addmc"), document.getElementsByClassName("route-plus-btn")[0].classList.add("hvr-outline-out"))
}

function formMulticity_search_isSubmited(t, e) {
   let i = "";
   if (t.querySelector(".childDropdowns").querySelectorAll("select").forEach(t => {
         i = i + t.value + ","
      }), "" !== i) {
      t.querySelector(".select-age-value").value = i;
      var n = t.querySelector(".select-age-value").value.replace(/,(?=[^,]*$)/, "");
      t.querySelector(".select-age-value").value = n
   } else t.querySelector(".select-age-value").value = 0;
   for (let e = 0; e < t.getElementsByClassName("route-content").length; e++) t.getElementsByClassName("route-content")[e].querySelector(".fromcity").setAttribute("name", `_root.route__${e}.fromcity`), t.getElementsByClassName("route-content")[e].querySelector(".tocity").setAttribute("name", `_root.route__${e}.tocity`), t.getElementsByClassName("route-content")[e].querySelector(".start_date").setAttribute("name", `_root.route__${e}.departuredate`), t.getElementsByClassName("route-content")[e].querySelector(".fromcity-text").setAttribute("name", `_root.route__${e}.fromcityName`), t.getElementsByClassName("route-content")[e].querySelector(".tocity-text").setAttribute("name", `_root.route__${e}.tocityName`), t.getElementsByClassName("route-content")[e].querySelector(".multi-route-tlt").insertAdjacentHTML("beforeend", `<input type="hidden" value="${destination_nth_txt[e]}" name="_root.route__${e}.index"/>`)
}
