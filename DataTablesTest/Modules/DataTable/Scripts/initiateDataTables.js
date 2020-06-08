
$(document).ready(function(){
	$('#employeesTable .table-striped').DataTable({
//			buttons:[
//		'searchPanes'],
			searchPane: true,
			searchPanes:{
				layout: 'columns-4'
			},
			dom: 'Pfrtip',
			columnDefs:[
			{
				searchPanes:{
					show: true
				},
				targets: [1,2,4,5],
			},
			{
				searchPanes:{
					show: false
				}
				,
				type: "num",
				targets: [0,3,6,7]				
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


