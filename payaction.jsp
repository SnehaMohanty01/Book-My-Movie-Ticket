<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Secure Payment</title>
</head>
<body>
<%@ page import="java.sql.*" %>
<%
   
    String Cno = request.getParameter("cn");
    String Cname = request.getParameter("name");
    String Edate = request.getParameter("Ed");
    String CVV = request.getParameter("CV");
    

    try {
        
        Class.forName("oracle.jdbc.driver.OracleDriver");
        
      
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","system");

       
        PreparedStatement ps = con.prepareStatement("insert into pdata values(?,?,?,?)");
        ps.setString(1, Cno);
        ps.setString(2, Cname);
        ps.setString(3, Edate);
        ps.setString(4, CVV);

        int r = ps.executeUpdate();
        if(r>=1)
        	response.sendRedirect("conformation.html");
        }
        catch(Exception e)
        {
        out.println(e);
        }
%>
</body>
</html>
