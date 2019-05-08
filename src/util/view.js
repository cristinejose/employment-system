export function showRow() {

    var table = document.getElementById('MyTable');

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {

            document.getElementById("id").value = this.cells[1].innerHTML;
            document.getElementById("fname").value = this.cells[2].innerHTML;
            document.getElementById("mname").value = this.cells[3].innerHTML;
            document.getElementById("lname").value = this.cells[4].innerHTML;
            document.getElementById("bday").value = this.cells[5].innerHTML;
            document.getElementById("position").value = this.cells[6].innerHTML;
            document.getElementById("rIndex").value = this.rowIndex;
            console.log("onclick : " + this.rowIndex);
        };
    }

};

export function showRow_comp() {
    var rIndex;
    var table = document.getElementById('MyTable');

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            document.getElementById("id").value = this.cells[0].innerHTML;
            document.getElementById("month").value = this.cells[1].innerHTML;
            document.getElementById("salary").value = this.cells[2].innerHTML;
            document.getElementById("bonus").value = this.cells[3].innerHTML;
            document.getElementById("commission").value = this.cells[4].innerHTML;
            document.getElementById("total").value = this.cells[5].innerHTML;
            document.getElementById("rIndex").value = this.rowIndex;
            console.log("onclick : " + this.rowIndex);

        };
    }

}