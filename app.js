//when the user selects input the page disappers and gets data according to option selected=================>
$(document).ready(function(){
$("#Student").change(function(){
$('.student_status').fadeOut(1000);
$('#container-main').fadeIn(1000);	
	input1 = $("#Student option:selected").text()
  		getStudentData()
})
})
//creates table with respect to data selected by user=================================================================>
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
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            		}
					else{
						return '<label>Scholarship:</label>' + data;
					}
				},
			},
            { "data": "Description/Criteria", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            		}
					else{
						return '<label>Description:</label>' + data;
					}
				},
			},
            { "data": "GPA", "defaultContent": "<i> - </i>",
				render: function (data, type, full, meta){ 
					if(data == undefined){
						data = "-"
						return '<label>GPA:</label>' + data;
					}
					else{
						return '<label>GPA:</label>' + data;
					}
				},
			},
            { "data": "ACT", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            			return '<label>ACT:</label>' + data;
            		}
					else{
						return '<label>ACT:</label>' + data;
					}
				},
			},
            { "data": "Gender", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            		 	data = "-"
            		 	return '<label>Gender:</label>' + data;
            		}
					else{
						return '<label>Gender:</label>' + data;
					}
				},
			},
            { "data": "Ethnic Heritage", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            			return '<label>Ethnic Heritage:</label>' + data;
            		}
					else{
						return '<label>Ethnic Heritage:</label>' + data;
					}
				},
			},
            { "data": "Open Date", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            			return '<label>Open Date:</label>' + data;
            		}
					else{
						return '<label>Open Date:</label>' + data;
					}
				},
			},
            { "data": "Closing Date", "defaultContent": "<i> - </i>", 
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
						return '<label>Closing Date:</label>' + data;
            		}
					else{
						return '<label>Closing Date:</label>' + data;
					}
				},
			},
            { "data": "Possible Award ", "defaultContent": "<i> - </i>", 
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            			return '<label>Possible Award:</label>' + data;
            		}
					else{
						return '<label>Possible Award:</label>' + data;
					}
				},
			},
            { "data": "Website", "defaultContent": "<i> - </i>", 
            	"render": function(data, type, row, meta){
                	if(type === 'display'){
                    dataSet = '<a href=' + data + ' target="_blank">Click Here To Apply<a>'
	                }
                    return '<label>Website:</label>' + dataSet;
                	
                },                         
            }];
		
		var header = [];
    header.push("Student Status");
    header.push("High School Scholarship/ Award Name");
    header.push("Description/Criteria");
    header.push("GPA");
    header.push("ACT");
    header.push("Gender");
    header.push("Ethnic Heritage");
    header.push("Open Date");
    header.push("Closing Date");
    header.push("Possible Award");
		header.push("Website");
  
  var buttonExp = {
    exportOptions: {
      format: {
        header: function ( data, column, row ) {
          return header[column]; 
        }
      }
    }
  };		
		
		
		
		
		
		
		
		
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
//			{targets:' _all', 'width': '80px'},
//			{targets:'_all', className: "desktop"},
			{ "bSortable": false, "aTargets": [0,1,2,3,4,5,6,7,8] },
			
			],

			dom: '<"top"B><"top"l><"Search"f>rt<"bottom"ip><"clear">',
    
  
 	// buttons: ['copy', 'excel', 'pdf', 'print'],//choose respective export option
	//The below functions customizes the print and pdf export option
		buttons: [
			 $.extend(true, {}, buttonExp,{
        extend: 'print',
				
		//dom:'<"bottom"t>',
		exportOptions: {
			stripHtml: false
			},
		
        title:"Scholorship Lists",
        customize: function ( win ) {
						$(win.document.body)
                   		.css( 'font-size', '15pt' )
                   		.prepend(
                        '<img src="https://centricconsulting.com/wp-content/uploads/2016/11/College-Now-logo.jpg" style="position:absolute; top:0; right:0 ; width=5%; height:5%; padding=50px" />'
															)
												.watermark = {text: 'CollegeNow', color: 'blue', opacity: 0.1};
							
					},
				}),		
					$.extend(true, {}, buttonExp,{ 
					extend: 'pdfHtml5',
					messageBottom: 'Powered by Subha Venkatesan, Steven Moats, Wesley Beckette-El',
					orientation:'landscape',
					title:'Scholorship Lists',
					exportOptions: {
						stripHtml: false,	
						columns: [1,2,3,4,5,6,7,8,9,10],
								
				},
                	customize: function ( doc ) {
                    doc.content.splice( 1, 0, 
					{
                    margin: [650, 0, 0, 0],
					image:'data:image/png;base64,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',
					fit: [150, 150],
				});
					doc.watermark = {text: 'CollegeNow', color: 'blue', opacity: 0.1};
					},
													
				}),																	
																							
					//}
            	],
					"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],//values can be changed as clients requirement
					"sPaginationType": "full_numbers",
					"bFilter" : true,
					"bSort" : true,

					data:dataSet, columns:columnDefs,
								
			});
												
//This creates the dropdowns located on certain columns. The columns are defined in the myTable.columns variable								
myTable.columns([3,4,5,6,7,8]).every(function(){
	var column = this;
	var select = $('<select id="drop"><option value="" >Options</option></select>')
	
		.appendTo( $(column.header()) )
		.on( 'change', function () {
		column.search(this.value)
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

