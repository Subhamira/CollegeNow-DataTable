$(document).ready(function(){
$("#Student").change(function(){
$('.student_status').fadeOut(1000);
$('.container').fadeIn(1000);	
	input1 = $("#Student option:selected").text()
  		getStudentData()
	//createTable()
})
})

var sorts = ''
function getStudentData(){
	sort(result)
	sorts = sortedData
	createTable()
	}

function createTable(){ //TODO: This should be a function that takes a list of objects as an arg
	$(document).ready(function(){ 

		//set undefined or empty data as not set----------------------------------------------------------------------
 console.log(sorts)
	var dataSet = sorts,//result, 
	//console.log(data)
    columnDefs = [
    		{ "data": "Student Status", "defaultContent": "<i> - </i>"}, 
            { "data": "High School Scholarship/ Award Name", "defaultContent": "<i> - </i>" }, 
            { "data": "Description/Criteria", "defaultContent": "<i> - </i>"}, 
            { "data": "GPA", "defaultContent": "<i> - </i>" }, 
            { "data": "ACT", "defaultContent": "<i> - </i>" }, 
            { "data": "Gender", "defaultContent": "<i> - </i>" }, 
            { "data": "Ethnic Heritage", "defaultContent": "<i> - </i>" }, 
            { "data": "Open Date", "defaultContent": "<i> - </i>"}, 
            { "data": "Closing Date", "defaultContent": "<i> - </i>" }, 
            { "data": "Possible Award", "defaultContent": "<i> - </i>" }, 
            { "data": "Website", "defaultContent": "<i> - </i>", 
            	"render": function(data, type, row, meta){
                	if(type === 'display'){
                    dataSet = '<a href=' + data + ' target="_blank">Click Here To Apply<a>';
	                }
                    return dataSet;},                         
            }];
  //modal-----------------------------------------------------------------------------------------------       
	var myTable;
    myTable = $("#data-table").DataTable({
    	//fixedHeader: true,
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
			iDisplayLength: 10,
    	//responsive: false,
			columnDefs: [
			{targets:[0],visible: false},
			{targets:' _all', 'width': '100px'},
			{ "bSortable": false, "aTargets": [0,1,2,3,4,5,6,7,8] },
			
			],

			dom: '<"top"B><"top"l><"Search"f>rt<"bottom"ip><"clear">',
    // buttons: ['copy', 'excel', 'pdf', 'print'],
			buttons: [ 'pdf', 'print' ],
    	"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
    	"sPaginationType": "full_numbers",		//
    	"bFilter" : true,
    	"bSort" : true,

    	data:dataSet, columns:columnDefs,
    //dom: "Blfrtip"
 
});
												
//function for selected dropdown---------------------------------------------------------------------------------									
myTable.columns(/*[3,4,5,6,9]*/[3,4,5,6,7,8]).every(function(){
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
//function for toggle between table view and card view------------------------------------------------------------- 									
$('#btToggleDisplay').on('click', function(){
$("#data-table").toggleClass('cards')
$("#data-table thead").toggle()
});
	
				
//oreq.onload ends-----------------------------------------------------------------------------------------------
				
				
	}) 
} 

//})