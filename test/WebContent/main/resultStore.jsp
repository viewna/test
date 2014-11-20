<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Insert title here</title>
		<link rel="stylesheet" type="text/css" href="../common/common.css"/>		<!-- footer, title css -->
		<link rel="stylesheet" type="text/css" href="../common/category.css" />		<!-- category css -->
		<link rel="stylesheet" type="text/css" href="main.css"/>					<!-- main css -->
	</head>
	<body style="min-width:1260px;">
		<div>
			<jsp:include page="../common/title.jsp"/>			<!-- title -->
		</div>
		<div>
			<jsp:include page="searchBar.jsp"/>					<!-- searchBar -->
		</div>
		
		<script type="text/javascript" src="../jQueryWeb.js"></script> 
		<script type="text/javascript" src="../jQueryWeb2.js"></script>
		
		<div class="content">									<!-- content -->
			<div class="RS_content">
				<div class="RS_box">
					<div class="RS_title">
						<img src="./../images/ct_1.png" height="40px;"/>
						<!-- 
						<img src="./../images/ct_2.png" height="40px;"/>
						<img src="./../images/ct_3.png" height="40px;"/>
						<img src="./../images/ct_4.png" height="40px;"/>
						<img src="./../images/ct_5.png" height="40px;"/>
						<img src="./../images/ct_6.png" height="40px;"/>
						<img src="./../images/ct_7.png" height="40px;"/>
						<img src="./../images/ct_8.png" height="40px;"/>
						<img src="./../images/ct_9.png" height="40px;"/>
						<img src="./../images/ct_10.png" height="40px;"/>
						<img src="./../images/ct_11.png" height="40px;"/>
						<img src="./../images/ct_12.png" height="40px;"/>
						<img src="./../images/ct_13.png" height="40px;"/>
						 -->
					</div>
					
					<%-- 										<!-- findStore 결과폼과 동일 -->
					<div id="resultCount" class="resultCount"></div>
					<div id="result" class="result_box"></div>
					 --%>
					
					<div class="RS_Category">
						<jsp:include page="resultCategory.jsp"/>	
					</div>
				</div>
			</div>
		</div>
		
		<div>
			<jsp:include page="../common/footer.jsp"/>		<!-- footer -->
		</div>
	</body>
</html>