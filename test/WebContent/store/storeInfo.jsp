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
					<span class="result_value">					<!-- 검색해서 넘어온 가게 이름 -->
						7Train
					</span>
				</div>
				<div class="first_box">
					<ul class="storeInfo_ul">
						<li class="storeInfo_box">
							<div class="starrate">				<!-- 별점표시 -->
								<img src="./../images/rate_title.png" height="50">
								<img src="./../images/starrate_ex.png" height="50" style="margin-left:30px;">
							</div>
							<div class="txt">					<!-- 스토어 정보 -->
								<!-- Category -->
								음식점>술집<br/>
								<!-- service Time -->
								영업시간 : 6:00pm~2:00am<br/>
								<!-- Address -->
								위      치 : 서울 강남구 역삼동<br/>
								
								<!-- open Date -->
								<br/>
								<!-- homepage Address -->
								www.7train.kr<br/>
								<!-- phone Number -->
								02-553-7850<br/>
								<!-- status -->
								OPEN<br/>
							</div>
							<div class="map">					<!-- 스토어 위치 -->
								MAP
							</div>
						</li>
						
						<li class="store_pic"><img src="./../images/ex1.jpg"
							height="300"></li>
	
						<li class="store_icon">					<!-- 스토어 info -->
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
					<div style="text-align:right; background-color:white;">
						<img src="./../images/review_title.png" height="55">
					</div>
					<%-- <jsp:include page="SmartEditor2.html" /> 	 --%>
				</div>
			</div>
		</div>
	
		<div>
			<jsp:include page="../common/footer.jsp" /> 		<!-- footer -->
		</div>
	</body>
</html>