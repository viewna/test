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
	
		<script type="text/javascript" src="../jquery/jquery.js"></script>
		<script type="text/javascript" src="../jquery/jquery.validate.js"></script>
		<script type="text/javascript" src="script.js"></script>
		
		<script type="text/javascript">
			 $(document).ready(function(){
			  $("#valiex").validate({
			   rules: {
			    name: {
			     required: true,
			     minlength: 2,
			     maxlength: 15
			    },
			 email: {
			     required: true,
			     email: true
			    },
			    
			    business: {
			    	required: true,
			    	business: true
			    },
			    
			    password: {
			     required: true,
			     minlength: 3,
			     maxlength: 12
			    },
			    
			    pwchk: {
			     required: true,
			     minlength: 3,
			     maxlength: 12,
			     equalTo: "#password"
			    }
			   },
			   
			   messages: {
			    name: {
			     required: " 닉네임을 입력하세요.",
			     minlength: " {0}글자 이상으로 입력하세요.",
			     maxlength: " {0}글자 이하로 입력하세요."
			    },
			    email: {
			     required: " 이메일을 입력하세요.",
			     email: " 이메일을 바르게 입력하세요."
			    },
			
			    business: {
			     required: " 사업자번호를 입력하세요.",
			     business: " 올바르게 입력하쇼."
			    },
			    
			    password: {
			     required: " 비밀 번호를 입력하세요.",
			     minlength: " {0}글자 이상으로 입력하세요.",
			     maxlength: " {0}글자 이하로 입력하세요."
			    },
			    pwchk: {
			     required: " 비밀 번호를 입력하세요.",
			     minlength: " {0}글자 이상으로 입력하세요.",
			     maxlength: " {0}글자 이하로 입력하세요.",
			     equalTo: " 비밀 번호가 서로 일치하지 않습니다."
			    }
			   }
			  });
			 });
		</script>
	</head>
	<body>
		<div>
			<jsp:include page="../common/title.jsp"/>								<!-- title -->
		</div>
		
		
		<div class="content">
			<div class="content_login">
				<form id="valiex" novalidate="novalidate">
					<p>
						이메일 <input type="text" name="email" class="error"><label
							for="email" generated="true" class="error"> 이메일을 입력하세요.</label>
					</p>
					
					<p>
						닉네임 <input type="text" name="name" class="error"><label
							for="name" generated="true" class="error"> 2글자 이상으로 입력하세요.</label>
					</p>
			
					<p>
						사업자등록번호 <input type="text" id="business" name="business" class="error"><label
							for="business" generated="true" class="error"> 사업자 번호를 입력하세요.</label>
					</p>
					
					<p>
						비밀 번호 <input type="password" id="password" name="password" class="error"><label
							for="password" generated="true" class="error"> 비밀 번호를 입력하세요.</label>
					</p>
					
					<p>
						비밀 번호 확인 <input type="password" id="pwchk" name="pwchk" class="error"><label
							for="pwchk" generated="true" class="error"> 비밀번호를 입력하세요.</label>
					</p>
					
					<input type="submit" value="가입">
					<input type="reset" value="취소">
				</form>
			</div>
		</div>
		
		<div>
			<jsp:include page="../common/footer.jsp"/>			<!-- footer -->
		</div>
	</body>
</html>