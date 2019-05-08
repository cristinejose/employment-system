export function editRow() {

    var table = document.getElementById('MyTable');


    function checkEmptyInput() {
        var isEmpty = false,
            id = document.getElementById("id").value,
            fname = document.getElementById("fname").value,
            mname = document.getElementById("mname").value,
            lname = document.getElementById("lname").value,
            bday = document.getElementById("bday").value,
            position = document.getElementById("position").value;



        if (id === "") {
            alert("Can't be empty!");
            isEmpty = true;
        } else if (fname === "") {
            alert("Can't be empty!");
            isEmpty = true;
            // } else if (mname === "") {
            //     alert("Can't be empty!");
            //     isEmpty = true;

        } else if (lname === "") {
            alert("Can't be empty!");
            isEmpty = true;
        } else if (bday === "") {
            alert("Can't be empty!");
            isEmpty = true;
        } else if (position === "") {
            alert("Can't be empty!");
            isEmpty = true;
        }
        return isEmpty;
    }


    var id = document.getElementById("id").value,
        fname = document.getElementById("fname").value,
        mname = document.getElementById("mname").value,
        lname = document.getElementById("lname").value,
        bday = document.getElementById("bday").value,
        position = document.getElementById("position").value;


    if (!checkEmptyInput()) {
        var rIndex = document.getElementById("rIndex").value;
        console.log(rIndex);

        table.rows[rIndex].cells[1].innerHTML = id;
        table.rows[rIndex].cells[2].innerHTML = fname;
        table.rows[rIndex].cells[3].innerHTML = mname;
        table.rows[rIndex].cells[4].innerHTML = lname;
        table.rows[rIndex].cells[5].innerHTML = bday;
        table.rows[rIndex].cells[6].innerHTML = position;
    }

};




export function editRow_comp() {
    var table = document.getElementById('MyTable');

    function checkEmptyInput() {
        var isEmpty = false,
            id = document.getElementById("id").value,
            month = document.getElementById("month").value,
            salary = document.getElementById("salary").value,
            bonus = document.getElementById("bonus").value,
            commission = document.getElementById("commission").value,
            total = document.getElementById("total").value;



        if (id === "") {
            alert("Can't be empty!");
            isEmpty = true;
        } else if (month === "") {
            alert("Can't be empty!");
            isEmpty = true;
        } else if (salary === "") {
            alert("Can't be empty!");
            isEmpty = true;

        } else if (bonus === "") {
            alert("Can't be empty!");
            isEmpty = true;
        } else if (commission === "") {
            alert("Can't be empty!");
            isEmpty = true;
        } else if (total === "") {
            alert("Can't be empty!");
            isEmpty = true;
        }
        return isEmpty;
    }

    var id = document.getElementById("id").value,
        month = document.getElementById("month").value,
        salary = document.getElementById("salary").value,
        bonus = document.getElementById("bonus").value,
        commission = document.getElementById("commission").value,
        total = document.getElementById("total").value;

    if (!checkEmptyInput()) {
        var rIndex = document.getElementById("rIndex").value;
        console.log(rIndex);

        table.rows[rIndex].cells[1].innerHTML = id;
        table.rows[rIndex].cells[2].innerHTML = month;
        table.rows[rIndex].cells[3].innerHTML = salary;
        table.rows[rIndex].cells[4].innerHTML = bonus;
        table.rows[rIndex].cells[5].innerHTML = commission;
        table.rows[rIndex].cells[6].innerHTML = total;
    }


};