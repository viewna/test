<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Insert title here</title>
		
		<link rel="stylesheet" type="text/css" href="../common/common.css" /> 			<!-- footer, title css -->
		<link rel="stylesheet" type="text/css" href="../common/category.css" /> 		<!-- category css -->
		<link rel="stylesheet" type="text/css" href="../main/main.css" /> 				<!-- main css -->
		<link rel="stylesheet" type="text/css" href="../store/store.css" />
	</head>
	<body>
		<div>
			<jsp:include page="../common/title.jsp" /> 			<!-- title -->
		</div>
	
		<div class="content">
			<div class="storeInfo_content">
				<div class="result_img"> 						<!-- result title -->
					<img src="./../images/about.png" height="55"/>
					<span>
						7Train
					</span>
				</div>
				<div class="first_box">
					<ul class="storeInfo_ul">
						<li class="storeInfo_txt">
							<span class="c"> <a
								href="http://tvcast.naver.com/dollhouse"
								onclick="return clickcr(this,'tcc_tvc.origin','7803E801_0000000121E3','', event);">한중미
									동시 공개!</a></span> <span class="e"><a
								href="http://tvcast.naver.com/v/235851"
								onclick="return clickcr(this,'tcc_tvc.special1','7803E801_0000000121E3','', event);">동화같은
									집에 수양딸로 들어간 그녀에게 들려오는 한 소녀의 울음소리 "여기 오면 안돼"</a></span>
						</li>
						
						<li class="store_pic"><img src="./../images/ex1.jpg"
							height="300"></li>
	
						<li class="store_icon">
							<img src="./../images_store_info/card.png" width="55" style="margin-right:10px;">
							<img src="./../images_store_info/group.png" width="55" style="margin-right:10px;">
							<img src="./../images_store_info/toilet.png" width="45" style="margin-right:10px;">
							<img src="./../images_store_info/wifi.png" width="50" style="margin-right:10px;">
						</li>
					</ul>
				</div>
	
				<div class="img_collection">					<!-- 모아보기 -->
	
				</div>
				
				<div class="write_box"> 						<!-- 리뷰창 -->
					<!-- <div style="text-align:right; background-color:white;">
						<img src="./../images/review_title.png" height="55">
					</div> -->
					<%-- <jsp:include page="SmartEditor2.html" /> 	 --%>
				</div>
			</div>
		</div>
	
		<div>
			<jsp:include page="../common/footer.jsp" /> 		<!-- footer -->
		</div>
	</body>
</html>