<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Insert title here</title>
		<link rel="stylesheet" type="text/css" href="../common/common.css"/>		<!-- footer, title css -->
		<link rel="stylesheet" type="text/css" href="../common/category.css" />		<!-- category css -->
		<link rel="stylesheet" type="text/css" href="../main/main.css"/>			<!-- main css -->
		<link rel="stylesheet" type="text/css" href="../owner/owner.css"/>
		
		<script type="text/javascript" src="../jquery-2.1.1.js"></script>
	</head>
	<body style="min-width:1260px;">
		<c:set var="root" value="${pageContext.request.contextPath}"/>
		
		<div>
			<jsp:include page="../common/title.jsp"/>			<!-- title -->
		</div>

		<div class="content">									<!-- content -->
			<div class="myPage_content">
				<div class="myPage_box">
					<div class="result_title">					<!-- login title -->
						<img src="./../images/member_mypage.png" height="55">
					</div>
					<ul class="content_box">
						<li class="myProfile">					<!-- user의 프로필사진과 닉네임 받아오는 부분 -->
							<div class="myPhoto" style="padding-top:20px">
								<img src="./../images/profile.png" width="150px">
							</div>
						</li>
						<li>
							<!-- user정보 : 순서대로 level, email, 우편번호, 남긴 리뷰갯수  -->
							<div class="profile_content" style="padding-top:65px;">		
								<p>
									<img src="./../images/pick.png" height="25"><b class="label" >아이디</b>
									<input type="text" class="profile_input error" style="width:170px;" value="e-mail" name="e-mail" readonly>
								</p>
								<p>
									<img src="./../images/pick.png" height="25"><b class="label">사업자 등록번호</b>
									<input type="text" class="profile_input error" style="width:140px;" value="zipcode" name="zipcode" readonly>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div>
			<jsp:include page="../common/footer.jsp"/>			<!-- footer -->
		</div>
	</body>
</html>