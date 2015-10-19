var employeeArray =[];
var salaryArray =[];
var employeeObject ={};
var monthlySalary, dispMonthlySalary, totalSalary;
var removedEmployee;
var costString = "Monthly cost of salaries";

$(document).ready(function(){
	$('#employeeinfo').submit(function(event){
		event.preventDefault();

		var values = {};
		
		//console.log($("#employeeinfo").serializeArray());
		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})

		$("#employeeinfo").find("input[type=text]").val("");
		//console.log(values);
		employeeArray.push(values);
		//console.log(employeeArray);

		employeeMonthlySalary(values.salary);
		appendDom(values);
		salaryAppendDom();
		
		//console.log(monthlySalary);
	})

	//delete employee button function
	$(".delete_employee").on('click', function() {
		removeLastEmployee();
	})
})
//Append Dom with Employee Info
function appendDom(employee){
	
	//remove contents of previous classes. Empty salary container
	$(".employee, .employee_labels, .monthly_salary").remove();
	//$(".employee_labels").remove();
	//$(".monthly_salary").remove();

	$("#employeeContainer").append("<div class='employee_labels'></div>");
	var $el = $("#employeeContainer").children().last();
	$el.append("<p>Full Name</p>");
	$el.append("<p>Employee Number</p>");
	$el.append("<p>Job Title</p>");
	$el.append("<p>Employee Salary</p>");

	$("#employeeContainer").append("<div class='employee'></div>");
	$el = $("#employeeContainer").children().last();
	//append the DOM with employee info
	$el.append("<p>" + employee.first_name + " " + employee.last_name + "</p>");
	$el.append("<p>" + employee.employee_number+ "</p>");
	$el.append("<p>" +employee.job_title+ "</p>");
	$el.append("<p>" + '$' +employee.salary+ "</p>");

	//append the DOM with salary info
	// $("#employeeContainer").append("<div class = 'monthly_salary'></div>");
	// $el = $("#employeeContainer").children().last();
	// $el.append("<p>" + costString + "</p>");
	// $el.append("<p>" + "$"+ dispMonthlySalary + "</p>");

	//append the DOM with delete button
	//$("#employeeContainer").append("<button class ='delete_employee'>Delete Last Employee</button>");


}

function salaryAppendDom() {
	//append the DOM with salary info
	$("#employeeContainer").append("<div class = 'monthly_salary'></div>");
	$el = $("#employeeContainer").children().last();
	$el.append("<p>" + costString + "</p>");
	$el.append("<p>" + "$"+ dispMonthlySalary + "</p>");
}

//determine salary per month for all the employees
function employeeMonthlySalary(salary){

	salary = parseInt(salary);
	salaryArray.push(salary);
	totalSalary = 0;

	for (i=0;i<salaryArray.length;i++) {
		totalSalary += (salaryArray[i]);
	}
	//console.log(sum);
	//console.log(salaryArray);
	monthlySalary = totalSalary/12;
	dispMonthlySalary = Math.round(monthlySalary);
	
	//console.log(monthlySalary);
	return dispMonthlySalary;
}
//remove last entered employee info from arrays and DOM
function removeLastEmployee() {
	console.log
	removedEmployee = employeeArray.pop();
	$(".employee").remove();
	totalSalary -= salaryArray.pop();
	monthlySalary=totalSalary/12;
	dispMonthlySalary = Math.round(monthlySalary);
	salaryAppendDom();

	return removedEmployee;
}

