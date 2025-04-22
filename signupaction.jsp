<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@page import="java.sql.*" %>
<%
      String uname=request.getParameter("un");
String upass=request.getParameter("pw");  
String uemail=request.getParameter("em");
try
{
	Class.forName("oracle.jdbc.driver.OracleDriver");
	Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","system");
	PreparedStatement ps=con.prepareStatement("insert into movregdata values(?,?,?)");
	ps.setString(1,uname);
	ps.setString(2,upass);
	ps.setString(3,uemail);
	int r=ps.executeUpdate();
	if(r>=1)
		response.sendRedirect("login.html");
}
catch(Exception e)
{
out.println(e);
}


%>

</body>
</html>
