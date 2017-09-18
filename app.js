$(document).ready(function(){
$("#Student").change(function(){
$('.student_status').fadeOut(1000);
$('.container').fadeIn(1000);	
	input1 = $("#Student option:selected").text()
  		getStudentData()
	})
})		
	
var sorted_results = ''
	
function getStudentData(){
	sort(result)
	sorted_results = sortedData
	createTable()
	}

function createTable(){ //TODO: This should be a function that takes a list of objects as an arg
	$(document).ready(function(){ 
    console.log(result) 		

		//set undefined or empty data as not set----------------------------------------------------------------------

	var dataSet = sorted_results //result, 
    columnDefs = [
    		{ "data": "DropbdownSelection", "defaultContent": "<i> - </i>"}, 
            { "data": "Text in the result listing", "defaultContent": "<i> - </i>" }, 
            { "data": "Text in the result listing_1", "defaultContent": "<i> - </i>"}, 
            { "data": "Input box number only", "defaultContent": "<i> - </i>" }, 
            { "data": "Input box number only_1", "defaultContent": "<i> - </i>" }, 
            { "data": "Dropdown", "defaultContent": "<i> - </i>" }, 
            { "data": "Multi-Select", "defaultContent": "<i> - </i>" }, 
            { "data": "Input Box", "defaultContent": "<i> - </i>"}, 
            { "data": "Input Box_1", "defaultContent": "<i> - </i>" }, 
            { "data": "Text in the result listing_2", "defaultContent": "<i> - </i>" }, 
            { "data": "Text in the result listing (Hyperlink) open in NEW WINDOW", "defaultContent": "<i> - </i>", 
            	"render": function(data, type, row, meta){
                	if(type === 'display'){
                    dataSet = '<a href=' + data + ' target="_blank">Click Here To Apply<a>';
	                }
                    return dataSet;},                         
            }];
  //modal-----------------------------------------------------------------------------------------------       
	var myTable;
    myTable = $("#data-table").DataTable({
    	fixedHeader: true,
    	iDisplayLength: 10,
    	responsive: false,
    	columnDefs: [
			{targets:[0],visible: false},
			{targets:' _all', 'width': '100px'},
			{ "bSortable": false, "aTargets": [0,1,2,3,4,5,6,7,8] },
			
		],
    	//responsive: {
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

		/*}*/,
    //dom: "Blfrtip"
	dom: '<"top"B><"top"l><"Search"f>rt<"bottom"ip><"clear">',
    // buttons: ['copy', 'excel', 'pdf', 'print'],
	buttons: [ 'pdf', 'print' ],
    "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
    "sPaginationType": "full_numbers",		//
    "bFilter" : true,
    "bSort" : true,
 
	//change header name-----------------------------------------------------------------------------------------
    data: dataSet, columns: columnDefs,
    'initComplete': function(settings){ 
		var api = new $.fn.dataTable.Api(settings); api.columns().header().each(function(column){ 
			if ($(column).text() === 'DropbdownSelection'){ 
				$(column).text("Student Status"); 
			} 
    		else if ($(column).text() === 'Text in the result listing'){ 
				$(column).text("Scholarship Name"); 
			} 
            else if ($(column).text()=== 'Text in the result listing_1'){ 
				$(column).text("Criteria"); 
			} 
            else if ($(column).text() === 'Input box number only'){ 
				$(column).text("GPA Required"); 
			} 
            else if ($(column).text() === 'Input box number only_1'){ 
				$(column).text("ACT"); 
			} 
            else if ($(column).text() === 'Multi-Select'){ 
				$(column).text("Ethnic-Heritage");
			} 
            else if ($(column).text() === 'Dropdown'){ 
				$(column).text("Gender"); 
			} 
            else if ($(column).text() === 'Input Box'){ 
				$(column).text("Open Date"); 
			} 
            else if ($(column).text() === 'Input Box_1'){ 
				$(column).text("Closing Date"); 
			} 
            else if ($(column).text() === 'Text in the result listing_2'){ 
				$(column).text("Possible Award");
			} 
            else if ($(column).text() === 'Text in the result listing (Hyperlink) open in NEW WINDOW'){ 
				$(column).text("Website"); 
			} 
		});                                                       
    },			
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
