export function editRow() {
    var table = document.getElementById('MyTable');
    var rIndex;

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
        } else if (mname === "") {
            alert("Can't be empty!");
            isEmpty = true;

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
    rIndex = this.rowIndex;

    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = id;
        table.rows[rIndex].cells[1].innerHTML = fname;
        table.rows[rIndex].cells[2].innerHTML = mname;
        table.rows[rIndex].cells[3].innerHTML = lname;
        table.rows[rIndex].cells[4].innerHTML = bday;
        table.rows[rIndex].cells[5].innerHTML = position;
    }

};




export function editRow_comp() {
    var table = document.getElementById('MyTable');
    var rIndex;

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
    rIndex = this.rowIndex;

    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = id;
        table.rows[rIndex].cells[1].innerHTML = month;
        table.rows[rIndex].cells[2].innerHTML = salary;
        table.rows[rIndex].cells[3].innerHTML = bonus;
        table.rows[rIndex].cells[4].innerHTML = commission;
        table.rows[rIndex].cells[5].innerHTML = total;
    }


}