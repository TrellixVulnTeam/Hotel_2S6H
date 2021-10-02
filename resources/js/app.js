require('./bootstrap');

const run = () => {
        console.log("hello");
    }
    // this is test
calendar = function() {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    var tdd = tomorrow.getDate();
    var tmm = tomorrow.getMonth() + 1;
    var tyyyy = tomorrow.getFullYear();
    if (tdd < 10) {
        tdd = '0' + tdd
    }
    if (tmm < 10) {
        tmm = '0' + tmm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("CheckIn").setAttribute("min", today);
    document.getElementById("CheckIn").setAttribute("value", today);

    tomorrow = tyyyy + '-' + tmm + '-' + tdd;
    document.getElementById("CheckOut").setAttribute("min", tomorrow);
    document.getElementById("CheckOut").setAttribute("value", tomorrow);
}



checkcalendarin = function() {
    var checkin = document.getElementById("CheckIn");
    var checkout = document.getElementById("CheckOut");
    var checkinval = checkin.value;
    var checkoutval = checkout.value;


    if (checkinval >= checkoutval) {
        var newDate = new Date(checkinval);
        newDate.setDate(newDate.getUTCDate() + 1);
        var futureDate = newDate.getFullYear() + '-' + ('0' + (newDate.getMonth() + 1)).slice(-2) + '-' + ('0' + (newDate.getDate())).slice(-2);
        checkout.value = futureDate;
    }
}

checkcalendarout = function() {
    var checkin = document.getElementById("CheckIn");
    var checkout = document.getElementById("CheckOut");
    var checkinval = checkin.value;
    var checkoutval = checkout.value;


    if (checkinval >= checkoutval) {
        var newDate = new Date(checkoutval);
        newDate.setDate(newDate.getUTCDate() - 1);
        var futureDate = newDate.getFullYear() + '-' + ('0' + (newDate.getMonth() + 1)).slice(-2) + '-' + ('0' + (newDate.getDate())).slice(-2);
        checkin.value = futureDate;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {

            everyitem.addEventListener('mouseover', function(e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function(e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
    // end if innerWidth
});
// DOMContentLoaded  end



rooms = function(n) {
    var adult2l = document.getElementById("adultcount2l");
    var adult2i = document.getElementById("adultcount2i");
    var child2l = document.getElementById("childadult2l");
    var child2i = document.getElementById("childadult2i");

    var adult3l = document.getElementById("adultcount3l");
    var adult3i = document.getElementById("adultcount3i");
    var child3l = document.getElementById("childadult3l");
    var child3i = document.getElementById("childadult3i");


    if (n >= 2) {
        adult2l.hidden = false;
        adult2i.hidden = false;
        child2l.hidden = false;
        child2i.hidden = false;
    } else {
        adult2l.hidden = true;
        adult2i.hidden = true;
        child2l.hidden = true;
        child2i.hidden = true;
    }
    if (n == 3) {
        adult3l.hidden = false;
        adult3i.hidden = false;
        child3l.hidden = false;
        child3i.hidden = false;
    } else {
        adult3l.hidden = true;
        adult3i.hidden = true;
        child3l.hidden = true;
        child3i.hidden = true;
    }
}