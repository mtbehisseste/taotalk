/****************************************************************************
 *
 * Copyright (c) 2017 ESound Tech. All Rights Reserved.
 *
 * This SOURCE CODE FILE, which has been provided by ESound as part
 * of a ESound product for use ONLY by licensed users of the product,
 * includes CONFIDENTIAL and PROPRIETARY information of ESound.
 *
 * USE OF THIS SOFTWARE IS GOVERNED BY THE TERMS AND CONDITIONS
 * OF THE LICENSE STATEMENT AND LIMITED WARRANTY FURNISHED WITH
 * THE PRODUCT.
 *
 * IN PARTICULAR, YOU WILL INDEMNIFY AND HOLD ESOUND, ITS RELATED
 * COMPANIES AND ITS SUPPLIERS, HARMLESS FROM AND AGAINST ANY CLAIMS
 * OR LIABILITIES ARISING OUT OF THE USE, REPRODUCTION, OR DISTRIBUTION
 * OF YOUR PROGRAMS, INCLUDING ANY CLAIMS OR LIABILITIES ARISING OUT OF
 * OR RESULTING FROM THE USE, MODIFICATION, OR DISTRIBUTION OF PROGRAMS
 * OR FILES CREATED FROM, BASED ON, AND/OR DERIVED FROM THIS SOURCE
 * CODE FILE.
 *
 *
 *     File name:       petition.js
 *
 *     History:
 *     Date               Author            Comments
 *     -----------------------------------------------------------------------
 *     JAN 23, 2017       Vergil           Initial Release
 *****************************************************************************/

$(document).ready(function() {
	
   $().timelinr({
      orientation: 'horizontal',
      // value: horizontal | vertical, default to horizontal
      containerDiv: '#timeline',
      // value: any HTML tag or #id, default to #timeline
      datesDiv: '#dates',
      // value: any HTML tag or #id, default to #dates
      datesSelectedClass: 'selected',
      // value: any class, default to selected
      datesSpeed: 'normal',
      // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
      issuesDiv : '#issues',
      // value: any HTML tag or #id, default to #issues
      issuesSelectedClass: 'selected',
      // value: any class, default to selected
      issuesSpeed: 'fast',
      // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
      issuesTransparency: 0.2,
      // value: integer between 0 and 1 (recommended), default to 0.2
      issuesTransparencySpeed: 500,
      // value: integer between 100 and 1000 (recommended), default to 500 (normal)
      prevButton: '#prev',
      // value: any HTML tag or #id, default to #prev
      nextButton: '#next',
      // value: any HTML tag or #id, default to #next
      arrowKeys: 'false',
      // value: true/false, default to false
      startAt: 1,
      // value: integer, default to 1 (first)
      autoPlay: 'false',
      // value: true | false, default to false
      autoPlayDirection: 'forward',
      // value: forward | backward, default to forward
      autoPlayPause: 2000
      // value: integer (1000 = 1 seg), default to 2000 (2segs)
     });


})

var rootCate;
var subCate;
function getCategories(channel,showAll){
	$.ajax({
		url: "/servlet/CategoryAjax",
		type:"post",
		data:{
			func:"getCategories",
			channel:channel,
			showAll:showAll
		},
		dataType:"json",
		success:function(data){
			rootCate = new Array();
			subCate = new Array();
			for (var i = 0; i < data.rows.length; i++) {
				if(data.rows[i].parentID.length == 0){
					rootCate.push(data.rows[i]);
				}else{
					subCate.push(data.rows[i]);
				}
			}
			var content = layoutMatrixHTML();
			$("#ajaxContent").html(content);
		}
	})
}

function searchCategory(){
	
	var content = "";
	var subCate_filter = subCate.filter(function(value){
		
		return value.cateName.toLowerCase().indexOf($("#search_input").val()) >= 0 ;
	})

	if(subCate_filter.length > 0){
		for (var i = 0; i < subCate_filter.length; i++) {
			if(otherChannel == 'y'){
				content += '<a href="/interface/Petition?sc_Id='+subCate_filter[i].cateId+'&channel='+channel+'&router=prepetition" class="search-item fontText-md"> <i class="fa fa-caret-right" aria-hidden="true"></i>    '+subCate_filter[i].cateName+'</a>';	
			}else{
				content += '<a href="/main/PageCtrl?p=p_2&sc_Id='+subCate_filter[i].cateId+'" class="search-item fontText-md"> <i class="fa fa-caret-right" aria-hidden="true"></i>    '+subCate_filter[i].cateName+'</a>';	
			}
		}
		
		$("#searchResultContent > .searchResult-container").html(content);
	}else{
		$("#searchResultContent > .searchResult-container").html('<div style="text-align:center;padding-top:20px;">'+
																	'<p style="font-size: 16px;color: #6b828c;">很抱歉，沒有找到您要的類別</p>'+
																	'<p style="margin-top: 16px;">'+
																		'<a href="javascript:void(0)" onclick="backMainPage();" style="color: #6b828c;font-weight: 600;font-size: 18px;">返回建議主選單</a>'+
																	'</p>'+
																 '</div>');
	}
}

function layoutMatrixHTML(){
	var content = "";
	var count = rootCate.length;
	var divi = Math.floor(count/3);
	var remain = count%3;
	
	for (var i in rootCate){
						
		if(remain == 0){
			if( i == 0   ||   i == divi   ||   i == (2*divi) ){
				content += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'
			}

		}else if(remain == 1){
			if( i == 0   ||   i == (divi+1)   ||   i == (2*divi+1) ){
				content += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'
			}

		}else if(remain == 2){
			if( i == 0   ||   i == divi+1   ||   i == (2*divi+2) ){
				content += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'
			}
		}
		 
			/* '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">' */
		content +=		'<div class="panel panel-default" style="margin-bottom:5px;">'
					+				'<div class="panel-heading panel-theme">'
					+					'<h4 class="panel-title">'
					+						'<a class="btn-block fontText-md" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'">'+rootCate[i].cateName+' </a>'
 					+					'</h4>'
					+				'</div>'
					+				'<div id="collapse'+i+'" class="panel-collapse collapse">'
					+					'<ul class="list-group" id="ul-'+rootCate[i].cateId+'">'
		
		for (var j = 0; j < subCate.length; j++) {
			if(subCate[j].parentID == rootCate[i].cateId){
				if(otherChannel == 'y'){
					content += '<li class="list-group-item"><a class="item-a fontText-sm" href="/interface/Petition?sc_Id='+subCate[j].cateId+'&channel='+channel+'&router=prepetition" rel="item"><i class="fa fa-caret-right" aria-hidden="true"></i>    '+subCate[j].cateName+'</a></li>'	
				}else{
					content += '<li class="list-group-item"><a class="item-a fontText-sm" href="/main/PageCtrl?p=p_2&sc_Id='+subCate[j].cateId+'" rel="item"><i class="fa fa-caret-right" aria-hidden="true"></i>    '+subCate[j].cateName+'</a></li>'
				}
			}
		}

		content +=						'</ul>'
					+				'</div>'
					+			'</div>';
									
		if(remain == 0){
			if(i == divi-1  ||   i == divi*2-1  ||   i == divi*3 -1){
				content += "</div>";
			}
		}else if(remain == 1){
			if(i == divi  ||   i == divi*2  ||   i == divi*3){
				content += "</div>";
			}

		}else if(remain == 2){
			if(i == divi  ||   i == divi*2+1  ||   i == divi*3 +1){
				content += "</div>";
			}
		}
	}

	return content;
}



function loadCategory(channel,showAll) {
	//jquery blockui start
	
	$.ajax({
		url: "/servlet/FormAjax",
		type: "POST",
		data:{
			func:"getCategory",
			channel:channel,
			showAll:showAll
		},
		dataType:"json",
		success:function(data){	
			
			var content = "";
			var count = data.total;
			var divi = Math.floor(count/3);
			var remain = count%3;
			
			
			for (var i in data.rows){
								
				if(remain == 0){
					if( i == 0   ||   i == divi   ||   i == (2*divi) ){
						content += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'
					}

				}else if(remain == 1){
					if( i == 0   ||   i == (divi+1)   ||   i == (2*divi+1) ){
						content += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'
					}

				}else if(remain == 2){
					if( i == 0   ||   i == divi+1   ||   i == (2*divi+2) ){
						content += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'
					}
				}
				 
					/* '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">' */
				content +=		'<div class="panel panel-default" style="margin-bottom:5px;">'
							+				'<div class="panel-heading panel-theme">'
							+					'<h4 class="panel-title">'
							+						'<a class="btn-block fontText-md" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+' " onclick="loadSubcategory( \''+data.rows[i].cateId+'\',\''+channel+'\','+showAll+');"  ">'+data.rows[i].cateName+' </a>'
		 					+					'</h4>'
							+				'</div>'
							+				'<div id="collapse'+i+'" class="panel-collapse collapse">'
							+					'<ul class="list-group" id="ul-'+data.rows[i].cateId+'">'

							+					'</ul>'
							+				'</div>'
							+			'</div>';
											
					if(remain == 0){
						if(i == divi-1  ||   i == divi*2-1  ||   i == divi*3 -1){
							content += "</div>";
						}
					}else if(remain == 1){
						if(i == divi  ||   i == divi*2  ||   i == divi*3){
							content += "</div>";
						}

					}else if(remain == 2){
						if(i == divi  ||   i == divi*2+1  ||   i == divi*3 +1){
							content += "</div>";
						}

					}
							
			}
			
			$("#ajaxContent").html(content);
			
			//jquery block ui end

		},
		error:function(){
			showAlert("", "取得1級陳情類別失敗.");
		}
	})
}


function loadSubcategory(mainCateId,channel,showAll) {
	
 	$.ajax({
		url: "/servlet/FormAjax",
		type: "POST",
		data:{
			func:"getCategoryDetail",
			channel:channel,
			mainCateId: mainCateId,
			showAll:showAll
		},
		dataType:"json",
		success:function(data){

 			
			var content = "";
			
			for(var i in data.rows){
				
				if(otherChannel == 'y'){
					content += '<li class="list-group-item"><a class="item-a fontText-sm" href="/interface/Petition?sc_Id='+data.rows[i].cateId+'&channel='+channel+'&router=prepetition" rel="item"><i class="fa fa-caret-right" aria-hidden="true"></i>    '+data.rows[i].cateName+'</a></li>'	
				}else{
					content += '<li class="list-group-item"><a class="item-a fontText-sm" href="/main/PageCtrl?p=p_2&sc_Id='+data.rows[i].cateId+'" rel="item"><i class="fa fa-caret-right" aria-hidden="true"></i>    '+data.rows[i].cateName+'</a></li>'
				}
				
				
				
			}
			
			
			if(cateAllShow == "false"){
				
				// if(!showAll){
				// 	content += '<li class="list-group-item"><a rel="more" onclick="loadSubcategory(\''+mainCateId+'\',\''+channel+'\',true)" style="color:#0c4473;cursor:pointer;">顯示全部項目 <img src="/WebResource/images/icon-caret-down.svg" alt="downSlide" style="height:15px;"/></a> </li>'
				// }else{
				// 	content += '<li class="list-group-item"><a rel="more" onclick="loadSubcategory(\''+mainCateId+'\',\''+channel+'\',false)" style="color:#0c4473;cursor:pointer;">顯示常用項目 <img src="/WebResource/images/icon-caret-up.svg" alt="downSlide" style="height:15px;"/></a> </li>'
				// }
			}
		
			$("#ul-"+mainCateId).html(content);
			
			//bootstrap3 tooltip 設置提示
		    $('[data-toggle="tooltip"]').tooltip();
		
		
		}
	}) 
}


var cateAllShow = getAllOptions;
function changeItemOption(element) {
	cateAllShow = element.value;
	getCategories(channel, element.value);

	backMainPage();
}

function backMainPage(){
		$(".searchPanel > .remove-icon").click();
	}


	
