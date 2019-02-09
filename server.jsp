<%@page import="kosta.Question"%>
<%@page import="java.util.List"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%!
    List<Question> list;
    %>
    
    
	<%
	String title = request.getParameter("name");
	String writer = request.getParameter("subject");
	
	
	if(list == null){
		System.out.println("1");
		list = new ArrayList<Question>();
		System.out.println("2");
		
	}
	if(title != null){
		System.out.println("4");
		list.add(new Question(title, writer));
	}
	
	System.out.println("5");
		
	if(list != null && list.size() != 0){
		String json = JSONArray.fromObject(list).toString();
		out.print(json);
	}
	
	System.out.println("ok");
	%>