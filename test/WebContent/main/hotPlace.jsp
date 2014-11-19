<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Insert title here</title>
		<link rel="stylesheet" type="text/css" href="../common/common.css"/>		<!-- footer, title css -->
		<link rel="stylesheet" type="text/css" href="../common/category.css" />		<!-- category css -->
		<link rel="stylesheet" type="text/css" href="../main/main.css"/>			<!-- main css -->
		
	</head>
	<body style="min-width:1260px;">
		<div>
			<jsp:include page="../common/title.jsp"/>			<!-- title -->
		</div>
		<div>
			<jsp:include page="../main/searchBar.jsp"/>			<!-- searchBar -->
		</div>
		
		<script type="text/javascript" src="../jQueryWeb.js"></script> 
		<script type="text/javascript" src="../jQueryWeb2.js"></script>
		
		<div class="content">									<!-- content -->
			<div class="HP_content">
				<div class="HP_box">
					<div class="HP_title">
						핫플 타이틀
					</div>
					<div class="HP_thumbnails">
						<span class="HP_stores">				<!-- hotplace 추천 11111111 -->
							<span class="HP_store_name" style="text-align:center;">
								7Train
							</span>
							<a href="#"><img src="./../images/ex1.jpg" width="300px;"/></a>
							<span class="HP_store_address">
								<span>서울 강남구 역삼동</span>		<!-- 주소값 -->
							</span>
							<span class="HP_store_starrate">	<!-- 평점값 -->
								d
							</span>
						</span>
						
					</div>
				</div>
			</div>
		</div>
		
		<div>
			<jsp:include page="../common/footer.jsp"/>		<!-- footer -->
		</div>
	</body>
</html>