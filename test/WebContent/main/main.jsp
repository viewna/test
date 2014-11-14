<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Insert title here</title>
		<link rel="stylesheet" type="text/css" href="../common/common.css"/>		<!-- footer, title css -->
		<link rel="stylesheet" type="text/css" href="../common/category.css" />		<!-- category css -->
		<link rel="stylesheet" type="text/css" href="main.css"/>							<!-- main css -->
		<link rel="stylesheet" type="text/css" href="../css/demo1.css" />					<!-- imageslide css -->
		<link rel="stylesheet" type="text/css" href="../css/elastislide.css" />				<!-- imageslide css -->
		
		<script src="../modernizr.custom.17475.js"></script>
	</head>
	<body>
		<div>
			<jsp:include page="../common/title.jsp"/>		<!-- title -->
		</div>
		<div>
			<jsp:include page="searchBar.jsp"/>				<!-- searchBar -->
		</div>
		
		
		<div class="main_content">
			<div class="store_box">
				<div class="store_box_title">
					<img src="./../images/1_HOT.png" height="55">
				</div>
			<div class="stores">
				<div class="container demo-1">
					<div class="main2">
						<!-- Elastislide Carousel -->
						<ul id="carousel" class="elastislide-list">
							<li><a href="#"><img src="./../images/ex1.jpg" /></a></li>
							<li><a href="#"><img src="./../images/ex2.jpg" /></a></li>
							<li><a href="#"><img src="./../images/ex3.jpg" /></a></li>
							<li><a href="#"><img src="./../images/ex4.jpg" /></a></li>
							<li><a href="#"><img src="./../images/ex1.jpg" /></a></li>
							<li><a href="#"><img src="./../images/ex2.jpg" /></a></li>
							<li><a href="#"><img src="./../images/ex3.jpg" /></a></li>
							<li><a href="#"><img src="./../images/ex4.jpg" /></a></li>
							
						</ul>
					</div>

				</div>
				<script type="text/javascript" src="../jquery.min.js"></script>
				<script type="text/javascript" src="../jquerypp.custom.js"></script>
				<script type="text/javascript" src="../jquery.elastislide.js"></script>
				<script type="text/javascript">
					$('#carousel').elastislide();
				</script>
			</div>
</div>
			<div class="store_box">
				<div class="store_box_title">
					<img src="./../images/2_REGION.png" height="55">
				</div>
				<div class="stores">
					접속 지역 기준 스토어 추천
				</div>
			</div>
			
			<div class="store_box">
				<div class="store_box_title">
					<img src="./../images/3_LIKES.png" height="55">
				</div>
				<div class="stores">
					추천수 기준 리뷰 추천
				</div>
			</div>
			
			<div class="store_box">
				<div class="store_box_title">
					<img src="./../images/4_NEW.png" height="55">
				</div>
				<div class="stores">
					새로 오픈된 스토어 추천
				</div>
			</div>
		</div>
		
		<div>
			<jsp:include page="../common/footer.jsp"/>		<!-- footer -->
		</div>
	</body>
</html>