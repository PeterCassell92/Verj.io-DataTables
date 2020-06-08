
$(document).ready(function(){
	$('#employeesTable .table-striped').DataTable({
//			buttons:[
//		'searchPanes'],
			dom: '<"dtsp-verticalContainer"<"dtsp-verticalPanes"P><"dtsp-dataTable"frtip>>',
			searchPane: true,
			searchPanes:{
				layout: 'columns-2'
			},
			columnDefs:[
			{
				searchPanes:{
					show: true
				},
				targets: [4,5],
			},
			{
				searchPanes:{
					show: false
				}
				,
				type: "num",
				targets: [0,1,2,3,6,7]				
			},
			{
		   	srcDataFromLastChild: true,
		   	targets : '_all'
		  }
			]
	});
});

//$('#example tbody').on( 'click', 'td', function () {
//    alert( table.cell( this ).data() );
//} );


