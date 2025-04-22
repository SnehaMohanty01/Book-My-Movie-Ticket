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
      String username=request.getParameter("un");
String password=request.getParameter("pw");  

try
{
	Class.forName("oracle.jdbc.driver.OracleDriver");
	Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","system");
	PreparedStatement ps=con.prepareStatement("insert into logindata values(?,?)");
	ps.setString(1,username);
	ps.setString(2,password);
	
	int r=ps.executeUpdate();
	if(r>=1)
		response.sendRedirect("index.html");
}
catch(Exception e)
{
out.println(e);
}


%>
</body>
</html>
