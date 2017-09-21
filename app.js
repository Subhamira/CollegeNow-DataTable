$(document).ready(function(){
$("#Student").change(function(){
$('.student_status').fadeOut(1000);
$('.container').fadeIn(1000);	
	input1 = $("#Student option:selected").text()
  		getStudentData()
})
})

var sorts = ''
function getStudentData(){
	sort(result)
	sorts = sortedData
	createTable()
	}

function createTable(){ 
	$(document).ready(function(){ 

 console.log(sorts) // logs out filtered JSON data after the dropdown selection is made. 
 		 			//This can help find a "key" to a new header.
	var dataSet = sorts,  //result, 
    
 	//columnDefs sets the columns data to align with the key from the headers in the JSON data. 
 	//"data" is the name of the key from the JSON data
 	//"defaultContent" makes any cell without data display "-"
 	//"render" creates a label on on each row that helps the card view to function properly
 	columnDefs = [
    		{ "data": "Student Status", "defaultContent": "<i> - </i>"}, 
            { "data": "High School Scholarship/ Award Name", "defaultContent": "<i> - </i>", 
            render: function (data, type, full, meta) { return '<label>Scholarship:</label>' + data; }}, 
            { "data": "Description/Criteria", "defaultContent": "<i> - </i>",
			render: function (data, type, full, meta) { return '<label>Description:</label>' + data; }}, 
            { "data": "GPA", "defaultContent": "<i> - </i>",
			render: function (data, type, full, meta) { return '<label>GPA:</label>' + data;}}, 
            { "data": "ACT", "defaultContent": "<i> - </i>", 
			render: function (data, type, full, meta) { return '<label>ACT:</label>' + data; }}, 
            { "data": "Gender", "defaultContent": "<i> - </i>", 
			render: function (data, type, full, meta) { return '<label>Gender:</label>' + data; }}, 
            { "data": "Ethnic Heritage", "defaultContent": "<i> - </i>", 
			render: function (data, type, full, meta) { return '<label>Ethnic Heritage:</label>' + data; }}, 
            { "data": "Open Date", "defaultContent": "<i> - </i>",
			render: function (data, type, full, meta) { return '<label>Open Date:</label>' + data; }}, 
            { "data": "Closing Date", "defaultContent": "<i> - </i>", 
			render: function (data, type, full, meta) { return '<label>Closing Date:</label>' + data; }}, 
            { "data": "Possible Award ", "defaultContent": "<i> - </i>", 
			render: function (data, type, full, meta) { return '<label>Possible Award:</label>' + data; }}, 
            { "data": "Website", "defaultContent": "<i> - </i>", 
            	"render": function(data, type, row, meta){
                	if(type === 'display'){
                    dataSet = '<a href=' + data + ' target="_blank">Click Here To Apply<a>'
	                }
                    return dataSet;},                         
            }];
  //This creates the data-table and adds attributes. For instance, fixedHeader keeps the headers on the top of the page 
  //even after the page is scrolled. There are more attributes available in the datatables documentation available online. 
	var myTable;
    myTable = $("#data-table").DataTable({
    	fixedHeader: true,
    	autoWidth: true,

  // responsive is being used to incorporate the modal function with brings up the detailed view
    	responsive: {
			details: {
				display: $.fn.dataTable.Responsive.display.modal({
				header: function(row){
				var data = row.data();
				return 'Details';
				}
			}),
			renderer: $.fn.dataTable.Responsive.renderer.tableAll({
				tableClass: 'table'
                })
			}
		},
	//Sets the default amount of rows shown
			iDisplayLength: 10,
	//The columnDefs below set some specific params to certain columns. 
			columnDefs: [
			{targets:[0],visible: false},
			{targets:' _all', 'width': '80px'},
			{targets:'_all', className: "desktop"},
			{ "bSortable": false, "aTargets": [0,1,2,3,4,5,6,7,8] },
			
			],

			dom: '<"top"B><"top"l><"Search"f>rt<"bottom"ip><"clear">',
    
    // buttons creates the PDF and Print buttons
			buttons: [ 'pdf', 'print' ],
	// LendthMenu displays the amount of "items per page" options. 
    	"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
    	"sPaginationType": "full_numbers",		
    // This makes the columns sortable
    	"bFilter" : true,
    	"bSort" : true,

    	data:dataSet, columns:columnDefs,
    //dom: "Blfrtip"
 
});
												
//This creates the dropdowns located on certain columns. The columns are defined in the myTable.columns variable								
myTable.columns([3,4,5,6,7,8]).every(function(){
	var column = this;
	var select = $('<select id="drop"><option value="" >Options</option></select>')
		.appendTo( $(column.header()) )
		.on( 'change', function () {
			var val = $.fn.dataTable.util.escapeRegex(
			$(this).val()
		);
	column
	.search( val ? '^'+val+'$' : '', true, false )
	.draw();
});
column.data().unique().sort().each(function(d,j){
	select.append( '<option value="'+d+'">'+d+'</option>' )
	});
});
//function for toggle between table view and card view 									
$('#btToggleDisplay').on('click', function(){
$("#data-table").toggleClass('cards')
$("#data-table thead").toggle()
});
	
				
				
				
	}) 
} 


